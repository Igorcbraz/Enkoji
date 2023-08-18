
import React from 'react'

import { Sidebar } from '../components/Sidebar'
import { Main } from './Main';

export const Layout = ({ Component }) => {
  const isSidebarOpen = true

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
      <Sidebar/>

      <div className='flex flex-col flex-1 w-full'>
        <Main>
          <div className='flex flex-col flex-1 w-full'>
            <Component/>
          </div>
        </Main>
      </div>
    </div>
  )
}
