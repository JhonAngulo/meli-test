import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  timeout: 5000
  // headers: { 'X-Custom-Header': 'foobar' }
})

export default apiInstance
