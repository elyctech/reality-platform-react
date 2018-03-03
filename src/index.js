import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import TileMaster from './tile-master/TileMaster';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Link, Route } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tile-master">Tile Master</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={App}/>
      <Route path="/tile-master" component={TileMaster}/>
    </main>
  </BrowserRouter>
), document.getElementById('app'));

registerServiceWorker();
