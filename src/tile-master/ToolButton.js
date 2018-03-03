import React from 'react';

class ToolButton extends React.Component
{
  constructor(props)
  {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer()
  {
    this.props.toggleDrawer(
      this.props.toolId
    );
  }

  render()
  {
    return (
      <span className = "tool-button"
            onClick   = {this.toggleDrawer}
      >
        {this.props.title}
      </span>
    );
  }
}

export default ToolButton;