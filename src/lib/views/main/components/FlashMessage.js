import React  from "react";

class FlashMessage extends React.Component
{
  render()
  {
    return (
      <div
        className = {this.props.type}
      >
        {this.props.content}
      </div>
    );
  }
}

export default FlashMessage;
