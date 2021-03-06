import React, { Component } from 'react';
import '../css/Video.css';

class Video extends Component {

  render() {
    return (
      <div className="video-component">
        <h6>Hover to check out the YouTube video.</h6>
        <div className='video-container'>
        <iframe id="ytplayer" type="text/html" width="640" height="390"
          src={this.props.videoURL} frameBorder="0"></iframe>
        </div>
      </div>
    );
  }

}

export default Video;
