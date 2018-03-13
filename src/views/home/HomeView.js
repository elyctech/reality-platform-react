import React  from "react";

import {
  Link
} from "react-router-dom";

class IndexView extends React.Component
{
  render()
  {
    return (
      <div id = "home">
        <h1>Welcome to Your Reality</h1>
        <div>
          <p>
            Reality is a platform allowing its users (called Dreamers) express their creativity with a complete suite of Creators - tools Dreamers can use to build their Dreams and make them realities.
          </p>
        </div>
        <div>
          <h2>Start Dreaming</h2>
          <div>
            <Link to="/dreamers/returning">
              Log in to continue crafting your Dreams.
            </Link>
            OR
            <Link to="/dreamers/new">
              Sign up to turn your own Dreams into Realities.
            </Link>
          </div>
        </div>
        <div>
          <h2>Who Else is Dreaming</h2>
          <div>
            Take a look at some of our favorite Dreamers.
          </div>
        </div>
        <div>
          <h2>Share Your Reality</h2>
          <div>
            There are a number of ways to let others experience your Dreams - learn how!
          </div>
        </div>
      </div>
    );
  }
}

export default IndexView;