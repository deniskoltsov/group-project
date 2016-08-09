import React, { Component } from 'react';
<<<<<<< HEAD
import youtube from '../util/utils-video.js'
=======


>>>>>>> denis
import '../css/Video.css';

class Video extends Component {
  constructor(){
    super();
    this.state = {
      artistSearch: "",
      songSearch: "justin beiber instrumental",
      videoID: ""
    }
  }

onClick(event) {
  console.log('clicked');
  youtube.getVideo(this.state.songSearch).then((json) => {
    this.setState({videoID: json});
    console.log({videoID: json});
  });
}


  render() {
    return (
      <div className="video-component">
        <p onClick={(event) => this.onClick(event)}>Video goes here.</p>
      </div>
    );
  }
}

export default Video;
