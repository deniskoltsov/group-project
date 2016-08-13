import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import util from '../util/utils-watson.js';
import '../css/Lyrics.css';


class Lyrics extends Component {
  constructor() {
  super();
  this.state = {
    watsonResponse: {},
    videoURL: "",
    videoUrlEnd: "?autoplay=1",
    volume: .4,
    start: false
    }
  }

  onClickTranslate(event) {
    if (this.state.start === false) {
      util.translate(this.props.lyrics).then((res) => {
        this.setState({watsonResponse: res});
        this.setState({videoURL: this.props.videoURLInstrumental})
        console.log('watson response', res);
        this.setState({start: true})
        });
    } else {
      this.setState({start: false})
    }
  }

  render() {
    return (
      <div className="lyrics-component">
        <h6>LYRICS</h6>
        <h8>scroll down to read</h8>
        <div className='lyrics-container'>
        <p>{this.props.lyrics}</p>
        </div>
        <div className='button-container'>
        <button className='lyrics-button waves-effect waves-teal btn-flat' onClick={(event) => this.onClickTranslate(event)}>Spit it Watson</button>
        </div>
        <ReactPlayer className='player' url={this.state.watsonResponse.url} playing={this.state.start}/>
        <ReactPlayer className='player' url={this.state.videoURL} volume={this.state.volume} playing={this.state.start}/>
      </div>
    );
  }
}

export default Lyrics;
