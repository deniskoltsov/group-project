import axios from 'axios';

export default {
  getTrack: function (song, artist) {
    const axiosSettings = {
      method: 'POST',
      data: {
        artist: artist,
        song: song
      }
    }
    return axios.post('http://localhost:5000/searchtrack', axiosSettings).then(res => {
      return res
    })
  },
  getLyrics: function (track) {
    const axiosSettings = {
      method: 'POST',
      data: track
    }
    return axios.post('http://localhost:5000/searchlyrics', axiosSettings).then(res => {
      console.log(res);
    })
  }
}
