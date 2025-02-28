import { NavLink } from 'react-router-dom';
import { IoCalendarOutline, IoBarbell, IoSettingsOutline, IoHomeOutline, IoScale, IoPeople, IoSettings } from "react-icons/io5";

const ProfileNav = () => {
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
            name: 'Ayarlar',
            path: '/profil/ayarlarim',
            icon: <IoSettings className="text-xl" />
        },
        {
            name: "Sosyal",
            path: "/profil/sosyal",
            icon: <IoPeople className="text-xl" />
        }
    ];

    return (
        <div className="flex flex-col gap-2 mb-8 w-full">
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
    )
}

export default ProfileNav;
