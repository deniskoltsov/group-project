import React, { Component } from 'react';

import '../css/Album.css';

class Album extends Component {

  render() {
    return (
      <div className="album-component">
        <div className='album-container'>
          <div className='album-row'>
            <h2>Artist: <span className='text-main'>{this.props.artist}</span></h2>
            <h2>Title: <span className='text-main'>{this.props.song}</span></h2>
          </div>
          <div className='info-container'>
            <img className='album-image' src={this.props.albumImage} alt='cover'></img>
            <div>
            <p>Album: <span className='text-secondary'>{this.props.albumName}</span></p>
            <p>Genre: <span className='text-secondary'>{this.props.genre}</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
