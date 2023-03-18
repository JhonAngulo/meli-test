import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
  timeout: 1000
  // headers: { 'X-Custom-Header': 'foobar' }
})

export default apiInstance
