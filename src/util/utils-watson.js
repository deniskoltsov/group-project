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
    const WATSON_TONE_PASSWORD = process.env.WATSON_TONE_PASSWORD;
    const WATSON_TONE_USER = process.env.WATSON_TONE_USER;
    const axiosSettings = {
      method: 'POST',
      data: {
        lyrics: lyrics
      },
      credentials: {
        "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
        "password": WATSON_TONE_PASSWORD,
        "username": WATSON_TONE_USER
      }
    }
    return axios.post('http://localhost:5000/analyze', axiosSettings).then((response) => {
      console.log('ANALYZE RESPONSE UTIL:', response);
      return response;
    });
  }
}
