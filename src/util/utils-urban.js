import axios from 'axios';

export default {
  getUrbanTranslation: function (input) {
    const axiosSettings = {
      method: 'GET',
      data: input
    }
    return axios.get('http://localhost:5000/urban-translation', axiosSettings).then(res => {
      return res.json()
    })
  },
}
