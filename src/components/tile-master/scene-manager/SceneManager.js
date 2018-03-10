import React  from "react";

class SceneManager extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state  = {
      "height"  : props.height,
      "width"   : props.width
    }

    this.save       = this.save.bind(this);
    this.setHeight  = this.setHeight.bind(this);
    this.setWidth   = this.setWidth.bind(this);
  }

  save(event)
  {
    event.preventDefault();

    this.props.setSceneDimensions(
      this.state.height,
      this.state.width
    );
  }

  setHeight(event)
  {
    this.setState({
      "height"  : event.target.value
    });
  }

  setWidth(event)
  {
    this.setState({
      "width"  : event.target.value
    });
  }

  render()
  {
    return (
      <form id="scene-manager"
            onSubmit  = {this.save}
      >
        <div>
          <label>
            <span className="input-title">Height:</span>
            <input  name      = "height"
                    onChange  = {this.setHeight}
                    type      = "text"
                    value     = {this.state.height}
            />
          </label>
        </div>
        <div>
          <label>
            <span className="input-title">Width:</span>
            <input  name      = "width"
                    onChange  = {this.setWidth}
                    type      = "text"
                    value     = {this.state.width}
            />
          </label>
        </div>
        <input type="submit" name="Save"/>
      </form>
    );
  }
}

export default SceneManager;