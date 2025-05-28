"use client"

import { useContext } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { openAsideContext } from "@/contexts/OpenAsideProvider"


const ToolBar = () => {
  const {asideOpened,handleOpeningAside} = useContext(openAsideContext);
    return (
      <section className="min-h-[100vh] min-w-[70px] w-[70px] light-1 flex justify-center py-4">
        <div className="flex flex-col items-center gap-8">
            <div className="hover:lighter-2 p-2 rounded-full" onClick={handleOpeningAside}>
                <HiBars3 size={25}/>
            </div>
            <div>
              <div className="flex flex-col items-center cursor-pointer">
                  <span className="hover:lighter-2 light-2 py-2 px-3 rounded-full"><IoMail size={20}/></span>
                  <strong className="text-xs">Mail</strong>
              </div>
            </div>
        </div>
      </section>
  )
}

export default ToolBar