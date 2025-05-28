import { MdOutlineMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const MailingBull = () => {
  return (
    <div className="fixed bottom-0 right-10 w-[500px] h-[75%] shadow-2xl">
        <div id="bullHeader" className="p-3 light-2 flex justify-between items-center rounded-lg">
            <h3><strong>New message</strong></h3>
            <div className="flex gap-2 items-center">
                <span><MdOutlineMinimize size={15}/></span>
                <span><IoMdClose size={15}/></span>
            </div>
        </div>
        <div id="bullBody" className="flex flex-col justify-between">
            <div>
                <div className="flex flex-col px-3 mb-3">
                    <div className="relative flex items-center">
                        <div className="w-full">
                            <label className="pr-2" htmlFor="">To:</label>
                            <input className="outline-none py-2 w-[90%]" type="text" />
                        </div>
                        <span className="absolute right-0 ">*</span>
                    </div>
                    <div>
                        <label className="pr-2" htmlFor="">CC:</label>
                        <input className="outline-none py-2 w-[90%]" type="text" />
                    </div>
                    <div>
                        <label className="pr-2" htmlFor="">BCC:</label>
                        <input className="outline-none py-2 w-[90%]" type="text" />
                    </div>
                    <hr />
                </div>
                <div className=" px-3 mb-3">
                    <div>
                        <label className="pr-2" htmlFor="">Subject:</label>
                        <input className="outline-none py-2 w-[80%]" type="text"/>
                    </div>
                    <hr />
                </div>
                <div className=" px-3 mb-3">
                    <div>
                        <textarea className=" py-2 w-[100%] resize-none txtSmall overflow-hidden max-h-[30%]" 
                        onInput={(e) => {e.target.style.height = 'auto'; e.target.style.height = `${e.target.scrollHeight}px`;}}
                        ></textarea>
                    </div>
                    <hr />
                </div>
            </div>
            <div id="footerbuttons" className="px-3 mb-3">
                    <button className="light-2 rounded-full px-6 py-3 secondry">
                        <strong className="text-white strong">Send</strong>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default MailingBull