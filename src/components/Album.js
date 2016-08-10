import React, { Component } from 'react';

import '../css/Album.css';

class Album extends Component {

  render() {
    return (
      <div className="album-component">
        <div className='album-container'>
          <div className='album-row'>
            <h2>Artist: {this.props.artist}</h2>
            <h2>Title: {this.props.song}</h2>
          </div>
          <div className='album-row'>
            <p>Album: {this.props.albumName}</p>
          </div>
          <div className='image-container'>
            <img className='album-image' src={this.props.albumImage} alt='cover'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
