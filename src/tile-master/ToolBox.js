import React        from "react";

import LayerManager from "./layer-manager/LayerManager";
import SceneManager from "./scene-manager/SceneManager";
import ToolButton   from "./ToolButton";
import ToolDrawer   from "./ToolDrawer";
import TileManager  from './tile-manager/TileManager';

class ToolBox extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      "openedDrawerContents"  : null
    };
  }

  closeDrawer()
  {
    this.setState({
      "openedDrawerContents"  : null
    });
  }

  toggleDrawer(toolId)
  {
    if (toolId === this.state.openedDrawerContents)
    {
      this.closeDrawer();
    }
    else
    {
      this.setState({
        "openedDrawerContents"  : toolId
      });
    }
  }

  render()
  {
    const layerManager  = React.createElement(
      LayerManager
    );

    const sceneManager  = React.createElement(
      SceneManager,
      {
        "height"              : this.props.sceneHeight,
        "width"               : this.props.sceneWidth,
        "setSceneDimensions"  : (height, width) =>
        {
          this.props.setSceneDimensions(
            height,
            width
          );
          this.closeDrawer();
        }
      }
    );

    const tileManager   = React.createElement(
      TileManager
    );

    const buttons = [
      React.createElement(
        ToolButton,
        {
          "key"     : "layer-manager",
          "onClick" : this.toggleDrawer.bind(
            this,
            layerManager
          ),
          "title"   : "Layer Manager"
        }
      ),
      React.createElement(
        ToolButton,
        {
          "key"     : "scene-manager",
          "onClick" : this.toggleDrawer.bind(
            this,
            sceneManager
          ),
          "title"   : "Scene Manager"
        }
      ),
      React.createElement(
        ToolButton,
        {
          "key"     : "tile-manager",
          "onClick" : this.toggleDrawer.bind(
            this,
            tileManager
          ),
          "title"   : "Tile Manager"
        }
      )
    ];

    var toolDrawer;

    if (this.state.openedDrawerContents)
    {
      toolDrawer  = React.createElement(
        ToolDrawer,
        {},
        this.state.openedDrawerContents
      )
    }

    return (
      <div>
        <div  className = "tool-buttons">
          {buttons}
        </div>
        <div>
          {toolDrawer}
        </div>
      </div>
    );
  }
}

export default ToolBox;