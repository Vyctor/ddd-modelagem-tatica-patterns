import SendEmailWhenProductIsCreatedHandler from '../product/handler/send-email-when-product-is-created.handler';
import EventDispatcher from './event-dispatcher';
import ProductCreatedEvent from '../product/product-created.event';
describe('Domain events tests', () => {
  it('should register an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register('ProductCreatedEvent', eventHandler);

    expect(eventDispatcher.eventHandlers['ProductCreatedEvent']).toBeDefined();

    expect(eventDispatcher.eventHandlers['ProductCreatedEvent'].length).toBe(1);

    expect(eventDispatcher.eventHandlers['ProductCreatedEvent'][0]).toMatchObject(eventHandler);
  });

  it('should unregister an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register('ProductCreatedEvent', eventHandler);

    expect(eventDispatcher.eventHandlers['ProductCreatedEvent'][0]).toMatchObject(eventHandler);

    eventDispatcher.unregister('ProductCreatedEvent', eventHandler);

    expect(eventDispatcher.eventHandlers['ProductCreatedEvent'].length).toBe(0);
  });

  it('should unregister all event handlers', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register('ProductCreatedEvent', eventHandler);

    expect(eventDispatcher.eventHandlers['ProductCreatedEvent'][0]).toMatchObject(eventHandler);

    eventDispatcher.unregisterAll();

    expect(eventDispatcher.eventHandlers).toStrictEqual({});
    expect(eventDispatcher.eventHandlers['ProductCreatedEvent']).toBeUndefined();
  });

  it('should notify all event handlers', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, 'handle');

    eventDispatcher.register('ProductCreatedEvent', eventHandler);

    expect(eventDispatcher.eventHandlers['ProductCreatedEvent'][0]).toMatchObject(eventHandler);

    const productCreatedEvent = new ProductCreatedEvent({
      product: {
        id: 1,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 10,
        created_at: new Date(),
      },
    });

    eventDispatcher.notify(productCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
