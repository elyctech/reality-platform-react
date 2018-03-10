import React  from "react";

import SceneViewer  from "./scene-viewer/SceneViewer";
import ToolBox      from "./tool-box/ToolBox";

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
