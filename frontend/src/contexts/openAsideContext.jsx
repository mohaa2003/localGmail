import { createContext, useState } from "react"
export const openAside = createContext(null);

const openAsideContext = ({children}) => {
  const [asideOpened,setAsideOpened] = useState(false);
  const handleOpeningAside = ()=>{
    setAsideOpened(!asideOpened);
  }
  return (
    <openAside.Provider value={{asideOpened,setAsideOpened}}>
      {children}
    </openAside.Provider>
  )
}

export default openAsideContext