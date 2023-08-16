/* eslint-disable react/prop-types */
export const Spinner = ({ color, size }) => {
  return (
    <div className='flex flex-row space-x-4'>
      <div className={`${size || 'w-6 h-6 '} rounded-full animate-spin border border-solid border-${color || 'primary-100'} border-t-transparent`}>
      </div>
    </div>
  )
}
