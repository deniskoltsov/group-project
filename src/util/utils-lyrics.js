import axios from 'axios';

export default {
<<<<<<< HEAD
  getTrack: function (song, artist) {
=======
  getTrack: function (artist, song) {
>>>>>>> 9d4e51cece957ce0aa63b40df343978105d0a124
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
<<<<<<< HEAD
      console.log(res);
=======
      return res
>>>>>>> 9d4e51cece957ce0aa63b40df343978105d0a124
    })
  }
}
