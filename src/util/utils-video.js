import axios from 'axios';

export default {
  getInstrumentalVideo: function(song) {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    console.log('YOUTUBE', YOUTUBE_API_KEY);
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + song + '+instrumental&key=AIzaSyAlZZBI54atQkryBoR6eyiQexXAQkIvfwc', fetchSettings).then((response) => {
      return response.json();
    });
  },
  getVideo: function(song) {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + song + '&key=AIzaSyAlZZBI54atQkryBoR6eyiQexXAQkIvfwc', fetchSettings).then((response) => {
      return response.json();
    });
  },

  playVideo: function(vidID) {
    return axios.get('https://www.youtube.com/embed/' + vidID + '?enablejsapi=1').then((response) => {
      return response.json()
    });
  }
}
