import { MdOutlineMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const MailingBull = () => {
  return (
    <div className="fixed bottom-0 right-32 w-[400px] h-[75%] shadow-2xl">
        <div className="p-3 light-2 flex justify-between items-center rounded-lg">
            <h3><strong>New message</strong></h3>
            <div className="flex gap-2 items-center">
                <span><MdOutlineMinimize size={15}/></span>
                <span><IoMdClose size={15}/></span>
            </div>
        </div>
    </div>
  )
}

export default MailingBull