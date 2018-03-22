import React  from "react";

import FlashMessage from "./FlashMessage";

class FlashMessenger extends React.Component
{
  render()
  {
    const messages    = this.props.flashMessageService.flushMessages();

    const messageItems  = messages.map(
      (message, index) =>
      {
        message.key = index;

        return React.createElement(
          FlashMessage,
          message
        );
      }
    )

    return (
      <div
        className = "flash_messenger"
      >
        {messageItems}
      </div>
    );
  }
}

export default FlashMessenger;
