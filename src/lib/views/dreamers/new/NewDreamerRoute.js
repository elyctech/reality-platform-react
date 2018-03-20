import React  from "react";

import {
  Redirect,
  Route
} from "react-router-dom";

class NewDreamerRoute extends Route
{
  render()
  {
    console.log("new dreamers route");
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
          "controller"          : this.props.controller,
          "dreamerService"      : this.props.dreamerService,
          "flashMessageService" : this.props.flashMessageService
        }
      );
    }

    return routeComponent;
  }
}

export default NewDreamerRoute;
