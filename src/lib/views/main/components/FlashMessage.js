import React  from "react";

class FlashMessage extends React.Component
{
  render()
  {
    return (
      <p
        className = {this.props.type}
      >
        {this.props.content}
      </p>
    );
  }
}

export default FlashMessage;
