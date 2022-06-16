import EventHandlerInterface from '../../shared/event-handler.interface';
import CustomerCreatedEvent from '../customer-created.event';

class CreateLogWhenCustomerIsCreatedHandler implements EventHandlerInterface<CustomerCreatedEvent> {
  handle(event: CustomerCreatedEvent): void {
    console.log('Esse é o segundo console.log do evento: CustomerCreated', event.eventData);
  }
}

export default CreateLogWhenCustomerIsCreatedHandler;
