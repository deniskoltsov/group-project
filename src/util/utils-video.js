import axios from 'axios';

export default {
  getInstrumentalVideo: function(song) {
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + song + '+instrumental&key=AIzaSyDRRYf5OzE5u7LKiRXslAULAUSxnS1SufE', fetchSettings).then((response) => {
      return response.json();
    });
  },
  getVideo: function(song) {
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + song + '&key=AIzaSyDRRYf5OzE5u7LKiRXslAULAUSxnS1SufE', fetchSettings).then((response) => {
      return response.json();
    });
  },

  playVideo: function(vidID) {
    return axios.get('https://www.youtube.com/embed/' + vidID + '?enablejsapi=1').then((response) => {
      return response.json()
    });
  }
}
