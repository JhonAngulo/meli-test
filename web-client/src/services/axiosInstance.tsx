import axios from 'axios'

console.log('env', import.meta.env.VITE_PUBLIC_SERVER_URL_BASE)
const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_SERVER_URL_BASE,
  timeout: 5000
  // headers: { 'X-Custom-Header': 'foobar' }
})

export default apiInstance
