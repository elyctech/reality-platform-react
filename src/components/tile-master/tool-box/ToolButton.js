import React  from "react";

class ToolButton extends React.Component
{
  render()
  {
    return (
      <span className = "tool-button"
            onClick   = {this.props.onClick}
      >
        {this.props.title}
      </span>
    );
  }
}

export default ToolButton;