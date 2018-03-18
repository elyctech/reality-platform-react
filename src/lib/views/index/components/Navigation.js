import React  from "react";

import GuestNavigation  from "./GuestNavigation";

class Navigation extends React.Component
{
  render()
  {
    let navigation;

    if (this.props.userLoggedIn)
    {
      navigation  = React.createElement(
        UserNavigation
      );
    }
    else
    {
      navigation  = React.createElement(
        GuestNavigation
      );
    }

    return navigation;
  }
}

export default Navigation;