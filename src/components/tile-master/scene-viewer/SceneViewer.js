import React  from "react";

class SceneViewer extends React.Component
{
  placeTile(event)
  {
    console.log(event);
  }

  render()
  {
    return (
      <canvas height  = {this.props.height}
              id      = "scene_canvas"
              onClick = {this.placeTile}
              style   = {{backgroundColor: "black"}}
              width   = {this.props.width}>
      </canvas>
    );
  }
}

export default SceneViewer;
