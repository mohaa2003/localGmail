import { HiPencil } from "react-icons/hi2";
import { MdInbox } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { RiSpam2Line } from "react-icons/ri";
import { RiDraftLine } from "react-icons/ri";



const Aside = () => {
  return (
    <aside className="w-[300px] p-3">
        <div className="flex flex-col gap-4">
            <div>
                <button className="flex items-center gap-2 lighter-2 px-6 py-4 rounded-[15px] text-md txtTitle hover:shadow-md transition-all duration-300">
                    <HiPencil size={20}/>
                    Compose
                </button>
            </div>
            <div>
                <div className=" flex justify-between items-center px-3 py-2 light-2 rounded-full cursor-pointer">
                    <div className="flex items-center gap-2">
                        <MdInbox size={20}/>
                        <strong className="font-bold">Inbox</strong>
                    </div>
                    <div>
                        <span className="font-bold">
                            2923
                        </span>
                    </div>

                </div>
                <div className=" flex justify-between items-center px-3 py-2 hover:lighter-2 rounded-full cursor-pointer">
                    <div className="flex items-center gap-2">
                        <VscSend size={20}/>
                        <strong className="">Sent</strong>
                    </div>
                    <div>
                        <span className="font-bold">
                            2923
                        </span>
                    </div>

                </div>
                <div className=" flex justify-between items-center px-3 py-2 hover:lighter-2 rounded-full cursor-pointer">
                    <div className="flex items-center gap-2">
                        <RiSpam2Line size={20}/>
                        <strong className="">Draft</strong>
                    </div>
                    <div>
                        <span className="font-bold">
                            2923
                        </span>
                    </div>

                </div>
                <div className=" flex justify-between items-center px-3 py-2 hover:lighter-2 rounded-full cursor-pointer">
                    <div className="flex items-center gap-2">
                        <RiDraftLine size={20}/>
                        <strong className="">Spam</strong>
                    </div>
                    <div>
                        <span className="font-bold">
                            2923
                        </span>
                    </div>

                </div>
                
            </div>
        </div>
    </aside>
  )
}

export default Aside