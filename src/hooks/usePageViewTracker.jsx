import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export const usePageViewTracker = () => {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send('pageview')
  }, [location])
}
