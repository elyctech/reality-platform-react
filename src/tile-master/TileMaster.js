import React        from "react";

import SceneManager from "./scene-manager/SceneManager";
import SceneViewer  from "./SceneViewer";
import ToolBox      from "./ToolBox";

class TileMaster extends React.Component
{
  constructor(props)
  {
    super(props);

    this.setSceneDimensions = this.setSceneDimensions.bind(this);

    this.state = {
      "sceneHeight"  : 576,
      "sceneWidth"   : 640
    };
  }

  setSceneDimensions(height, width)
  {
    this.setState({
      "sceneHeight"  : height,
      "sceneWidth"   : width
    });
  }

  render()
  {
    return (
      <div>
        <SceneViewer
          height  = {this.state.sceneHeight}
          width   = {this.state.sceneWidth}
        />
        <ToolBox  sceneHeight         = {this.state.sceneHeight}
                  sceneWidth          = {this.state.sceneWidth}
                  setSceneDimensions  = {this.setSceneDimensions}
        />
      </div>
    );
  }
}

export default TileMaster;
