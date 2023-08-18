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
    const user = localStorage.getItem('user')
    if (user) {
      const parseUser = JSON.parse(user)
      config.headers.Authorization = JSON.stringify({ user_id: parseUser.user_id })
    }
    return config
  } catch (error) {
    console.log(error)
  }
})
