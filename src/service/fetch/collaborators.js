import {
  create,
  update,
  remove,
  getMany,
  getOne
} from '../http/collaborators'

const fetchCreate = async (collaborator) => {
  const { data } = await create(collaborator)

  return data
}

const fetchUpdate = async (id, collaborator) => {
  const { data } = await update(id, collaborator)

  return data
}

const fetchRemove = async (id) => {
  const { data } = await remove(id)

  return data
}

const fetchGetMany = async (params) => {
  const { data } = await getMany(params)

  return data
}

const fetchGetOne = async (id) => {
  const { data } = await getOne(id)

  return data
}

export { fetchCreate, fetchUpdate, fetchRemove, fetchGetMany, fetchGetOne }
