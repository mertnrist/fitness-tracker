import { Link } from "react-router-dom"
import { FaHome, FaUserCircle, FaInfo } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { useEffect, useState, useRef } from "react";
import { useModalStore } from "../store/modalStore";
import { CgProfile } from "react-icons/cg";
import { IoMenu, IoClose, IoNotifications } from "react-icons/io5";
import NotificationsModal from "./shared/NotificationsModal";

import Modal from "./shared/Modal";
import Register from "../pages/Homepage/components/Modals/Register";
import Login from "../pages/Homepage/components/Modals/Login";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
    const [activeBtn, setActiveBtn] = useState('')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState(2); // Örnek okunmamış bildirim sayısı
    const notificationsRef = useRef(null);

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
            case "/profil/ayarlarim":
                setActiveBtn('profile')
                break;
            case "/profil/gunluk":
                setActiveBtn('profile')
                break;
            case "/profil/antreman-programlarim":
                setActiveBtn('profile')
                break;
            case "/profil/olcumler":
                setActiveBtn('profile')
                break;
        }
    }, [])

    // Bildirim modalını dışarı tıklandığında kapatmak için
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMobileMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        {
            name: "Anasayfa",
            icon: <FaHome />,
            link: "/",
            active: activeBtn === 'home',
            onClick: closeMobileMenu
        },
        {
            name: "Hakkımızda",
            icon: <FaInfo />,
            link: "/hakkimizda",
            active: activeBtn === 'about',
            onClick: closeMobileMenu
        },
        {
            name: "Giriş Yap",
            icon: <FaUserCircle />,
            onClick: () => {
                setLoginModal(true);
                closeMobileMenu();
            }
        },
        {
            name: "Kayıt Ol",
            icon: <GiArchiveRegister />,
            onClick: () => {
                setRegisterModal(true);
                closeMobileMenu();
            }
        }
    ];

    return (
        <>
            {registerModal &&
                <Modal isOpen={registerModal} setIsOpen={setRegisterModal} title="Kayıt Ol" size="fullscreen">
                    <Register />
                </Modal>
            }

            {loginModal &&
                <Modal isOpen={loginModal} setIsOpen={setLoginModal} title="Giriş Yap" size="fullscreen">
                    <Login />
                </Modal>
            }

            <nav className='w-[93%] h-[100px] m-auto p-5'>
                <div className="relative flex items-center justify-center">
                    <button
                        className="lg:hidden absolute left-[-15px] top-5 -translate-y-1/2 text-2xl hover:text-amber-500 transition-colors z-10"
                        onClick={handleMobileMenuClick}
                    >
                        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
                    </button>

                    {/* Mobil için sağ üst köşe butonları */}
                    <div className="lg:hidden absolute right-[-15px] top-5 -translate-y-1/2 flex items-center gap-4 z-10">
                        <Link to={'/profil/arkadaslar'} className="text-2xl hover:text-amber-500 transition-colors">
                            <BiSearch />
                        </Link>
                        <div className="relative flex" ref={notificationsRef}>
                            <button
                                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                                className={`hover:text-amber-500 transition-colors relative ${isNotificationsOpen ? 'text-amber-500' : ''}`}
                            >
                                <IoNotifications className="text-2xl" />
                                {unreadCount > 0 && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                        {unreadCount}
                                    </span>
                                )}
                            </button>
                            <div className="absolute top-full right-0">
                                <NotificationsModal
                                    isOpen={isNotificationsOpen}
                                    onClose={() => setIsNotificationsOpen(false)}
                                />
                            </div>
                        </div>
                        <Link
                            to="/profil"
                            className={`text-2xl hover:text-amber-500 transition-colors ${activeBtn === 'profile' ? 'text-amber-500' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            <CgProfile />
                        </Link>
                    </div>

                    <ul className="hidden lg:flex bg-zinc-800/80 backdrop-blur-sm p-[15px] w-full rounded-xl gap-5 items-center text-[18px] relative z-10">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${item.active ? "p-2 rounded-xl bg-amber-500 text-black" : "hover:text-amber-500"} z-10`}
                            >
                                {item.link ? (
                                    <Link to={item.link} className="flex items-center gap-2" onClick={item.onClick}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                ) : (
                                    <Link className="flex items-center gap-2" onClick={item.onClick}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                )}
                            </li>
                        ))}

                        {/* Masaüstü için sağ taraf butonları */}
                        <li className="ml-auto flex items-center gap-4">
                            <Link to={'/profil/arkadaslar'} className="text-2xl hover:text-amber-500 transition-colors p-2">
                                <BiSearch className="text-[22px]" />
                            </Link>
                            <div className="relative flex" ref={notificationsRef}>
                                <button
                                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                                    className={`hover:text-amber-500 transition-colors relative ${isNotificationsOpen ? 'text-amber-500' : ''}`}
                                >
                                    <IoNotifications className="text-[22px]" />
                                    {unreadCount > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                            {unreadCount}
                                        </span>
                                    )}
                                </button>
                                <div className="absolute top-full right-0">
                                    <NotificationsModal
                                        isOpen={isNotificationsOpen}
                                        onClose={() => setIsNotificationsOpen(false)}
                                    />
                                </div>
                            </div>
                            <Link
                                to="/profil"
                                className={`text-2xl hover:text-amber-500 transition-colors ${activeBtn === 'profile' ? 'text-amber-500' : ''}`}
                            >
                                <CgProfile className="text-[22px]" />
                            </Link>
                        </li>
                    </ul>

                    {/* Mobil menü */}
                    <div className={`
                        lg:hidden fixed inset-0 bg-zinc-900/95 backdrop-blur-sm transition-all duration-300 z-50
                        ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}>
                        <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-center">
                            <button
                                onClick={closeMobileMenu}
                                className="text-2xl hover:text-amber-500 transition-colors"
                            >
                                <IoClose />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full">
                            <ul className="flex flex-col items-center gap-2 text-xl">
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${item.active ? "p-2 rounded-xl bg-amber-500 text-black" : "hover:text-amber-500"}`}
                                    >
                                        {item.link ? (
                                            <Link to={item.link} className="flex items-center gap-3" onClick={item.onClick}>
                                                {item.icon}
                                                <span>{item.name}</span>
                                            </Link>
                                        ) : (
                                            <Link className="flex items-center gap-3" onClick={item.onClick}>
                                                {item.icon}
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
