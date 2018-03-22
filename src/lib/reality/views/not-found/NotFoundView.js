import React  from "react";

import {
  Link
} from  "react-router-dom";

class NotFoundView extends React.Component
{
  render()
  {
    return (
      <div id = "not-found-view">
        <h1>This Is Not the Page You Are Looking For</h1>
        <p>
          The URI you are trying to navigate to does not exist. Double-check to make sure it is correct. If you believe this is an error, please <Link to = "/report/site-error">report it</Link>.
        </p>
      </div>
    );
  }
}

export default NotFoundView;