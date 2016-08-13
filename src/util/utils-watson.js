import axios from 'axios';

export default {
  translate: function(input) {
    const fetchSettings = {
      method: 'POST',
      data: {
        input: input
      },
      credentials: {
        "url": "https://stream.watsonplatform.net/speech-to-text/api",
        "password": "bozcgKOzBJo4",
        "username": "1d9b6701-84ed-4a2b-93d0-bfdb3a1806c8"
      }
    }
    return fetch('https://immense-beach-20112.herokuapp.com/speech', fetchSettings).then((response) => {
      return response;
    });
  },
  analyze: function(lyrics) {
    const axiosSettings = {
      method: 'POST',
      data: {
        lyrics: lyrics
      },
      credentials: {
        "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
        "password": "k73aVGARYwBn",
        "username": "c952111d-55d4-4d1f-95f5-20b77bc9b4cc"
      }
    }
    return axios.post('https://immense-beach-20112.herokuapp.com/analyze', axiosSettings).then((response) => {
      return response;
    });
  }
}
