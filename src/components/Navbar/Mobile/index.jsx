import { Links } from '../../../utils/links'

import Logo from '../../../assets/images/logo.png'

export const Mobile = () => {
  return (
    <nav className='bg-primary-800 px-2 py-2.5 fixed w-full z-20 top-0 left-0'>
      <div className='container flex flex-wrap items-center justify-between'>
        <a href='https://flowbite.com/' className='flex items-center'>
          <img src={Logo} className='h-14' alt='Enkoji Logo' />
        </a>
        <button data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center p-2 ml-3 text-sm text-primary-300 bg-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:bg-primary-300 focus:text-primary-100' aria-controls='navbar-default' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
        </button>
        <div className='hidden w-full mt-2' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4g gap-2 border border-primary-300 rounded-lg bg-primary-700 '>
            <li>
              <a href='#history' className='block py-2 pl-3 pr-4 text-white bg-primary-400 rounded' aria-current='page'>Sobre nós</a>
            </li>
            <li>
              <a href='#buddhism' className='block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-800'>Budismo</a>
            </li>
            <li>
              <a href='#infos' className='block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-800'>Programação</a>
            </li>
            <li>
              <a href={Links.socialMedia.shop} target='_blank' rel='noreferrer' className='block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-800'>Loja</a>
            </li>
            <li>
              <a href='#gallery' className='block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-800'>Mídia</a>
            </li>
            <li>
              <a href='#infos' className='block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-800'>Visite</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
