class FlashMessageService
{
  constructor()
  {
    this.messages = [];
  }

  queueMessage(content, type)
  {
    this.messages.push({
      content,
      type
    });
  }

  flushMessages()
  {
    const messages  = this.messages;

    this.messages = [];

    return messages;
  }
}

export default FlashMessageService;
