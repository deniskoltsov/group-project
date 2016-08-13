import axios from 'axios';
export default {
  getTrack: function (artist, song) {
    const axiosSettings = {
      method: 'POST',
      data: {
        artist: artist,
        song: song
      }
    }
    return axios.post('http://localhost:8080/searchtrack', axiosSettings).then(res => {
      return res
    })
  },
  getLyrics: function (track) {
    const axiosSettings = {
      method: 'POST',
      data: track
    }
    return axios.post('http://localhost:8080/searchlyrics', axiosSettings).then(res => {
      return res
    })
  }
}
