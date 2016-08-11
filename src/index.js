import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Favorites from './components/Favorites.js';

import {Router, Route, browserHistory} from 'react-router';

import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/main" component={Main}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/favorites" component={Favorites}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
