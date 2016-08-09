import React, { Component } from 'react';

import Nav from './Nav.js';
import Main from './Main.js';

import '../css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
