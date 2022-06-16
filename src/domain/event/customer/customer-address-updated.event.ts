import EventInterface from '../shared/event.interface';
class CustomerAddressUpdatedEvent implements EventInterface {
  dateTimeOcurred: Date;
  eventData: any;

  constructor(eventData: any) {
    this.dateTimeOcurred = new Date();
    this.eventData = eventData;
  }
}

export default CustomerAddressUpdatedEvent;
