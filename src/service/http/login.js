import { http } from '../api'

const login = (data) => {
  return http.post('/login', data)
}

export { login }
