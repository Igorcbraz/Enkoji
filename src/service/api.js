import axios from 'axios'
import { toast } from 'react-toastify'

export const http = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})

const errorHandler = (error) => {
  if (error.response) {
    toast.error(error.response.data.message)
  }

  return Promise.reject({ ...error })
}


http.interceptors.response.use(
  (response) => {return response},
  (error) => errorHandler(error)
)
