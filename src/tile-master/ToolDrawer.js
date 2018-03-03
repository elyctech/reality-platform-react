import React from 'react';

class ToolDrawer extends React.Component
{
  render()
  {
    return (
      <article  className = "tool-drawer">
        <span   className = "tool-title">
          {this.props.title}
        </span>
        <div>
          {this.props.children}
        </div>
      </article>
    );
  }
}

export default ToolDrawer;