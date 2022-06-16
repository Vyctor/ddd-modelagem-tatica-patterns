describe('Domain events tests', () => {
  it('should register an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedEventHandler();

    eventDispatcher.register('ProductCreatedEvent', eventHandler);

    expect(eventDispatcher.getEventHandlers('ProductCreatedEvent')).toBeDefined();

    expect(eventDispatcher.getEventHandlers('ProductCreatedEvent').length).toBe(1);
  });
});
