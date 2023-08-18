import { http } from '../api'

const create = (data) => {
  return http.post('/collaborators', data)
}

const update = (id, data) => {
  return http.put(`/collaborators/${id}`, data)
}

const remove = (id) => {
  return http.delete(`/collaborators/${id}`)
}

const getMany = (params) => {
  return http.get('/collaborators', { params })
}

const getOne = (id) => {
  return http.get(`/collaborators/${id}`)
}

export { create, update, remove, getMany, getOne }
