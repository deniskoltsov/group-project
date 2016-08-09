export default {
  translate: function(input) {
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text=' + input, fetchSettings).then((response) => {
      return response;
    });
  },
}
