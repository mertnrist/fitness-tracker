import { IoPersonOutline } from 'react-icons/io5';

const PersonalInfo = ({ user, setUser }) => {
    const handleUserUpdate = (e) => {
        e.preventDefault();
        console.log('Kullanıcı bilgileri güncellendi');
    };

    return (
        <div className="bg-zinc-800/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
                <IoPersonOutline className="text-2xl text-amber-500" />
                <div>
                    <h2 className="text-lg text-white font-medium">Profil Bilgileri</h2>
                    <p className="text-sm text-zinc-400">Kişisel bilgilerinizi güncelleyin</p>
                </div>
            </div>

            <form onSubmit={handleUserUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">Ad Soyad</label>
                        <input
                            type="text"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">E-posta</label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">Boy (cm)</label>
                        <input
                            type="number"
                            value={user.height}
                            onChange={(e) => setUser({ ...user, height: e.target.value })}
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">Kilo (kg)</label>
                        <input
                            type="number"
                            value={user.weight}
                            onChange={(e) => setUser({ ...user, weight: e.target.value })}
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">Doğum Tarihi</label>
                        <input
                            type="date"
                            value={user.birthDate}
                            onChange={(e) => setUser({ ...user, birthDate: e.target.value })}
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">Cinsiyet</label>
                        <select
                            value={user.gender}
                            onChange={(e) => setUser({ ...user, gender: e.target.value })}
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="male">Erkek</option>
                            <option value="female">Kadın</option>
                            <option value="other">Diğer</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors text-sm font-medium">
                        Değişiklikleri Kaydet
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfo; 