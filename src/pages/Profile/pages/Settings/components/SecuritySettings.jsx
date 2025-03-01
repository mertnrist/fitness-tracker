import { IoLockClosedOutline } from 'react-icons/io5';

const SecuritySettings = () => {
    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        console.log('Şifre güncellendi');
    };

    return (
        <div className="bg-zinc-800/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
                <IoLockClosedOutline className="text-2xl text-amber-500" />
                <div>
                    <h2 className="text-lg text-white font-medium">Şifre Değiştir</h2>
                    <p className="text-sm text-zinc-400">Hesap güvenliğinizi güncelleyin</p>
                </div>
            </div>

            <form onSubmit={handlePasswordUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">Mevcut Şifre</label>
                        <input
                            type="password"
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">Yeni Şifre</label>
                        <input
                            type="password"
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors text-sm font-medium">
                        Şifreyi Güncelle
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SecuritySettings; 