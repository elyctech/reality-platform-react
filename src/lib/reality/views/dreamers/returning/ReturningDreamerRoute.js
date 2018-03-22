import React  from "react";

import {
  Redirect,
  Route
} from "react-router-dom";

class ReturningDreamerRoute extends Route
{
  render()
  {
    let routeComponent;

    if (
      this.props.dreamer
    ) {
      routeComponent  = React.createElement(
        Redirect,
        {
          "to"  : `/dreamers/${this.props.dreamer.username}/dashboard`
        }
      );
    }
    else
    {
      routeComponent  = React.createElement(
        this.props.view,
        {
          "controller"      : this.props.controller,
          "dreamerService"  : this.props.dreamerService,
          "setDreamer"      : this.props.setDreamer
        }
      );
    }

    return routeComponent;
  }
}

export default ReturningDreamerRoute;
