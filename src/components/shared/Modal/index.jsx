import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ children, title = "", isOpen, setIsOpen }) => {
    const closeModal = () => setIsOpen(false)

    if (isOpen) {
        return (
            <div className="fixed w-[100%] h-[100%] flex items-center justify-center ">
                <div className="z-10 relative w-150 bg-[#1a1a1a] border-1 border-white h-auto">
                    <div className="w-full flex justify-between items-center p-5 text-2xl cursor pointer border-b-1 bg-[#141414]">
                        <span className="font-bold">{title}</span>
                        <IoCloseSharp className="cursor-pointer text-red-500" onClick={(e) => closeModal()} />
                    </div>
                    <div className="p-5 h-full">{children}</div>
                </div>
                <div className="w-full h-full absolute z-1 bg-[#111111ec] overflow-hidden" onClick={(e) => closeModal()}></div>
            </div>
        )
    }
}


export default Modal
