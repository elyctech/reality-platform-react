import React    from "react";
import ReactDOM from "react-dom";
import               "./index.css";

import HomeView     from "./views/home/HomeView";
import Navigation   from "./views/index/components/Navigation";
import NotFoundView from "./views/not-found/NotFoundView";

import registerServiceWorker  from "./registerServiceWorker";

import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";

ReactDOM.render((
  <BrowserRouter>
    <div>
      <header className = "header">
        <Link to = "/">
          Home
        </Link>
      </header>
      <div>
        <Navigation
          userLoggedIn={false}
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
  </BrowserRouter>
), document.getElementById('app'));

registerServiceWorker();
