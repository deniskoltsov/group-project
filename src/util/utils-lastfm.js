export default {
  getInfo: function (artist) {
    return fetch('https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=9dbc1f0658397d0faac1478d78cfd277&format=json').then(res => {
      return res.json();
    })
  }
}
