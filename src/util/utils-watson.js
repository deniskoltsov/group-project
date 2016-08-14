import axios from 'axios';

export default {
  translate: function(input) {
      return fetch('https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text=' + input).then((response) => {
        return response;
      });
  },
  analyze: function(lyrics) {
    const WATSON_TONE_PASSWORD = process.env.WATSON_TONE_PASSWORD;
    const WATSON_TONE_USER = process.env.WATSON_TONE_USER;
    console.log(WATSON_TONE_USER, WATSON_TONE_PASSWORD);
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
    
    return axios.post('https://immense-beach-20112.herokuapp.com/analyze', axiosSettings).then((response) => {
      console.log('ANALYZE RESPONSE UTIL:', response);
      return response;
    });
  }
}
