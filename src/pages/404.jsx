import { ForbiddenIcon } from '../assets/icons'

export function NotFound () {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-2'>
      <ForbiddenIcon className='w-12 h-12 mt-8 text-primary-200' aria-hidden='true' />
      <h1 className='text-6xl font-semibold text-gray-700 dark:text-gray-200'>404</h1>
      <p className='text-gray-700 dark:text-gray-300'>
        Página não encontrada. Verifique o endereço digitado.
      </p>
      <a href='/' className='text-primary-600 hover:underline dark:text-primary-400'> Voltar para o início.</a>
    </div>
  )
}
