import React, { useState } from 'react'
import Datepicker from 'tailwind-datepicker-react'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid'

const options = {
  title: 'Selecione uma data',
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  maxDate: new Date('2030-01-01'),
  minDate: new Date('1950-01-01'),
  theme: {
    background: 'bg-white',
    todayBtn: '',
    clearBtn: '',
    icons: '',
    text: '',
    disabledText: 'bg-gray-100',
    input: '',
    inputIcon: '',
    selected: '',
  },
  icons: {
    prev: () => <span> <ArrowLeftIcon className='w-5 h-5'/></span>,
    next: () => <span> <ArrowRightIcon className='w-5 h-5'/> </span>,
  },
  datepickerClassNames: 'top-12',
  defaultDate: new Date(),
  language: 'pt-BR',
}


export const DatePicker = (props) => {
  const { onChange } = props

  const [show, setShow] = useState(false)

  const handleClose = (state) => {
    setShow(state)
  }

  return (
    <Datepicker options={options} onChange={onChange} show={show} setShow={handleClose} {...props}/>
  )
}
