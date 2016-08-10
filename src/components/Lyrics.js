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
    volume: .4
    }
  }

  onClickTranslate(event) {
    //do all ajax here
    const watsonInput = this.state.watsonInput;
    util.translate(this.props.lyrics).then((res) => {
      this.setState({watsonResponse: res});
      this.setState({videoURL: this.props.videoUrlStart + this.props.videoID + this.state.videoUrlEnd})
      console.log(res);
    });
  }

  render() {
    return (
      <div className="lyrics-component">
        <h3>Lyrics go here</h3>
        <p>{this.props.lyrics}</p>
        <button className='search-button' onClick={(event) => this.onClickTranslate(event)}>Say it</button>
        <ReactPlayer className='player' url={this.state.watsonResponse.url} playing/>
        <ReactPlayer className='player' url={this.state.videoURL} volume={this.state.volume} playing/>
      </div>
    );
  }
}

export default Lyrics;
