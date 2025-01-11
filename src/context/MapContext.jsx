import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const MapContext = createContext()

export const MapProvider = ({ children }) => {
  const [mapIframe, setMapIframe] = useState(null)

  return (
    <MapContext.Provider value={{ mapIframe, setMapIframe }}>
      {children}
    </MapContext.Provider>
  )
}

export const useMap = () => useContext(MapContext)

MapProvider.propTypes = {
  children: PropTypes.node,
}
