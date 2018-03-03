import React        from 'react';

import LayerManager from './layer-manager/LayerManager';
import SceneManager from './scene-manager/SceneManager';
import ToolButton   from "./ToolButton";
import ToolDrawer   from "./ToolDrawer";
import TileManager  from './tile-manager/TileManager';

class ToolBox extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      "openDrawer"  : null
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);

    const toolData  = new Map([
      [
        "scene-manager",
        {
          "element" : React.createElement(SceneManager),
          "title"   : "Scene Manager"
        }
      ],
      [
        "tile-manager",
        {
          "element" : React.createElement(TileManager),
          "title"   : "Tile Manager"
        }
      ],
      [
        "layer-manager",
        {
          "element" : React.createElement(LayerManager),
          "title"   : "Layer Manager"
        }
      ]
    ]);

    this.toolButtons  = [];
    this.toolDrawers = new Map();

    for (let [toolId, tool] of toolData)
    {
      this.toolButtons.push(
        React.createElement(
          ToolButton,
          {
            key           : toolId,
            title         : tool.title,
            toggleDrawer  : this.toggleDrawer,
            toolId        : toolId
          }
        )
      );

      this.toolDrawers.set(
        toolId,
        React.createElement(
          ToolDrawer,
          {
            title   : tool.title,
            toolId  : toolId
          },
          tool.element
        )
      );
    }
  }

  toggleDrawer(toolId)
  {
    this.setState({
      "openDrawer"  : toolId
    });
  }

  render()
  {
    return (
      <div>
        <section>
          {this.toolButtons}
        </section>
        <section>
          {this.toolDrawers.get(this.state.openDrawer)}
        </section>
      </div>
    );
  }
}

export default ToolBox;