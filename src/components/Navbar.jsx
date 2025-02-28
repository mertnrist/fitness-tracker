import { Link } from "react-router-dom"
import { FaHome, FaUserCircle, FaInfo } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useModalStore } from "../store/modalStore";
import { CgProfile } from "react-icons/cg";

import Modal from "./shared/Modal";
import Register from "../pages/Homepage/components/Modals/Register";
import Login from "../pages/Homepage/components/Modals/Login";

const Navbar = () => {
    const [activeBtn, setActiveBtn] = useState('')

    const registerModal = useModalStore((state) => state.registerModal) || false
    const setRegisterModal = useModalStore((state) => state.changeRegisterModal)

    const loginModal = useModalStore((state) => state.loginModal) || false
    const setLoginModal = useModalStore((state) => state.changeLoginModal)

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                setActiveBtn('home')
                break;
            case "/hakkimizda":
                setActiveBtn('about')
                break;
            case "/profil":
                setActiveBtn('profile')
                break;
        }
    }, [])

    return (
        <>
            {registerModal && <Modal isOpen={registerModal} setIsOpen={setRegisterModal} title="Kayıt Ol">
                <Register />
            </Modal>}


            {loginModal && <Modal isOpen={loginModal} setIsOpen={setLoginModal} title="Giriş Yap">
                <Login />
            </Modal>}

            <nav className='w-full h-[100px] flex items-center justify-center p-5'>

                {/* Pages */}
                <ul className="bg-zinc-900/80 backdrop-blur-sm p-[15px] w-full rounded-xl flex gap-5 items-center text-[18px]">
                    <li className={` ${activeBtn === 'home' ? "p-2 rounded-xl bg-amber-500 text-black" : "hover:text-amber-500"}`}>
                        <Link to={'/'} className="flex items-center gap-2">
                            <FaHome />
                            <span>Anasayfa</span>
                        </Link>
                    </li>
                    <li className={` ${activeBtn === 'about' ? "p-2 rounded-xl bg-amber-500 text-black" : "hover:text-amber-500"}`}>
                        <Link to={'/hakkimizda'} className="flex items-center gap-2">
                            <FaInfo />
                            <span>Hakkımızda</span>
                        </Link>
                    </li>
                    <li className="hover:text-amber-500 ">
                        <Link className="flex items-center gap-2" onClick={(e) => setLoginModal(true)}>
                            <FaUserCircle />
                            <span>Giriş Yap</span>
                        </Link>
                    </li>
                    <li className="hover:text-amber-500 ">
                        <Link className="flex items-center gap-2" onClick={(e) => setRegisterModal(true)}>
                            <GiArchiveRegister />
                            <span>Kayıt Ol</span>
                        </Link>
                    </li>
                    <li className={` ${activeBtn === 'profile' ? "p-2 rounded-xl bg-amber-500 text-black" : "hover:text-amber-500"}`}>
                        <Link to={'/profil'} className="flex items-center gap-2">
                            <CgProfile />
                            <span>Profilim</span>
                        </Link>
                    </li>
                </ul>



            </nav >
        </>
    )
}

export default Navbar
