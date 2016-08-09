import axios from 'axios';

export default {
  getTrack: function () {
    const fetchSettings = {
      method: 'POST'
    }
    return fetch('http://localhost:5000/searchtrack', fetchSettings).then(res => {
      return res.json()
    })
  },
  getLyrics: function (track) {
    const axiosSettings = {
      method: 'POST',
      data: track
    }
    return axios.get('http://localhost:5000/searchlyrics', axiosSettings).then(res => {
      console.log(res);
    })
  }
}
