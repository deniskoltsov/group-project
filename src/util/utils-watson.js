export default {
  translate: function(input) {
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text=' + input, fetchSettings).then((response) => {
      return response;
    });
  },
  analyze: function(lyrics) {
    const fetchSettings = {
      method: 'GET',
      credentials: {
             "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
             "password": "k73aVGARYwBn",
             "username": "c952111d-55d4-4d1f-95f5-20b77bc9b4cc"
           }
    }
    return fetch('https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=maggie', fetchSettings).then((response) => {
      return response;
    });
  }}
