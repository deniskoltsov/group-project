import React, {Component} from 'react';
import util from '../util/utils-lyrics';
import youtube from '../util/utils-video';
import watsonAnalyze from '../util/utils-watson.js';
import lastfm from '../util/utils-lastfm';
import {Link} from 'react-router';
import AudioRecorder from 'react-audio-recorder';

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
      videoURLInstrumental: '',
      videoIDInstrumental: '',
      lyrics: "",
      bio: "",
      analysis: {},
      tonesObject: []
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

    youtube.getInstrumentalVideo(this.state.song).then((json) => {
        console.log("video instrumental response:", json);
        this.setState({videoIDInstrumental: json.items[0].id.videoId});
        this.setState({videoURLInstrumental: this.state.videoUrlStart + this.state.videoIDInstrumental + this.state.videoUrlEnd})
        console.log('Instrumental VIDEO URL:', this.state.videoURLInstrumental);
        });
    youtube.getVideo(this.state.song).then((json) => {
        console.log("Regular video response:", json);
        this.setState({videoID: json.items[0].id.videoId});
        this.setState({videoURL: this.state.videoUrlStart + this.state.videoID + this.state.videoUrlEnd})
        console.log('Regular VIDEO URL:', this.state.videoURL);
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
    watsonAnalyze.analyze(this.props.lyrics).then((json) => {
        this.setState({analysis: json});
        this.setState({tonesObject: json.data.document_tone.tone_categories[0].tones})
        console.log('tonesObject:', this.state.tonesObject);
      });
  }

  handleRecord(e) {
  e.preventDefault();
  // shim and create AudioContext
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
var audio_context = new AudioContext();

  var WORKER_PATH = '../util/recorderWorker.js';
var recorder;
var Recorder = function(source, cfg){
    var config = cfg || {};
    var bufferLen = config.bufferLen || 4096;
    this.context = source.context;
    this.node = this.context.createScriptProcessor(bufferLen, 2, 2);
    var worker = new Worker(config.workerPath || WORKER_PATH);
    worker.postMessage({
      command: 'init',
      config: {
        sampleRate: this.context.sampleRate
      }
    })
  }

function startUserMedia(stream) {
    var input = audio_context.createMediaStreamSource(stream);
    input.connect(audio_context.destination);
    recorder = new Recorder(input);
}

// shim and start GetUserMedia audio stream
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
  console.log('No live audio input: ' + e);
});
}

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      searchArtistInput: this.state.searchArtistInput,
      searchSongInput: this.state.searchSongInput,
      artist: this.state.artist,
      song: this.state.song,
      albumName: this.state.albumName,
      albumImage: this.state.albumImage,
      videoID: this.state.videoID,
      videoUrlStart: "https://www.youtube.com/embed/",
      videoUrlEnd: "?autoplay=0",
      videoURL: this.state.videoURL,
      videoURLInstrumental: this.state.videoURLInstrumental,
      videoIDInstrumental: this.state.videoIDInstrumental,
      lyrics: this.state.lyrics,
      bio: this.state.bio,
      analysis: this.state.analysis,
      tonesObject: this.state.tonesObject
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
          <button onClick={(event) => this.handleRecord(event)}>Record</button>
        </div>
        <AudioRecorder />
        {childrenWithProps}
      </div>
    );
  }
}

export default App;
