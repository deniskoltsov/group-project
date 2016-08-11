import React, {Component} from 'react';
import util from '../util/utils-lyrics';
import youtube from '../util/utils-video';
import lastfm from '../util/utils-lastfm';
import {Link} from 'react-router'

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
      videoUrlEnd: "?autoplay=0",
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
    console.log('click');
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
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      artist: this.state.artist,
      song: this.state.song,
      albumName: this.state.albumName,
      albumImage: this.state.albumImage,
      videoID: this.state.videoID,
      videoUrlStart: this.state.videoUrlStart,
      videoUrlEnd: this.state.videoUrlEnd,
      videoURL: this.state.videoURL,
      lyrics: this.state.lyrics,
      bio: this.state.bio
    }))
    return (
      <div className="App">
        <div className='nav-container'>
          <div className='nav-item'><h7>Logo Goes Here</h7></div>
          <div className='nav-item'>
            <form>
              <input className='input' placeholder='artist' onChange={(event) => this.handleChangeArtist(event)}/>
              <input className='input' placeholder='song' onChange={(event) => this.handleChangeSong(event)}/>
              <button className='buttonnnn' onClick={(event) => this.onClickSearch(event)}><Link to='/main' className='search-button waves-effect waves-teal btn-flat' >Search</Link></button>

            </form>
          </div>
          <div className='nav-item'>
            <Link className="team-button waves-effect waves-teal btn-flat" to="/about">About</Link>
            <Link className="favorites-button waves-effect waves-teal btn-flat" to="/favorites">View Favorites</Link>
          </div>
        </div>
        {childrenWithProps}
      </div>
    );
  }
}

export default App;
