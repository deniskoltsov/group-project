import React, { Component } from 'react';

import Album from './Album.js';
import Lyrics from './Lyrics.js';
import Urban from './Urban.js';
import Video from './Video.js';


import '../css/Main.css';

class Main extends Component {

  render() {
    return (
      <div className="main-component">
        <Album artist={this.props.artist} song={this.props.song} albumName={this.props.albumName} genre={this.props.genre} albumImage={this.props.albumImage}/>
        <Lyrics artist={this.props.artist} song={this.props.song}/>
        <Urban artist={this.props.artist} song={this.props.song}/>
        <Video artist={this.props.artist} song={this.props.song}/>
      </div>
    );
  }
}

export default Main;
