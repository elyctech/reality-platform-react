import React      from 'react';

import ToolButton from "./ToolButton";

class ToolBox extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      "tools" : new Map([
        ["scene-manager", "Scene Manager"],
        ["tile-manager",  "Tile Manager"],
        ["layer-manager", "Layer Manager"]
      ])
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(toolId)
  {
    console.log(`Toggling ${this.state.tools.get(toolId)}`);
  }

  render()
  {
    const buttons = [];

    for (let [toolId, title] of this.state.tools)
    {
      buttons.push(
        <ToolButton title         = {title}
                    toggleDrawer  = {this.toggleDrawer}
                    toolId        = {toolId}
        />
      );
    }

    return (
      <section>
        {buttons}
      </section>
    );
  }
}

export default ToolBox;