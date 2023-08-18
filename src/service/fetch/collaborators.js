import {
  create,
  update,
  remove,
  getMany,
  getOne
} from '../http/collaborators'

const fetchCreate = async (collaborator) => {
  const { data } = await create(collaborator)

  return joinFirstAndLastName(data)
}

const fetchUpdate = async (id, collaborator) => {
  const { data } = await update(id, collaborator)

  return joinFirstAndLastName(data)
}

const fetchRemove = async (id) => {
  const { data } = await remove(id)

  return joinFirstAndLastName(data)
}

const fetchGetMany = async (params) => {
  const { data } = await getMany(params)

  const formatCollaborators = data.collaborators.map(collaborator => {
    return joinFirstAndLastName(collaborator)
  })

  return {
    data: formatCollaborators,
    meta: data.meta
  }
}

const fetchGetOne = async (id) => {
  const { data } = await getOne(id)

  return joinFirstAndLastName(data)
}

const joinFirstAndLastName = (collaborator) => {
  return {
    ...collaborator,
    name: collaborator.firstname + ' ' + collaborator.lastname
  }
}

export { fetchCreate, fetchUpdate, fetchRemove, fetchGetMany, fetchGetOne }
