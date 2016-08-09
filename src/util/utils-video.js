export default {
  getVideo: function(song) {
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + song + '&key=AIzaSyDhqHSDWjH-40GcYPxzmIvgh5JFGsPBwCc', fetchSettings).then((response) => {
      return response.json();
    });
  }
}
