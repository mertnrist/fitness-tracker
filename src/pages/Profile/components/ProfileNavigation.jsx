import { NavLink } from 'react-router-dom';
import { IoCalendarOutline, IoBarbell, IoHomeOutline, IoScale, IoPeople, IoSettings, IoEllipsisVertical, IoChatbubble } from "react-icons/io5";
import { useState } from 'react';
import Modal from '../../../components/shared/Modal';

const ProfileNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = [
        {
            name: 'Genel Bakış',
            path: '/profil',
            icon: <IoHomeOutline className="text-xl" />,
            exact: true
        },
        {
            name: 'Günlük',
            path: '/profil/gunluk',
            icon: <IoCalendarOutline className="text-xl" />
        },
        {
            name: 'Antrenman Programlarım',
            path: '/profil/antreman-programlarim',
            icon: <IoBarbell className="text-xl" />
        },
        {
            name: 'Ölçümler',
            path: '/profil/olcumler',
            icon: <IoScale className="text-xl" />
        },
        {
            name: "Herkese Açık Profilim",
            path: "/profil/ben",
            icon: <IoPeople className="text-xl" />
        },
        {
            name: "Arkadaşlarım",
            path: "/profil/arkadaslar",
            icon: <IoPeople className="text-xl" />
        },
        {
            name: "Mesajlarım",
            path: "/profil/mesajlarim",
            icon: <IoChatbubble className="text-xl" />
        },
        {
            name: "Partner Bul",
            path: "/profil/eslesme",
            icon: <IoBarbell className="text-xl" />
        },
        {
            name: 'Ayarlar',
            path: '/profil/ayarlarim',
            icon: <IoSettings className="text-xl" />
        },

    ];

    return (
        <>
            {/* Masaüstü Navigasyon */}
            <div className="hidden md:flex flex-col gap-2 mb-8 w-full">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.exact}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3
                            ${isActive ? 'bg-amber-500 text-black' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}
                            rounded-md transition-all text-sm font-medium w-full
                            cursor-pointer hover:scale-[1.02] active:scale-[0.98]`
                        }
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </div>

            {/* Mobil Görünüm */}
            <div className="md:hidden flex justify-end mb-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 p-2 text-white hover:text-amber-500 transition-colors"
                >
                    <span className="text-sm font-medium">Daha fazla göster</span>
                    <IoEllipsisVertical className="text-xl" />
                </button>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title="Menü"
                size="fullscreen"
            >
                <div className="space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.exact}
                            onClick={() => setIsModalOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3
                                ${isActive ? 'bg-amber-500 text-black' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}
                                rounded-md transition-all text-sm font-medium w-full`
                            }
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </Modal>
        </>
    );
};

export default ProfileNav;
