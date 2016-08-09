import React, { Component } from 'react';
import '../css/Lyrics.css';
import helpers from '../util/utils-lyrics.js';

class Lyrics extends Component {
  constructor() {
    super();
    this.state = {
      lyrics: ""
    }
  }

  onClick(e) {
    e.preventDefault();
    console.log(this.props.artist)
    console.log(this.props.song)

    helpers.getTrack(this.props.artist, this.props.song)
    .then(res => {
      console.log(res.data.message.body.track.track_id)
      const data = {
        track_id: res.data.message.body.track.track_id
      }
      helpers.getLyrics(data)
      .then(res => {
        console.log(res)
        this.setState({
          lyrics: res.data.message.body.lyrics.lyrics_body
        })
      })
    })
  }



  render() {
    return (
      <div className="lyrics-component">
        <h3>Lyrics go here</h3>
        <button onClick={(event) => this.onClick(event)}>Click</button>
        <p>{this.state.lyrics}</p>
      </div>
    );
  }
}

export default Lyrics;
