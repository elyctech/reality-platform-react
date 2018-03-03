import React        from 'react';

import SceneViewer  from "./SceneViewer";
import ToolBox      from "./ToolBox";

class TileMaster extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      "height"  : 576,
      "width"   : 640
    }
  }

  render()
  {
    return (
      <div>
        <SceneViewer
          height  = {this.state.height}
          width   = {this.state.width}
        />
        <ToolBox/>
      </div>
    );
  }
}

export default TileMaster;
