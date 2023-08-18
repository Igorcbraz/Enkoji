import React from 'react'

import { useWindowDimensions } from '../../hooks/useWindowDimentions'

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const Sidebar = () => {
  const { width } = useWindowDimensions();

  return width > 768 ? <Desktop/> : <Mobile/>
}
