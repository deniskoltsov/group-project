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
    return axios.post('https://immense-beach-20112.herokuapp.com/searchtrack', axiosSettings).then(res => {
      return res
    })
  },
  getLyrics: function (track) {
    const axiosSettings = {
      method: 'POST',
      data: track
    }
    return axios.post('https://immense-beach-20112.herokuapp.com/searchlyrics', axiosSettings).then(res => {
      return res
    })
  }
}
