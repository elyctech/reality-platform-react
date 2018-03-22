import React  from "react";

import {
  Redirect
} from "react-router-dom";

class ReturningDreamerView extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      "dreamer"   : this.props.dreamer,
      "username"  : null,
      "password"  : null
    };

    this.logIn        = this.props.controller.logIn.bind(this);
    this.setUsername  = this.props.controller.setUsername.bind(this);
    this.setPassword  = this.props.controller.setPassword.bind(this);
  }

  render()
  {
    let renderComponent;

    if (this.state.dreamer)
    {
      renderComponent = (
        <Redirect
          to  = {`/dreamers/${this.state.dreamer.username}/dashboard`}
        />
      );
    }
    else
    {
      renderComponent = (
        <form
          className = "returning_dreamer"
          onSubmit  = {this.logIn}
        >
          <div>
            <label
              className = "username"
            >
              Username:
              <input
                name  = "username"
                onChange  = {this.setUsername}
                type  = "text"
              />
              <span
                className = "error">
              </span>
            </label>
          </div>
          <div>
            <label
              className = "password"
            >
              Password:
              <input
                name  = "password"
                onChange  = {this.setPassword}
                type  = "password"
              />
              <span
                className="error"
              >
              </span>
            </label>
          </div>
          <div
            className = "returning_dreamer_submit"
          >
            <input
              type  = "submit"
              value = "Continue Dreaming"
            />
          </div>
        </form>
      );
    }

    return renderComponent;
  }
}

export default ReturningDreamerView;