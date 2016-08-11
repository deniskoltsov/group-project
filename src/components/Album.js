import React, { Component } from 'react';
import util from '../util/utils-firebase.js';

import '../css/Album.css';

class Album extends Component {

  onClickFavorite(e) {
    e.preventDefault();
    const data = {};
    data[this.props.artist + this.props.song] = {
      artist: this.props.artist,
      song: this.props.song,
      album: this.props.albumName,
      cover: this.props.albumImage
    }
    util.addFav(data)
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="album-component">
        <div className='album-container'>
          <div className='album-row'>
            <h6>Artist: {this.props.artist}</h6>
            <h6>Title: {this.props.song}</h6>
          </div>
          <div className='album-row'>
            <p>Album: {this.props.albumName}</p>
          </div>
          <div className='image-container'>
            <img className='album-image' src={this.props.albumImage} alt='cover'></img>
          </div>
        </div>
          <button className='favs-button waves-effect waves-teal btn-flat' onClick={(event) => this.onClickFavorite(event)}>Add to Favorites</button>
      </div>
    );
  }
}

export default Album;
