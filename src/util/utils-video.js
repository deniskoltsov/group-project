import axios from 'axios';

export default {
  getInstrumentalVideo: function(song) {
    const YOUTUBE_KEY = process.env.YOUTUBE_KEY;
    console.log('YOUTUBE', YOUTUBE_KEY);
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + song + '+instrumental&key=' + YOUTUBE_KEY, fetchSettings).then((response) => {
      return response.json();
    });
  },
  getVideo: function(song) {
    const YOUTUBE_KEY = process.env.YOUTUBE_KEY;
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + song + '&key=' + YOUTUBE_KEY, fetchSettings).then((response) => {
      return response.json();
    });
  },

  playVideo: function(vidID) {
    return axios.get('https://www.youtube.com/embed/' + vidID + '?enablejsapi=1').then((response) => {
      return response.json()
    });
  }
}
