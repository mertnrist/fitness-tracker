import { Link } from "react-router-dom"
import { FaHome, FaUserCircle, FaInfo } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { useState } from "react";
import Modal from "../shared/_Modal/Modal";


const Navbar = ({ registerModal, setRegisterModal }) => {
    const [loginModal, setLoginModal] = useState(false)

    return (
        <>
            {registerModal && <Modal isOpen={registerModal} setIsOpen={setRegisterModal} title="Kayıt Ol">

            </Modal>}


            {loginModal && <Modal isOpen={loginModal} setIsOpen={setLoginModal} title="Giriş Yap">

            </Modal>}

            <nav className='w-full h-[100px] flex items-center justify-center p-5'>

                {/* Pages */}
                <ul className="bg-[#111] p-[15px] w-full rounded-[10px] flex gap-5 items-center text-[18px]">
                    <li className="p-2 rounded-2xl bg-white text-black">
                        <Link to={'/'} className="flex items-center gap-1">
                            <FaHome />
                            <span>Anasayfa</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className="flex items-center gap-1">
                            <FaInfo />
                            <span>Hakkımızda</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-1" onClick={(e) => setLoginModal(true)}>
                            <FaUserCircle />
                            <span>Giriş Yap</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className="flex items-center gap-1" onClick={(e) => setRegisterModal(true)}>
                            <GiArchiveRegister />
                            <span>Kayıt Ol</span>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
