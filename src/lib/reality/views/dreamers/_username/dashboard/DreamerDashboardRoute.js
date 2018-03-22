import React  from "react";

import {
  Redirect,
  Route
} from "react-router-dom";

class DreamerDashboardRoute extends Route
{
  render()
  {
    let routeComponent;

    if (
      this.props.dreamer
    ) {
      routeComponent  = React.createElement(
        this.props.view,
        {
          "dreamer" : this.props.dreamer
        }
      );
    }
    else
    {
      routeComponent  = React.createElement(
        Redirect,
        {
          "to"  : `/dreamers/returning`
        }
      );
    }

    return routeComponent;
  }
}

export default DreamerDashboardRoute;
