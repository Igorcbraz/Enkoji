import { login } from '../http/login'

const fetchLogin = async (user) => {
  const { data } = await login(user)

  return data
}

export { fetchLogin }
