export default {
  getUrbanTranslation: function(input) {
    const fetchSettings = {
      method: 'GET',
      headers: {'X-Mashape-Key': 'PTCbf7suIBmshuOBDhfSKo0RAwZPp1dXj1PjsnMEx2Z5QbSAPV',
      'Accept': 'text/plain'
      }
    }
    return fetch('https://mashape-community-urban-dictionary.p.mashape.com/define/' + input, fetchSettings).then((response) => {
      return response;
    });
  },
}
