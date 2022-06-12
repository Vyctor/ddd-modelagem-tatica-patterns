import Customer from '../entity/customer';
import RepositoryInterface from './repository.interface';
import Order from '../entity/order';

interface OrderRepositoryInterface extends RepositoryInterface<Order> {}

export default OrderRepositoryInterface;
