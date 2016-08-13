import axios from 'axios';

export default {
  translate: function(input) {
    const fetchSettings = {
      method: 'GET',
      data: {
        input: input
      },
      credentials: {
        "url": "https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text=",
        "password": "k73aVGARYwBn",
        "username": "c952111d-55d4-4d1f-95f5-20b77bc9b4cc"
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
