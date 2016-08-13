import axios from 'axios';

export default {
  translate: function(input) {
    const fetchSettings = {
      method: 'GET',
      data: {
        input: input
      }
    }
    return fetch('https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text=' + input, fetchSettings).then((response) => {
      return response;
    });
  },
  analyze: function(lyrics) {
    console.log('afsakdufhksdf', lyrics);
    const axiosSettings = {
      method: 'POST',
      data: {
        lyrics: lyrics
      }
    }
    return axios.post('http://localhost:5000/analyze', axiosSettings).then((response) => {
      console.log('ANALYZE RESPONSE UTIL:', response);
      return response;
    });
  }
}
