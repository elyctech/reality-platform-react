import React  from "react";

import HomeView             from "./lib/views/home/HomeView";
import Navigation           from "./lib/views/index/components/Navigation";
import NotFoundView         from "./lib/views/not-found/NotFoundView";

import {
  Link,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <header className = "header">
          <Link to = "/">
            Home
          </Link>
        </header>
        <div>
          <Navigation
            userLoggedIn  = {false}
          />
        </div>

        <Switch>
          <Route
            component = {HomeView}
            exact
            path      = "/"
          />
          <Route
            component = {NotFoundView}
          />
        </Switch>
      </div>
    );
  }
}

export default App;