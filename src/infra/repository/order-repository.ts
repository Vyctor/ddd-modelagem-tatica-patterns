import OrderRepositoryInterface from '../../domain/repository/order-repository.interface';
import Order from '../../domain/entity/order';
import OrderModel from '../database/sequelize/model/order.model';
import OrderItemModel from '../database/sequelize/model/order-item.model';
import OrderItem from '../../domain/entity/order-item';

class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customer_id,
        total: entity.total,
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.product_id,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      },
    );
  }

  async update(entity: Order): Promise<void> {
    const order = await OrderModel.findOne({ where: { id: entity.id }, include: [{ model: OrderItemModel }] });

    order.update({
      id: entity.id,
      customer_id: entity.customer_id,
      total: entity.total,
      items: entity.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        product_id: item.product_id,
        quantity: item.quantity,
      })),
    });
  }

  async delete(id: string): Promise<void> {
    await OrderModel.destroy({
      where: {
        id,
      },
    });
  }

  async find(id: string): Promise<Order> {
    const order = await OrderModel.findOne({ where: { id }, include: [{ model: OrderItemModel }] });

    return new Order(
      order.id,
      order.customer_id,
      order.items.map(
        (orderItem) => new OrderItem(orderItem.id, orderItem.product_id, orderItem.name, orderItem.price, orderItem.quantity),
      ),
    );
  }

  async findAll(): Promise<Order[]> {
    const orders = await OrderModel.findAll({
      include: [{ model: OrderItemModel }],
    });

    return orders.map(
      (order) =>
        new Order(
          order.id,
          order.customer_id,
          order.items.map(
            (orderItem) => new OrderItem(orderItem.id, orderItem.product_id, orderItem.name, orderItem.price, orderItem.quantity),
          ),
        ),
    );
  }
}

export default OrderRepository;
