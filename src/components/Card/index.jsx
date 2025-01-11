import PropTypes from 'prop-types';

export const Card = ({
  onClick,
  buttonTitle,
  children,
  title,
  iconComponent
}) => {
  return (
    <div className='flex flex-col justify-around items-center gap-5 bg-gradient-to-l from-primary-600 to-primary-500 rounded-md p-5 min-w-[90%] sm:min-w-[300px] lg:min-w-[350px] max-w-[400px] w-[20%] h-[20%] md:h-[360px] shadow-xl shadow-primary-600 border-primary-400 border-2'>
      {iconComponent}
      <h3 className='text-md lg:text-xl font-bold uppercase text-center flex-shrink-0'>
        {title}
      </h3>
      <div className='flex-grow flex items-center justify-center'>
        {children}
      </div>
      <button
        className='text-sm sm:text-md md:text-lg uppercase font-medium w-full py-3 font-body text-white border-primary-500 border-[1px] rounded-md bg-primary-500 shadow-xl shadow-primary-600 transition ease-in-out hover:shadow-primary-700 hover:bg-primary-400 hover:scale-105'
        onClick={onClick}
      >
        {buttonTitle}
      </button>
    </div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  iconComponent: PropTypes.node,
  buttonTitle: PropTypes.string
}
