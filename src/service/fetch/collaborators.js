import {
  create,
  update,
  remove,
  getMany,
  getOne
} from '../http/collaborators'

const fetchCreate = async (collaborator) => {
  const { data } = await create(collaborator)

  return formatCollaborator(data)
}

const fetchUpdate = async (id, collaborator) => {
  const { data } = await update(id, collaborator)

  return formatCollaborator(data)
}

const fetchRemove = async (id) => {
  const { data } = await remove(id)

  return formatCollaborator(data)
}

const fetchGetMany = async (params) => {
  const { data } = await getMany(params)

  const formatCollaborators = data.collaborators.map(collaborator => {
    return formatCollaborator(collaborator)
  })

  return {
    data: formatCollaborators,
    meta: data.meta
  }
}

const fetchGetOne = async (id) => {
  const { data } = await getOne(id)

  return formatCollaborator(data)
}

const formatCollaborator = (collaborator) => {
  return {
    ...collaborator,
    name: collaborator.firstname + ' ' + collaborator.lastname,
    associationdateFormat: collaborator.associationdate ? new Date(collaborator.associationdate).toLocaleDateString('pt-BR') : null,
    birthdayFormat: collaborator.birthday ? new Date(collaborator.birthday).toLocaleDateString('pt-BR') : null,
  }
}

export { fetchCreate, fetchUpdate, fetchRemove, fetchGetMany, fetchGetOne }
