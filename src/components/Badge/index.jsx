import PropTypes from 'prop-types'

export const Badge = ({
  children
}) => {
  return (
    <span
      className='inline-block mb-3 sm:mb-0 shadow-sm shadow-primary-500 px-5 py-2 rounded-full text-xs md:text-sm font-body text-white transition border-primary-300 border-[1px] bg-primary-400 capitalize'
    >
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node
}
