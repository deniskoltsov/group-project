import axios from 'axios';

export default {
  getUrbanTranslation: function (input) {
    const axiosSettings = {
      method: 'POST',
      data: {
          input: input,
            },
          headers: { "Accept": "text/plain" }
      }
    return axios.post('https://immense-beach-20112.herokuapp.com/urban-translation', axiosSettings).then(res => {
      return res
    })
  }
}
