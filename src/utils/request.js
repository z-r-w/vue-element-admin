import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use()
service.interceptors.response.use(
  response => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      Promise.reject(new Error(message))
    }
  }, error => {
    Message.error(error.message)
    return Promise.reject(error)
  }
)
export default service
