import React  from "react";

import {
  Redirect
} from "react-router-dom";

class NewDreamerView extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      "username"  : null,
      "password"  : null
    };

    this.createAccount  = this.props.controller.createAccount.bind(this);
    this.setUsername    = this.props.controller.setUsername.bind(this);
    this.setPassword    = this.props.controller.setPassword.bind(this);
  }

  render()
  {
    let renderComponent;

    if (this.state.signedUp)
    {
      renderComponent = (
        <Redirect
          to="/dreamers/returning"
        />
      )
    }
    else
    {
      renderComponent = (
        <form
          className = "new_dreamer"
          onSubmit  = {this.createAccount}
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
            className = "new_dreamer_submit"
          >
            <input
              type  = "submit"
              value = "Start Dreaming"
            />
          </div>
        </form>
      );
    }

    return renderComponent;
  }
}

export default NewDreamerView;