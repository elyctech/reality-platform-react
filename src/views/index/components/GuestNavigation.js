import React  from "react";

import {
  Link
} from  "react-router-dom";

class GuestNavigation extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {

    };
  }

  render()
  {
    return (
      <nav>
        <Link to="/dreamers/returning">Log In</Link> |
        <Link to="/dreamers/new">Sign up</Link>
      </nav>
    );
  }
}

export default GuestNavigation;