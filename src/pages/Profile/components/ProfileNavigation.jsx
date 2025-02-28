import { NavLink } from 'react-router-dom';
import { IoCalendarOutline, IoBarbell, IoSettingsOutline, IoHomeOutline } from "react-icons/io5";

const ProfileNav = () => {
    const navItems = [
        {
            name: 'Genel Bakış',
            path: '/profil',
            icon: <IoHomeOutline className="text-lg" />,
            exact: true
        },
        {
            name: 'Günlük',
            path: '/profil/gunluk',
            icon: <IoCalendarOutline className="text-lg" />
        },
        {
            name: 'Antrenman Programlarım',
            path: '/profil/antreman-programlarim',
            icon: <IoBarbell className="text-lg" />
        },
        {
            name: 'Ayarlar',
            path: '/profil/ayarlarim',
            icon: <IoSettingsOutline className="text-lg" />
        }
    ];

    return (
        <div className="flex flex-wrap gap-4 mb-8">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-5 py-3 ${isActive ? 'bg-amber-500 text-black' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                        } rounded-md transition-all text-sm font-medium min-w-[180px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]`
                    }
                >
                    {item.icon}
                    {item.name}
                </NavLink>
            ))}
        </div>
    )
}

export default ProfileNav;
