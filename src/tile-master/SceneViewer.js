import React from 'react';

class SceneViewer extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      "height"  : props.height,
      "width"   : props.width
    }
  }

  placeTile(event)
  {
    console.log(event);
  }

  render()
  {
    return (
      <canvas height  = {this.state.height}
              id      = "scene_canvas"
              onClick = {this.placeTile}
              style   = {{backgroundColor: "black"}}
              width   = {this.state.width}>
      </canvas>
    );
  }
}

export default SceneViewer;
