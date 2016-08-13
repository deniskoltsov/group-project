import axios from 'axios';

export default {
  translate: function(input) {
<<<<<<< HEAD
    const axiosSettings = {
      method: 'GET',
      credentials: {
        "url": "https://watson-api-explorer.mybluemix.net/text-to-speech/api",
        "password": "k73aVGARYwBn",
        "username": "c952111d-55d4-4d1f-95f5-20b77bc9b4cc"
      },
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
    return fetch('https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text=' + input, axiosSettings).then((response) => {
=======
    const fetchSettings = {
      method: 'GET',
      data: {
        input: input
      }
    }
    return fetch('https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text=' + input, fetchSettings).then((response) => {
>>>>>>> 7df173d7f35de866b969d572541b23ef1ab0d31c
      return response;
    });
  },
  analyze: function(lyrics) {
    console.log('afsakdufhksdf', lyrics);
    const axiosSettings = {
      method: 'POST',
      data: {
        lyrics: lyrics
<<<<<<< HEAD
=======
      },
      credentials: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
        "password": "k73aVGARYwBn",
        "username": "c952111d-55d4-4d1f-95f5-20b77bc9b4cc"
>>>>>>> 5e7e44eef01e1417598e2282ee1ba676110f55db
      }
=======
>>>>>>> video
             "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
             "password": "k73aVGARYwBn",
             "username": "c952111d-55d4-4d1f-95f5-20b77bc9b4cc"
       }
<<<<<<< HEAD
=======
>>>>>>> 7df173d7f35de866b969d572541b23ef1ab0d31c
        "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
        "password": "k73aVGARYwBn",
        "username": "c952111d-55d4-4d1f-95f5-20b77bc9b4cc"
      }
    }
    return axios.post('http://localhost:5000/analyze', axiosSettings).then((response) => {
      console.log('ANALYZE RESPONSE UTIL:', response);
      return response;
    });
  }
}
