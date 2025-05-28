"use client"

import { createContext, useState } from "react"
export const openAsideContext = createContext(null);

const OpenAsideProvider = ({children}) => {
  const [asideOpened,setAsideOpened] = useState(false);
  const handleOpeningAside = ()=>{
    setAsideOpened(!asideOpened);
    console.log(asideOpened);
  }
  return (
    <openAsideContext.Provider value={{asideOpened,handleOpeningAside}}>
      {children}
    </openAsideContext.Provider>
  )
}

export default OpenAsideProvider