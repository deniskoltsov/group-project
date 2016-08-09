import React, { Component } from 'react';

import Album from './Album.js';
import Lyrics from './Lyrics.js';
import Urban from './Urban.js';

import util from '../util/helpers.js'
import '../css/Main.css';

class Main extends Component {

  render() {
    return (
      <div className="main-component">
        <Album />
        <Lyrics />
        <Urban />
      </div>
    );
  }
}

export default Main;
