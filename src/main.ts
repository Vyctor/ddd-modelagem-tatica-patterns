import Address from './entity/address';
import Customer from './entity/customer';
import Order from './entity/order';
import OrderItem from './entity/order-item';

const customerAddress = new Address('Vyctor Street', 32, 'Vyctor City', 'Vyctor State', 'Vyctor Zip');

const customer = new Customer('1', 'Vyctor', customerAddress);
customer.activate();

const item1 = new OrderItem('1', 'Item 1', 10);
const item2 = new OrderItem('2', 'Item 2', 15);

const order = new Order('1', '1', [item1, item2]);

console.log(customer, order);

customer.deactivate();

console.log(customer, order);
