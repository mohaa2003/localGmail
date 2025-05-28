"use client"

import { useContext, useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { GoRead } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { openAsideContext } from "@/contexts/OpenAsideProvider";



const MainTable = () => {
const {openAside} = useContext(openAsideContext);

const [readed,setReaded] = useState(false);
const holdReadingMails = ()=>{
  setReaded(!readed);
}


const [checked,setChecked] = useState(false);
const holdChecking = ()=>{
  setChecked(!checked);
}

  return (
    <table className={"bg-[#fff] h-full flex flex-col relative overflow-auto rounded-3xl min-w-[500px] "} style={openAside? {width:"calc(100% - 300px)"} : {width:"100%"}}>
      <thead className="sticky top-0">
      <tr className="flex justify-between border border-white bg-white rounded-t-3xl items-center">
            <td className="flex gap-16">
              <div className="w-[5%] flex items-center p-1">
                <span className="px-1 py-2 hover:light-2 rounded-xl accent-light-2" onClick={holdChecking}>{checked?<MdOutlineCheckBox size={20}/>:<MdOutlineCheckBoxOutlineBlank size={20}/>}</span>
                <span className="px-1 py-2 hover:light-2 rounded-xl"><FaCaretDown size={14}/></span>
              </div>
              <div className="flex items-center">
                <span className="p-3 hover:light-2 rounded-full"><IoMdRefresh size={20}/></span>
                <span className="p-3 hover:light-2 rounded-full"><GoRead size={20}/></span>
              </div>
            </td>
            <td className="flex items-center gap-2">
              <span>1-50 of 1,543</span>
              <div className="flex">
                <span className="p-3 hover:light-2 rounded-full">
                  <MdOutlineKeyboardArrowLeft size={20}/>
                </span>
                <span className="p-3 hover:light-2 rounded-full">
                  <MdOutlineKeyboardArrowRight size={20}/>
                </span>
              </div>
            </td>
            
        </tr>
      </thead>
        
      <tbody>
        <tr className="flex gap-2 justify-between border-b border-light-1 hover:shadow-md cursor-pointer">
            <td className="w-[20%] flex items-center">
              <span className="p-3 hover:light-2 rounded-full accent-light-2" onClick={holdChecking}>{checked?<MdOutlineCheckBox size={20}/>:<MdOutlineCheckBoxOutlineBlank size={20}/>}</span>
              <span>AliExpress</span>
            </td>
            <td className="w-[70%] whitespace-nowrap overflow-hidden text-ellipsis p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem nobis sunt id rem iusto, nostrum debitis architecto nam earum.</td>
            <td className="w-[10%] text-right p-3">Nov 19</td>
        </tr>
        
      </tbody>
          
      <tfoot>
  
      </tfoot>

    </table>
  )
}

export default MainTable