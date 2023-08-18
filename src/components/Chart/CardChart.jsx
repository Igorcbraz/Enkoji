import React from 'react'
import { Card } from 'flowbite-react'

export function CardChart ({ children, title, className }) {
  return (
    <Card className={className}>
      <p className='mb-4 font-semibold text-gray-800'>{title}</p>
      {children}
    </Card>
  )
}
