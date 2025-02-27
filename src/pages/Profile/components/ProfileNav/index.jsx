import { IoCalendarOutline, IoBarbell, IoSettingsOutline } from "react-icons/io5";

const ProfileNav = () => {
    return (
        <div className="flex flex-wrap gap-4 mb-8">
            <button className="flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-all text-sm font-medium min-w-[180px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
                <IoCalendarOutline className="text-lg" />
                Günlük
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-all text-sm font-medium min-w-[180px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
                <IoBarbell className="text-lg" />
                Antrenman Programlarım
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-all text-sm font-medium min-w-[180px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
                <IoSettingsOutline className="text-lg" />
                Ayarlar
            </button>
        </div>
    )
}

export default ProfileNav
