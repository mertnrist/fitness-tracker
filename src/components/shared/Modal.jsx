import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

const Modal = ({ children, title = "", isOpen, setIsOpen, size = "default" }) => {
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEsc);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const sizeClasses = {
        default: "w-[90%] max-w-md",
        fullscreen: "w-[100%] h-[100%] rounded-none overflow-y-auto"
    };

    return (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm -z-10 overflow-hidden"
                onClick={closeModal}
            />
            <div className={`relative ${sizeClasses[size]} bg-zinc-900 border border-zinc-800 shadow-xl z-10 `}>
                <div className="w-full flex justify-between items-center p-5 text-2xl border-b border-zinc-800 bg-zinc-800 ">
                    <span className="font-bold">{title}</span>
                    <IoCloseSharp
                        className="cursor-pointer text-red-500 hover:text-red-600 transition-colors"
                        onClick={closeModal}
                    />
                </div>
                <div className="p-5 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
