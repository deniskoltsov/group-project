import React, { Component } from 'react';
import youtube from '../util/utils-video.js'
import '../css/Video.css';

class Video extends Component {

  onClick(event) {
    event.preventDefault();
    console.log(this.props.videoURL);
  }

  render() {
    return (
      <div className="video-component">
        <p onClick={(event) => this.onClick(event)}>Video goes here.</p>
        <iframe id="ytplayer" type="text/html" width="640" height="390"
          src={this.props.videoURL}
          frameBorder="0"></iframe>
      </div>
    );
  }

}

export default Video;
