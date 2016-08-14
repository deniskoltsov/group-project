
export default {
  getInfo: function (artist) {
    const LASTFM_KEY = process.env.LASTFM_KEY;
    console.log('lastfm', LASTFM_KEY);
    return fetch('https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=' + LASTFM_KEY + '&format=json').then(res => {
      return res.json();
    })
  }
}
