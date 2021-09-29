import React, { useState } from 'react'

const Context = React.createContext({})

export function LatLngContextProvider({ children }) {
    const [LatLng, setLatLng] = useState({})
    return <Context.Provider value={{ LatLng, setLatLng }}>
        {children}
    </Context.Provider>
}

export default Context