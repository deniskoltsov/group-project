
export default {
  const LASTFM_KEY = process.env.LASTFM_KEY;
  console.log('YOUTUBE', YOUTUBE_KEY);
  getInfo: function (artist) {
    return fetch('https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=' + LASTFM_KEY + '&format=json').then(res => {
      return res.json();
    })
  }
}
