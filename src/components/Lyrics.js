import React, { Component } from 'react';
import '../css/Lyrics.css';
import helpers from '../util/utils-lyrics.js';

class Lyrics extends Component {

  render() {
    return (
      <div className="lyrics-component">
        <p>{this.props.lyrics}</p>
      </div>
    );
  }
}

export default Lyrics;
