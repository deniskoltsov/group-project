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
    return axios.post('http://localhost:8080/urban-translation', axiosSettings).then(res => {
      return res
    })
  }
}
