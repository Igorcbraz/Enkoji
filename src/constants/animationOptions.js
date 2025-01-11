import { config } from '@react-spring/web'

export const animationOptions = {
  fadeInTop: {
    delay: 500,
    from: { y: -25, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: config.molasses
  },
  fadeInBottom: {
    delay: 500,
    from: { y: 25, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: config.molasses
  },
  fadeInLeft: {
    delay: 500,
    from: { x: 50, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: config.molasses
  },
  fadeInRight: {
    delay: 500,
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: config.molasses
  },
  fadeIn: {
    delay: 1000,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses
  },
}
