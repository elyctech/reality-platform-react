import React  from "react";

import DreamerDashboardView from "./lib/reality/views/dreamers/_username/dashboard/DreamerDashboardView";
import FlashMessenger       from "./lib/reality/views/main/components/FlashMessenger";
import HomeView             from "./lib/reality/views/home/HomeView";
import LoadingView          from "./lib/reality/views/loading/LoadingView";
import MainView             from "./lib/reality/views/main/MainView";
import Navigation           from "./lib/reality/views/main/components/Navigation";
import NewDreamerView       from "./lib/reality/views/dreamers/new/NewDreamerView";
import NotFoundView         from "./lib/reality/views/not-found/NotFoundView";
import ReturningDreamerView from "./lib/reality/views/dreamers/returning/ReturningDreamerView";

import dreamerService             from "./app/reality/services/dreamerService"
import flashMessageService        from "./app/reality/services/flashMessageService"
import mainController             from "./app/reality/views/main/MainController";
import newDreamerController       from "./app/reality/views/dreamers/returning/newDreamerController";
import returningDreamerController from "./app/reality/views/dreamers/returning/returningDreamerController";

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