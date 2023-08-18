import React from 'react'
import { Content } from '../Content'

export const Desktop = () => {
  return (
    <aside className='z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700 lg:block'>
      <Content />
    </aside>
  )
}
