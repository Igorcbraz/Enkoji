import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Links } from '../../../constants/links';

import Logo from '../../../assets/images/logo.png';

export const Desktop = () => {
  return (
    <nav className='flex justify-center fixed z-50 w-screen h-24 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-700 pb-6'>
      <div className='flex items-center justify-between gap-2 w-4/5 h-24' id='navbar-default'>
        <a href='#' className='w-[15%]'>
          <LazyLoadImage
            src={Logo}
            alt='Logo templo enkoji'
            className='w-full max-w-[150px]'
          />
        </a>
        <ul className='flex flex-row justify-center gap-9 items-center rounded-full w-full text-white text-lg font-light'>
          <li className='group/navItem flex justify-between items-center tracking-widest relative'>
            <a href='#infos'>Programação</a>
            <hr className='w-0 bg-white transition-all h-[1px] border-0 absolute mt-10 duration-500 group-hover/navItem:w-full'/>
          </li>
          <li className='group/navItem flex justify-between items-center tracking-widest relative'>
            <a href='#history'>Sobre nós</a>
            <hr className='w-0 bg-white transition-all h-[1px] border-0 absolute mt-10 duration-500 group-hover/navItem:w-full'/>
          </li>
          <li className='group/navItem flex justify-between items-center tracking-widest relative'>
            <a href='#buddhism'>Budismo</a>
            <hr className='w-0 bg-white transition-all h-[1px] border-0 absolute mt-10 duration-500 group-hover/navItem:w-full'/>
          </li>
          <li className='group/navItem flex justify-between items-center tracking-widest relative'>
            <a href='#experience'>Sua experiência</a>
            <hr className='w-0 bg-white transition-all h-[1px] border-0 absolute mt-10 duration-500 group-hover/navItem:w-full'/>
          </li>
        </ul>
        <span className='flex justify-center items-center font-medium text-white transition border-primary-400 border-[1px] bg-primary-500 px-6 py-2 rounded-md hover:bg-primary-600 hover:border-primary-300'>
          <a href={Links.socialMedia.shop} target='_blank' rel='noreferrer'>Contribuição</a>
        </span>
      </div>
    </nav>
  )
}
