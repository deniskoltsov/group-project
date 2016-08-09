import React, { Component } from 'react';
import youtube from '../util/utils-video.js'
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
   this.setState({videoID: json.body.videoID.items[0].id.videoId});
   console.log({videoID: json.body.videoID.items[0].id.videoId});
   console.log({json});
   youtube.playVideo(this.state.videoID).then((json) => {
     console.log({json});
   })
 });
}


 render() {
   return (
     <div className="video-component">
       <p onClick={(event) => this.onClick(event)}>Video goes here.</p>
     </div>
   );
 }
=======
  constructor(){
    super();
    this.state = {
      artistSearch: "",
      songSearch: "justin beiber instrumental",
      videoID: "",
      videoUrlStart: "https://www.youtube.com/embed/",
      videoUrlEnd: "?enablejsapi=1&origin=http://example.com"
    }
  }

  onClick(event) {
    console.log('clicked');
    youtube.getVideo(this.state.songSearch).then((json) => {
      this.setState({videoID: json.items[0].id.videoId});
      console.log({videoID: json.items[0].id.videoId});
      console.log('full object', json);
      this.setState({videoURL: this.state.videoUrlStart + this.state.videoID + this.state.videoUrlEnd})
      console.log(this.state.videoURL);
    });
  }


  render() {
    return (
      <div className="video-component">
        <p onClick={(event) => this.onClick(event)}>Video goes here.</p>
        <iframe id="ytplayer" type="text/html" width="640" height="390"
          src= {this.state.videoURL}
          frameBorder="0"></iframe>
      </div>
    );
  }

}

export default Video;
