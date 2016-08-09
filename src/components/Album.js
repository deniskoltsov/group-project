import React, { Component } from 'react';
import util from '../util/utils-lyrics';

import '../css/Album.css';

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: {},
      artist: '',
      song: '',
      albumName: '',
      genre: ''
    }
  }

  onClick(event){
    util.getTrack(this.props.song, this.props.artist).then((response) => {
      console.log('ALBUM RESPONSE:', response);
      this.setState({response: response});
      this.setState({song: this.state.response.data.message.body.track.track_name});
      this.setState({artist: this.state.response.data.message.body.track.artist_name});
      this.setState({albumName: this.state.response.data.message.body.track.album_name});
      this.setState({genre: this.state.response.data.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name});

    })
  }


  render() {
    return (
      <div className="album-component">
        <div className='album-container'>
          <div className='album-headline'>
            <h3>SONG NAME: {this.state.song}</h3>
            <h3>ARTIST: {this.state.artist}</h3>
          </div>
          <div className='info-container'>
            <p>ALBUM: {this.state.albumName}</p>
            <p>GENRE: {this.state.genre}</p>
          </div>
          <h6>{this.props.artist}</h6>
          <button onClick={(event)=> this.onClick(event)}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Album;
