import { NavLink } from 'react-router-dom'

import { routes } from '../../routes/sidebar'
import { Submenu } from './Submenu'

import * as Icons from '../../assets/icons'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

export const Content = () => {
  return (
    <div className='py-4 text-white'>
      <a className='ml-6 text-lg font-bold text-white' href='#'>
        Templo Enkoji
      </a>
      <ul className='mt-6 space-y-4'>
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
    </div>
  )
}
