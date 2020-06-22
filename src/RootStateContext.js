import React from 'react'
import { initStores } from './initStores'

const RootStateContext = React.createContext(null)

export const RootStateProvider = ({children}) => {
  const stores = initStores()

  return <RootStateContext.Provider value={stores}>
    {children}
  </RootStateContext.Provider>
}

export const useRootStore = () => React.useContext(RootStateContext)