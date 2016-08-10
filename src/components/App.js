import React, {Component} from 'react';
import Main from './Main.js';
import util from '../util/utils-lyrics';
import youtube from '../util/utils-video';
import lastfm from '../util/utils-lastfm';

import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      searchArtistInput: '',
      searchSongInput: '',
      artist: '',
      song: '',
      albumName: '',
      albumImage: '',
      videoID: "",
      videoUrlStart: "https://www.youtube.com/embed/",
      videoUrlEnd: "?autoplay=1",
      videoURL: "",
      lyrics: "",
      bio: ""
    }
  }

  handleChangeArtist(event) {
    this.setState({searchArtistInput: event.target.value})
  }

  handleChangeSong(event) {
    this.setState({searchSongInput: event.target.value})
  }

  onClickSearch(event){
    event.preventDefault();
    util.getTrack(this.state.searchSongInput, this.state.searchArtistInput).then((response) => {
      this.setState({response: response});
      console.log(this.state.response);
      this.setState({song: this.state.response.data.message.body.track.track_name});
      this.setState({artist: this.state.response.data.message.body.track.artist_name});
      this.setState({albumName: this.state.response.data.message.body.track.album_name});
      this.setState({albumImage: this.state.response.data.message.body.track.album_coverart_500x500});

    youtube.getVideo(this.state.song).then((json) => {
        this.setState({videoID: json.items[0].id.videoId});
        console.log({videoID: json.items[0].id.videoId});
        console.log('full object', json);
        this.setState({videoURL: this.state.videoUrlStart + this.state.videoID + this.state.videoUrlEnd})
        console.log('URL', this.state.videoURL);
      });
      const data = {
        track_id: response.data.message.body.track.track_id
      }
      util.getLyrics(data)
      .then(res => {
        console.log(res)
        this.setState({
          lyrics: res.data.message.body.lyrics.lyrics_body.slice(0, -58)
        })
      })
    })
    lastfm.getInfo(this.state.searchArtistInput)
    .then(res => {
      this.setState({
        bio: res.artist.bio.content
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className='nav-container'>
          <div className='nav-item'>Logo Goes Here</div>
          <div className='nav-item'>
            <form onSubmit={(event) => this.onClickSearch(event)}>
              <input className='input' placeholder='artist' onChange={(event) => this.handleChangeArtist(event)}/>
              <input className='input' placeholder='song' onChange={(event) => this.handleChangeSong(event)}/>
              <button className='btn waves-effect waves-light'>Click</button>
            </form>
          </div>
          <div className='nav-item'>About Team</div>
        </div>
        <Main artist={this.state.artist} song={this.state.song} albumName={this.state.albumName} albumImage={this.state.albumImage} videoUrlStart={this.state.videoUrlStart} videoID={this.state.videoID} videoUrlEnd={this.state.videoUrlEnd} videoURL={this.state.videoURL} lyrics={this.state.lyrics} bio={this.state.bio} analyze={this.state.lyrics}/>
      </div>
    );
  }
}

export default App;
