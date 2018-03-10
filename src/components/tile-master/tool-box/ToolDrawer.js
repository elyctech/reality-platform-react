import React  from "react";

class ToolDrawer extends React.Component
{
  render()
  {
    return (
      <div  className = "tool-drawer">
        {this.props.children}
      </div>
    );
  }
}

export default ToolDrawer;