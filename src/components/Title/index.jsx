import PropTypes from 'prop-types'

import { Badge } from '../Badge'
import { Animation } from '../Animation'

export const Title = ({ badge, text, caption, children }) => {
  return (
    <Animation type='fadeInTop' containerClass='flex flex-col justify-center items-center gap-[-3rem] text-white' delay={1000}>
      {badge && <Badge>{badge}</Badge>}
      <h2 className='text-[3rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold text-center font-script'>
        {text}
      </h2>
      <p className='text-center text-xs sm:text-sm lg:text-lg w-full sm:w-[70%] lg:w-full font-light italic'>
        {caption}
      </p>
      {children}
    </Animation>
  )
}

Title.propTypes = {
  badge: PropTypes.string,
  text: PropTypes.string.isRequired,
  caption: PropTypes.string,
  children: PropTypes.node
}
