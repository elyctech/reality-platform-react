import React    from "react";
import ReactDOM from "react-dom";
import               "./index.css";

import {
  BrowserRouter
} from "react-router-dom";

import App  from "./app";

import registerServiceWorker  from "./registerServiceWorker";

ReactDOM.hydrate((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));

registerServiceWorker();
