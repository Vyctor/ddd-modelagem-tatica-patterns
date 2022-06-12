import { Sequelize } from 'sequelize-typescript';
import CustomerModel from '../database/sequelize/model/customer.model';
import OrderModel from '../database/sequelize/model/order.model';
import ProductModel from '../database/sequelize/model/product.model';
import OrderItemModel from '../database/sequelize/model/order-item.model';
import CustomerRepository from './customer-repository';
import Address from '../../domain/entity/address';
import Product from '../../domain/entity/product';
import Customer from '../../domain/entity/customer';
import ProductRepository from './product-repository';
import OrderItem from '../../domain/entity/order-item';
import Order from '../../domain/entity/order';
import OrderRepository from './order-repository';

let sequelize: Sequelize;

describe('Order repository test', () => {
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([OrderModel, OrderItemModel, ProductModel, CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should create a new order', async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer('123', 'Customer 1');
    const address = new Address('Street', 1, 'City', 'State', '12312323');
    customer.changeAddress(address);
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product('123', 'Product 1', 10);
    await productRepository.create(product);

    const orderItem = new OrderItem('123', product.id, product.name, product.price, 2);

    const order = new Order('123', customer.id, [orderItem]);

    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ['items'],
    });

    expect(orderModel.toJSON()).toStrictEqual({
      id: '123',
      customer_id: '123',
      total: order.total,
      items: [
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          quantity: orderItem.quantity,
          order_id: '123',
          product_id: '123',
        },
      ],
    });
  });
});
