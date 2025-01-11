import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga4'
import App from './App'

import './global.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

const TRACKING_ID  = process.env.REACT_APP_GA_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
