import React  from "react";

import AsyncComponent from "../../components/AsyncComponent";

import DreamerDashboardView from "../dreamers/_username/dashboard/DreamerDashboardView";
import FlashMessenger       from "../main/components/FlashMessenger";
import HomeView             from "../home/HomeView";
import Navigation           from "../main/components/Navigation";
import NewDreamerView       from "../dreamers/new/NewDreamerView";
import NotFoundView         from "../not-found/NotFoundView";
import ReturningDreamerView from "../dreamers/returning/ReturningDreamerView";

import flashMessageService        from "../../../app/services/flashMessageService"
import newDreamerController       from "../../../app/views/dreamers/returning/newDreamerController";
import returningDreamerController from "../../../app/views/dreamers/returning/returningDreamerController";

import {
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

class MainView extends AsyncComponent
{
  load()
  {
    return this.props.controller.load.call(this);
  }

  asyncRender()
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
            dreamer = {this.state.dreamer}
          />
        </div>
        <div>
          <FlashMessenger
            flashMessageService = {flashMessageService}
          />
        </div>

        <Switch>
          <Route
            component = {HomeView}
            exact
            path      = "/"
          />
          <Route
            path    = "/dreamers/new"
            render  = {
              () => {
                let routeComponent;

                if (
                  this.state.dreamer
                ) {
                  routeComponent  = React.createElement(
                    Redirect,
                    {
                      "to"  : `/dreamers/${this.state.dreamer.username}/dashboard`
                    }
                  );
                }
                else
                {
                  routeComponent  = React.createElement(
                    NewDreamerView,
                    {
                      "controller"      : newDreamerController,
                      "dreamerService"  : this.props.dreamerService,
                      flashMessageService
                    }
                  );
                }

                return routeComponent;
              }
            }
          />
          <Route
            path    = "/dreamers/returning"
            render  = {
              () => {
                let routeComponent;

                if (
                  this.state.dreamer
                ) {
                  routeComponent  = React.createElement(
                    Redirect,
                    {
                      "to"  : `/dreamers/${this.state.dreamer.username}/dashboard`
                    }
                  );
                }
                else
                {
                  routeComponent  = React.createElement(
                    ReturningDreamerView,
                    {
                      "controller"      : returningDreamerController,
                      "dreamerService"  : this.props.dreamerService,
                      "setDreamer"      : this.props.controller.setDreamer.bind(this)
                    }
                  );
                }

                return routeComponent;
              }
            }
          />
          <Route
            path    = "/dreamers/:username/dashboard"
            render  = {
              () =>
              {
                let routeComponent;

                if (
                  this.state.dreamer
                ) {
                  routeComponent  = React.createElement(
                    DreamerDashboardView,
                    {
                      "dreamer" : this.state.dreamer
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
          />
          <Route
            component = {NotFoundView}
          />
        </Switch>
      </div>
    );
  }
}

export default MainView;
