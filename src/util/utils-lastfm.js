export default {
  getInfo: function (artist) {
    const LAST_FM_KEY = process.env.LAST_FM_KEY;
    console.log('last fM key', LAST_FM_KEY);
    return fetch('https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=' + LAST_FM_KEY +'&format=json').then(res => {
      return res.json();
    })
  }
}
