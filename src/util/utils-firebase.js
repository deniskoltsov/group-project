export default {
  addFav: function (data) {
  const fetchSettings = {
    method: 'PATCH',
    body: JSON.stringify(data)
  }
  return fetch('https://group-project-fb171.firebaseio.com/favorites.json', fetchSettings).then(res => {
    return res.json();
  })
},
  viewAll: function () {
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://group-project-fb171.firebaseio.com/favorites.json', fetchSettings).then(res => {
      return res.json();
    })
  }

}
