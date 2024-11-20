"use client"

import { useState } from "react";
import "./maintable.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { GoRead } from "react-icons/go";



const MainTable = () => {

const [readed,setReaded] = useState(false);
const holdReadingMails = ()=>{
  setReaded(!readed);
}


const [checked,setChecked] = useState(false);
const holdChecking = ()=>{
  setChecked(!checked);
}

  return (
    <table id="maintable" className="bg-[#fff] h-full flex flex-col relative overflow-auto rounded-3xl">
      <thead className="sticky top-0">
      <tr className="flex gap-2 border border-light-1 bg-white rounded-t-3xl">
            <td className="w-[20%] flex items-center">
              <span className="p-3 hover:light-2 rounded-full accent-light-2" onClick={holdChecking}>{checked?<MdOutlineCheckBox size={20}/>:<MdOutlineCheckBoxOutlineBlank size={20}/>}</span>
              <span className="p-1 hover:light-2 rounded-full"><FaCaretDown size={14}/></span>
            </td>
            <td className="w-[20%] flex items-center">
              <span className="p-3 hover:light-2 rounded-full"><IoMdRefresh size={20}/></span>
            </td>
            <td className="w-[20%] flex items-center">
              <span className="p-3 hover:light-2 rounded-full"><GoRead size={20}/></span>
            </td>
        </tr>
      </thead>
        
      <tbody>
        <tr className="flex gap-2 justify-between border border-light-1 hover:shadow-md cursor-pointer">
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