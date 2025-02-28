import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

const Modal = ({ children, title = "", isOpen, setIsOpen, size = "default" }) => {
    const closeModal = () => setIsOpen(false);

    // ESC tuşu ile modalı kapatma
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEsc);

        // Modal açıkken scroll'u engelle
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
        fullscreen: "w-[95%] h-[90%] max-w-[1400px]"
    };

    return (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm -z-10"
                onClick={closeModal}
            />
            <div className={`relative ${sizeClasses[size]} bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-10`}>
                <div className="w-full flex justify-between items-center p-5 text-2xl border-b border-zinc-800 bg-zinc-800 rounded-t-lg">
                    <span className="font-bold">{title}</span>
                    <IoCloseSharp
                        className="cursor-pointer text-red-500 hover:text-red-600 transition-colors"
                        onClick={closeModal}
                    />
                </div>
                <div className="p-5 h-[calc(100%-80px)] overflow-hidden">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
