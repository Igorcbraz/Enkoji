import { useWindowDimensions } from '../../hooks/useWindowDimentions'

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const Navbar = () => {
  const { width } = useWindowDimensions();

  return width > 1000 ? <Desktop/> : <Mobile/>
}
