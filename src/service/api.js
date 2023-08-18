/* eslint-disable no-undef */
import axios from 'axios'
import { toast } from 'react-toastify'

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
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

http.interceptors.request.use(async (config) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user.user_id) {
      config.headers.Authorization = JSON.stringify({ user_id: user.user_id })
    }
    return config
  } catch (error) {
    console.log(error)
  }
})
