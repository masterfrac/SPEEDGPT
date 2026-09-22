import { createContext } from "react";

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
 
  const value = {}


  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => useContext(AppContext)