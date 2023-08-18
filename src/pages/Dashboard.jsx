import React, { useState, useRef, useEffect } from 'react'
import { Table, TextInput, Button, Modal, Label, Tabs } from 'flowbite-react'
import {
  FunnelIcon,
  TrashIcon,
  UserIcon,
  HomeIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/solid'
import { DatePicker } from '../components/DatePicker'
import axios from 'axios'
import { useDebounce } from 'use-debounce'

import { InfoCard } from '../components/Cards/InfoCard'
import { PageTitle } from '../components/Typography/PageTitle'
import { RoundIcon } from '../components/RoundIcon'
import { Spinner } from '../components/Spinner/Spinner'
import { formatCEP, formatPhoneNumber } from '../utils/format'
import { validateEmail } from '../utils/validate'
import {
  fetchCreate,
  fetchGetMany,
  fetchGetOne,
  fetchUpdate,
  fetchRemove
} from '../service/fetch/collaborators'

import { PeopleIcon, MoneyIcon, CartIcon } from '../assets/icons'

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [openModal, setOpenModal] = useState(null)
  const [loading, setLoading] = useState('')
  const [search, setSearch] = useState('')
  const [collaborators, setCollaborators] = useState([])
  const [collaboratorsAPI, setCollaboratorsAPI] = useState([])
  const [columns, setColumns] = useState([])
  const [visibleColumns, setVisibleColumns] = useState([])
  const [metrics, setMetrics] = useState({
    totalAssociates: 0,
    totalPayment: 0,
    monthAssociates: 0,
  })
  const [address, setAddress] = useState({
    cep: '',
    neighborhood: '',
    complement: '',
    city: '',
    street: '',
    uf: ''
  })
  const [collaborator, setCollaborator] = useState({
    collaborator_id: null,
    name: '',
    email: '',
    birthday: '',
    contact: '',
    payment: '',
    associationdate: null
  })
  const [debouncedSearch] = useDebounce(search, 1000)
  const nameInputRef = useRef()

  useEffect(() => {
    setColumns([
      { label: 'Nome', key: 'name' },
      { label: 'E-mail', key: 'email' },
      { label: 'Contato', key: 'contact' },
      { label: 'Mensalidade', key: 'payment' },
      { label: 'Data Associação', key: 'associationdateFormat' },
      { label: 'Aniversário', key: 'birthdayFormat' },
      { label: 'CEP', key: 'cep' },
      { label: 'Rua', key: 'street' },
      { label: 'Bairro', key: 'neighborhood' },
      { label: 'Cidade', key: 'city' },
      { label: 'UF', key: 'uf' },
      { label: 'Complemento', key: 'complement' }
    ])
    setVisibleColumns(['name', 'email', 'contact', 'payment', 'associationdateFormat', 'birthdayFormat'])
    getAllCollaborators()
  }, [])

  useEffect(() => {
    const filterCollaborators = collaboratorsAPI.filter(collaborator => {
      const validation = collaborator.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      collaborator.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      collaborator.contact.toLowerCase().includes(debouncedSearch.toLowerCase())

      return validation
    })

    setCollaborators(filterCollaborators)
  }, [debouncedSearch])

  const getAllCollaborators = async () => {
    setLoading('table')
    try {
      const query = {
        status: 'S',
        user_id: user.user_id
      }
      const { data }  = await fetchGetMany(query)

      metricSetter(data)
      setCollaborators(data)
      setCollaboratorsAPI(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading('')
    }
  }

  const createOrModifyCollaborator = async (action) => {
    const collaboratorData = {
      ...collaborator,
      ...address
    }

    try {
      setLoading('collaborator')

      let collaborator
      let result = []
      if (action === 'register') {
        collaborator = await fetchCreate(collaboratorData)
        result = [...collaborators, collaborator]
      } else {
        collaborator = await fetchUpdate(collaboratorData.collaborator_id, collaboratorData)
        const collaboratorsWithOutUpdated = collaborators.filter(item => item.collaborator_id !== collaboratorData.collaborator_id)
        result = [...collaboratorsWithOutUpdated, collaborator]
      }

      setCollaborators(result)
      setCollaboratorsAPI(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading('')
    }

    clearFields()
  }

  const getCompleteAddress = async (cep) => {
    if (!cep) return
    setLoading('cep')

    try {
      const apiCepUrl = `https://viacep.com.br/ws/${cep}/json/`
      const { data } = await axios.get(apiCepUrl)

      setAddress({
        cep: data.cep,
        neighborhood: data.bairro,
        complement: data.complemento,
        city: data.localidade,
        street: data.logradouro,
        uf: data.uf
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading('')
    }
  }

  const handleAddress = (value) => {
    setAddress({
      ...address,
      ...value
    })
  }

  const handleCollaborator = (value) => {
    setCollaborator({
      ...collaborator,
      ...value
    })
  }

  const handleRemoveCollaborator = async (collaborator) => {
    setLoading('table')
    try {
      await fetchRemove(collaborator.collaborator_id)

      const newCollaborators = collaborators.filter(item => item.collaborator_id !== collaborator.collaborator_id)
      setCollaborators(newCollaborators)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading('')
    }
  }

  const clearFields = () => {
    setOpenModal(undefined)
    setAddress({
      cep: '',
      neighborhood: '',
      complement: '',
      city: '',
      street: '',
      uf: ''
    })
    setCollaborator({
      name: '',
      email: '',
      birthday: '',
      contact: '',
      payment: '',
      associationdate: null
    })
  }

  const handleOpenLine = async (line) => {
    setLoading('table')
    try {
      const collaborator = await fetchGetOne(line.collaborator_id)

      setCollaborator({
        collaborator_id: collaborator.collaborator_id,
        name: collaborator.name,
        email: collaborator.email,
        birthday: collaborator.birthday,
        contact: collaborator.contact,
        payment: collaborator.payment,
        associationdate: collaborator.associationdate
      })
      setAddress({
        cep: collaborator.cep,
        neighborhood: collaborator.neighborhood,
        complement: collaborator.complement,
        city: collaborator.city,
        street: collaborator.street,
        uf: collaborator.uf
      })
      setOpenModal('details')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading('')
    }
  }

  const metricSetter = (data) => {
    const totalAssociates = data.length
    const totalPayment = data.reduce((acc, curr) => acc + parseFloat(curr.payment), 0)
    const monthAssociates = data.filter(item => {
      const date = new Date(item.associationdate)
      const month = date.getUTCMonth() + 1
      const year = date.getUTCFullYear()

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1
      const currentYear = currentDate.getFullYear()

      return month === currentMonth && year === currentYear
    })

    setMetrics({
      totalAssociates,
      totalPayment: totalPayment.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      monthAssociates: monthAssociates.length
    })
  }

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <div className='grid gap-6 mb-8 grid-cols-3'>
        <InfoCard title='Total de Associados' value={metrics.totalAssociates}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass='text-orange-500'
            bgColorClass='bg-orange-100'
            className='mr-4'
          />
        </InfoCard>

        <InfoCard title='Mensalidade Total' value={metrics.totalPayment}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass='text-green-500'
            bgColorClass='bg-green-100'
            className='mr-4'
          />
        </InfoCard>

        <InfoCard
          title='Novos Colaboradores'
          value={metrics.monthAssociates}
        >
          <RoundIcon
            icon={CartIcon}
            iconColorClass='text-blue-500'
            bgColorClass='bg-blue-100'
            className='mr-4'
          />
        </InfoCard>
      </div>

      <div className='flex justify-between items-center p-2 gap-2'>
        <Button color='info'>
          <FunnelIcon className='w-5 h-5' aria-hidden='true' />
        </Button>
        <TextInput
          placeholder='Pesquisar...'
          className='w-full'
          onChange={e => setSearch(e.target.value)}
        />
        <Button class='bg-primary-500 rounded-lg py-1' onClick={() => setOpenModal('register')}>
          <p className='font-semibold text-white'>
            Adicionar
          </p>
        </Button>
      </div>

      <Table>
        <Table.Head>
          {columns
            .filter(column => visibleColumns.includes(column.key))
            .map((column) => (
              <Table.HeadCell key={column.key}>
                {column.label}
              </Table.HeadCell>
            ))
          }
          <Table.HeadCell>
            <span className='sr-only'>
              Edit
            </span>
          </Table.HeadCell>
        </Table.Head>
        {loading === 'table' ? (
          <Table.Body className='divide-y'>
            <Table.Row className='bg-white dark:border-gray-700'>
              <Table.Cell colSpan={visibleColumns.length + 1}>
                <div className='flex justify-center items-center'>
                  <Spinner color='primary-500' size='w-5 h-5'/>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ) : (
          <Table.Body className='divide-y'>
            {collaborators.map((collaborator) => (
              <Table.Row key={collaborator.email} className='bg-white dark:border-gray-700'>
                {visibleColumns.map((column) => (
                  <Table.Cell key={column} onClick={() => handleOpenLine(collaborator)} className='cursor-pointer'>
                    <span className='text-sm text-gray-900 dark:text-white'>
                      {collaborator[column]}
                    </span>
                  </Table.Cell>
                ))}
                <Table.Cell className='flex'>
                  <Button
                    layout='link'
                    size='xs'
                    aria-label='Edit'
                    class='bg-red-100 hover:bg-red-200 rounded-full'
                    pill
                    onClick={() => handleRemoveCollaborator(collaborator)}
                  >
                    <TrashIcon className='w-5 h-5 text-red-600' aria-hidden='true' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        )}
      </Table>

      <Modal
        show={['register', 'details'].includes(openModal)}
        size='4xl'
        popup
        onClose={() => setOpenModal(undefined)}
        initialFocus={nameInputRef}
      >
        <Modal.Header/>
        <Modal.Body>
          <div className='space-y-6'>
            <span className='space-y-2'>
              <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                { openModal === 'register' ? 'Registrar Colaborador' : 'Detalhes do Colaborador'}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                { openModal === 'register' ? 'Preencha os campos abaixo para registrar um novo colaborador' : 'Visualize os dados do colaborador'}
              </p>
            </span>
            <Tabs.Group
              aria-label='Tabs with underline'
              style='underline'
            >
              <Tabs.Item
                active
                icon={UserIcon}
                title='Dados Pessoais'
              >
                <section className='grid grid-cols-2 gap-5'>
                  <div className='space-y-3'>
                    <div className='mb-2 block'>
                      <Label htmlFor='name' value='Nome Completo' />
                    </div>
                    <TextInput
                      id='name'
                      ref={nameInputRef}
                      placeholder='Nome Sobrenome'
                      type='text'
                      required
                      onChange={e => handleCollaborator({ name: e.target.value })}
                      value={collaborator.name}
                      color={collaborator.name.replace(/ /g,'') !== '' ? 'success' : 'warning'}
                    />
                    <div className='mb-2 block'>
                      <Label htmlFor='email' value='E-mail' />
                    </div>
                    <TextInput
                      id='email'
                      placeholder='nome@empresa.com'
                      type='email'
                      required
                      onChange={e => handleCollaborator({ email: e.target.value })}
                      value={collaborator.email}
                      color={validateEmail(collaborator.email) ? 'success' : 'warning'}
                    />
                    <div className='mb-2 block'>
                      <Label htmlFor='birthday' value='Data Aniversário' />
                    </div>
                    <DatePicker
                      id='birthday'
                      onChange={date => handleCollaborator({ birthday: date })}
                    />
                  </div>
                  <div className='space-y-3'>
                    <div className='mb-2 block'>
                      <Label htmlFor='contact' value='Contato' />
                    </div>
                    <TextInput
                      id='contact'
                      placeholder='(xx) xxxxx-xxxx'
                      type='tel'
                      maxLength={11}
                      onChange={e => handleCollaborator({ contact: formatPhoneNumber(e.target.value) })}
                      value={collaborator.contact}
                    />
                    <div className='mb-2 block'>
                      <Label htmlFor='payment' value='Valor Mensalidade' />
                    </div>
                    <TextInput
                      id='payment'
                      placeholder='0'
                      type='number'
                      addon='R$'
                      onChange={e => handleCollaborator({ payment: e.target.value })}
                      value={collaborator.payment}
                    />
                    <div className='mb-2 block'>
                      <Label htmlFor='associationdate' value='Data Associação' />
                    </div>
                    <DatePicker
                      id='associationdate'
                      onChange={date => handleCollaborator({ associationdate: date })}
                      value={collaborator.associationdate}
                    />
                  </div>
                </section>
              </Tabs.Item>
              <Tabs.Item
                active
                icon={HomeIcon}
                title='Endereço'
              >
                <section className='flex justify-between items-start gap-2'>
                  <div className='flex items-end w-[30%] mr-2'>
                    <div className='w-full'>
                      <span className='mb-2 block'>
                        <Label htmlFor='CEP' value='CEP' />
                      </span>
                      <TextInput
                        id='CEP'
                        placeholder='Digite o CEP'
                        type='text'
                        maxLength={9}
                        required
                        onChange={e => handleAddress({ cep: formatCEP(e.target.value) })}
                        value={address.cep}
                      />
                    </div>
                    <Button className='ml-2' onClick={() => getCompleteAddress(address.cep)} color='success'>
                      { loading === 'cep' ? (
                        <Spinner color='primary-100' size='w-5 h-5'/>
                      ) : (
                        <MagnifyingGlassIcon className='w-5 h-5'/>
                      )}
                    </Button>
                  </div>
                  <div className='flex flex-col w-[45%]'>
                    <span className='mb-2 block'>
                      <Label htmlFor='street' value='Rua' />
                    </span>
                    <TextInput
                      id='street'
                      placeholder='Rua'
                      type='text'
                      required
                      onChange={e => handleAddress({ street: e.target.value })}
                      value={address.street}
                    />
                  </div>
                  <div className='flex flex-col w-[30%]'>
                    <span className='mb-2 block'>
                      <Label htmlFor='neighborhood' value='Bairro' />
                    </span>
                    <TextInput
                      id='neighborhood'
                      placeholder='Bairro'
                      type='text'
                      required
                      onChange={e => handleAddress({ neighborhood: e.target.value })}
                      value={address.neighborhood}
                    />
                  </div>
                </section>
                <section className='flex justify-between items-start gap-2 mt-3'>
                  <div className='flex flex-col w-[30%]'>
                    <span className='mb-2 block'>
                      <Label htmlFor='uf' value='UF' />
                    </span>
                    <TextInput
                      id='uf'
                      placeholder='UF'
                      type='text'
                      required
                      onChange={e => handleAddress({ uf: e.target.value })}
                      value={address.uf}
                    />
                  </div>
                  <div className='flex flex-col w-[45%]'>
                    <span className='mb-2 block'>
                      <Label htmlFor='city' value='Cidade' />
                    </span>
                    <TextInput
                      id='city'
                      placeholder='Cidade'
                      type='text'
                      required
                      onChange={e => handleAddress({ city: e.target.value })}
                      value={address.city}
                    />
                  </div>
                  <div className='flex flex-col w-[30%]'>
                    <span className='mb-2 block'>
                      <Label htmlFor='complement' value='Complemento' />
                    </span>
                    <TextInput
                      id='complement'
                      placeholder='Complemento'
                      type='text'
                      required
                      onChange={e => handleAddress({ complement: e.target.value })}
                      value={address.complement}
                    />
                  </div>
                </section>
              </Tabs.Item>
            </Tabs.Group>
            <div className='flex justify-end w-full'>
              <Button
                class='bg-transparent mr-1 text-gray-600 hover:bg-gray-100 hover:text-gray-600 transition rounded-md'
                onClick={clearFields}
              >
                Voltar
              </Button>
              <Button
                color='success'
                type='submit'
                onClick={() => createOrModifyCollaborator(openModal)}
                disabled={!collaborator.name || !validateEmail(collaborator.email)}
              >
                { loading === 'collaborator' ? (
                  <Spinner color='primary-100' size='w-5 h-5 q-ml-2'/>
                ) : (
                  openModal === 'register' ? 'Registrar' : 'Atualizar'
                )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Dashboard
