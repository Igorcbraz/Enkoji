import ReactGA from 'react-ga4'

export const useAnalyticsEventTracker = (category='Landing') => {
  const eventTracker = (action = 'test action', label = 'test label') => {
    ReactGA.event({ category, action, label })
  }

  return eventTracker
}
