import React  from "react";

import DreamerDashboardView from "./lib/views/dreamers/_username/dashboard/DreamerDashboardView";
import FlashMessenger       from "./lib/views/main/components/FlashMessenger";
import HomeView             from "./lib/views/home/HomeView";
import LoadingView          from "./lib/views/loading/LoadingView";
import MainView             from "./lib/views/main/MainView";
import Navigation           from "./lib/views/main/components/Navigation";
import NewDreamerView       from "./lib/views/dreamers/new/NewDreamerView";
import NotFoundView         from "./lib/views/not-found/NotFoundView";
import ReturningDreamerView from "./lib/views/dreamers/returning/ReturningDreamerView";

import dreamerService             from "./app/services/dreamerService"
import flashMessageService        from "./app/services/flashMessageService"
import mainController             from "./app/views/main/MainController";
import newDreamerController       from "./app/views/dreamers/returning/newDreamerController";
import returningDreamerController from "./app/views/dreamers/returning/returningDreamerController";

import {
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component
{
  render()
  {
    return (
      <MainView
        controller      = {mainController}
        dreamerService  = {dreamerService}
      >
        <LoadingView/>
      </MainView>
    );
  }
}

export default App;