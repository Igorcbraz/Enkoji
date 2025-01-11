import { useState } from 'react'
import PropTypes from 'prop-types'

import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from '@react-spring/web'

import { animationOptions } from '../../constants/animationOptions'

export const Animation = ({
  children,
  type,
  delay,
  containerClass,
  id,
}) => {
  const [inView, setInview] = useState(false)
  const { to, from, ...animation } = animationOptions[type]

  const animationStyle = useSpring({
    to: inView ? to : from,
    delay: delay || animation.delay,
    ...animation
  })

  return (
    <Waypoint
      onEnter={() => setInview(true)}
      onLeave={() => setInview(false)}
    >
      <animated.div style={animationStyle} className={containerClass} id={id}>
        {children}
      </animated.div>
    </Waypoint>
  )
}

Animation.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  delay: PropTypes.number,
  containerClass: PropTypes.string,
  id: PropTypes.string
}
