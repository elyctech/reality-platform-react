import React  from "react";

import AsyncComponent from "../../components/AsyncComponent";

import NewDreamerRoute        from "../dreamers/new/NewDreamerRoute";
import ReturningDreamerRoute  from "../dreamers/returning/ReturningDreamerRoute";
import DreamerDashboardRoute  from "../dreamers/_username/dashboard/DreamerDashboardRoute";

import DreamerDashboardView from "../dreamers/_username/dashboard/DreamerDashboardView";
import FlashMessenger       from "../main/components/FlashMessenger";
import HomeView             from "../home/HomeView";
import Navigation           from "../main/components/Navigation";
import NewDreamerView       from "../dreamers/new/NewDreamerView";
import NotFoundView         from "../not-found/NotFoundView";
import ReturningDreamerView from "../dreamers/returning/ReturningDreamerView";

import flashMessageService        from "../../../../app/reality/services/flashMessageService"
import newDreamerController       from "../../../../app/reality/views/dreamers/returning/newDreamerController";
import returningDreamerController from "../../../../app/reality/views/dreamers/returning/returningDreamerController";

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
          <NewDreamerRoute
            path                = "/dreamers/new"

            controller          = {newDreamerController}
            dreamer             = {this.state.dreamer}
            dreamerService      = {this.props.dreamerService}
            flashMessageService = {flashMessageService}
            view                = {NewDreamerView}
          />
          <ReturningDreamerRoute
            path            = "/dreamers/returning"

            dreamer         = {this.state.dreamer}
            controller      = {returningDreamerController}
            dreamerService  = {this.props.dreamerService}
            setDreamer      = {this.props.controller.setDreamer.bind(this)}
            view            = {ReturningDreamerView}
          />
          <DreamerDashboardRoute
            path    = "/dreamers/:username/dashboard"

            dreamer = {this.state.dreamer}
            view    = {DreamerDashboardView}
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
