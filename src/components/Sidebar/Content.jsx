import { NavLink } from 'react-router-dom'
import {
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

import { routes } from '../../routes/sidebar'
import { Submenu } from './Submenu'

import * as Icons from '../../assets/icons'


function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

export const Content = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className='flex flex-col items-stretch justify-between h-screen py-4 text-white'>
      <span>
        <a className='ml-6 text-lg font-bold text-white' href='#'>
          {user?.firstName} {user?.lastName}
        </a>
        <p className='ml-6 text-sm font-medium text-primary-300'>
          {user?.role.toUpperCase() === 'ADMIN' ? 'Administrador' : 'Colaborador'}
        </p>
      </span>
      <ul className='self-start h-full mt-8 space-y-4'>
        {routes.map(route =>
          route.routes ? (
            <Submenu route={route} key={route.name} />
          ) : (
            <li className='relative px-6 py-3' key={route.name}>
              <NavLink
                exact
                to={window.location.pathname === route.path ? '#' : route.path}
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200'
              >
                {window.location.pathname === route.path && (
                  <span
                    className='absolute inset-y-0 left-0 w-1 bg-white rounded-tr-lg rounded-br-lg'
                    aria-hidden='true'
                  ></span>
                )}
                <Icon className='w-5 h-5' aria-hidden='true' icon={route.icon} />
                <span className='ml-4'>{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className='px-6 my-6'>
        <button
          className='flex justify-center items-center text-md font-medium w-full bg-primary-800 rounded-lg py-2 transition hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
          onClick={handleLogout}
        >
          Sair
          <ArrowLeftOnRectangleIcon className='w-5 h-5 ml-2' aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}
