import React, { Component } from 'react';
import Album from './Album.js';
import Lyrics from './Lyrics.js';
import Urban from './Urban.js';
import Video from './Video.js';
import Info from './Info.js';
import Analyze from './Analyze.js';
import '../css/Main.css';

class Main extends Component {

  render() {
    return (
      <div className="main-component">
        <Album artist={this.props.artist} song={this.props.song} albumName={this.props.albumName} albumImage={this.props.albumImage} searchSongInput={this.props.searchSongInput} searchArtistInput={this.props.searchArtistInput}/>
        <Info bio={this.props.bio} artist={this.props.artist}/>
        <Lyrics lyrics={this.props.lyrics} videoUrlStart={this.props.videoUrlStart} videoID={this.props.videoID} videoUrlEnd={this.props.videoUrlEnd} videoURLInstrumental={this.props.videoURLInstrumental}/>
        <Urban artist={this.props.artist} song={this.props.song}/>
        <Video videoURL={this.props.videoURL}/>
        <Analyze lyrics={this.props.lyrics} analysis={this.props.analysis} tonesObject={this.props.tonesObject} />
      </div>
    );
  }
}

export default Main;
