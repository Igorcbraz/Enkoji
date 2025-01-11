import { Routes, Route } from 'react-router-dom'

import { MapProvider } from './context/MapContext'
import { usePageViewTracker } from './hooks/usePageViewTracker'

import { Home } from './pages/Home'

function App() {
  usePageViewTracker()

  return (
    <MapProvider>
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
    </MapProvider>
  )
}

export default App
