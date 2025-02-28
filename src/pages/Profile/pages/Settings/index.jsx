import Navbar from '../../../../components/Navbar';
import Container from '../../../../components/shared/Container'
import ProfileNavigation from '../../components/ProfileNavigation'
import { useState } from 'react';
import { IoPersonOutline, IoNotificationsOutline, IoLockClosedOutline, IoTrashOutline, IoSave, IoClose } from 'react-icons/io5';

const Settings = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        height: 180,
        weight: 80,
        birthDate: '1990-01-01',
        gender: 'male'
    });

    const [notifications, setNotifications] = useState({
        email: true,
        workout: true,
        progress: false,
        news: false
    });

    const [bio, setBio] = useState('Fitness tutkunu | 3 yıllık deneyim');
    const [isEditing, setIsEditing] = useState(false);
    const [tempBio, setTempBio] = useState(bio);

    const handleUserUpdate = (e) => {
        e.preventDefault();
        // API çağrısı yapılacak
        console.log('Kullanıcı bilgileri güncellendi');
    };

    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        // API çağrısı yapılacak
        console.log('Şifre güncellendi');
    };

    const handleDeleteAccount = () => {
        if (window.confirm('Hesabınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.')) {
            // API çağrısı yapılacak
            console.log('Hesap silindi');
        }
    };

    const handleSave = async () => {
        try {
            // API çağrısı yapılacak
            // await updateBio(tempBio);
            setBio(tempBio);
            setIsEditing(false);
        } catch (error) {
            console.error('Bio güncellenirken hata oluştu:', error);
        }
    };

    const handleCancel = () => {
        setTempBio(bio);
        setIsEditing(false);
    };

    return (
        <div>
            <Navbar />
            <Container>
                <ProfileNavigation />

                <div className="mx-auto space-y-8  pb-10">
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

                    {/* Bildirim Ayarları */}
                    <div className="bg-zinc-800/50 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <IoNotificationsOutline className="text-2xl text-amber-500" />
                            <div>
                                <h2 className="text-lg text-white font-medium">Bildirim Ayarları</h2>
                                <p className="text-sm text-zinc-400">Bildirim tercihlerinizi yönetin</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {Object.entries(notifications).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between py-2">
                                    <div>
                                        <h3 className="text-white font-medium capitalize">
                                            {key === 'email' ? 'E-posta Bildirimleri' :
                                                key === 'workout' ? 'Antrenman Hatırlatıcıları' :
                                                    key === 'progress' ? 'İlerleme Raporları' : 'Haberler ve Güncellemeler'}
                                        </h3>
                                        <p className="text-sm text-zinc-400">
                                            {key === 'email' ? 'Önemli güncellemeler hakkında e-posta al' :
                                                key === 'workout' ? 'Planlanan antrenmanlar için hatırlatıcılar' :
                                                    key === 'progress' ? 'Haftalık ilerleme raporları' : 'Yeni özellikler ve güncellemeler'}
                                        </p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={value}
                                            onChange={() => setNotifications({ ...notifications, [key]: !value })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Şifre Değiştirme */}
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
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <IoTrashOutline className="text-2xl text-red-500" />
                            <div>
                                <h2 className="text-lg text-white font-medium">Hesabı Sil</h2>
                                <p className="text-sm text-zinc-400">Hesabınızı kalıcı olarak silin</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-zinc-400">
                                Bu işlem geri alınamaz. Tüm verileriniz kalıcı olarak silinecektir.
                            </p>
                            <button
                                onClick={handleDeleteAccount}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm font-medium"
                            >
                                Hesabı Sil
                            </button>
                        </div>
                    </div>

                    {/* Bio Düzenleme */}
                    <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/30">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-white">Hakkımda</h3>
                                {!isEditing && (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="text-sm text-amber-500 hover:text-amber-400"
                                    >
                                        Düzenle
                                    </button>
                                )}
                            </div>

                            {isEditing ? (
                                <div className="space-y-4">
                                    <textarea
                                        value={tempBio}
                                        onChange={(e) => setTempBio(e.target.value)}
                                        placeholder="Kendinizden bahsedin..."
                                        maxLength={150}
                                        className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                                        rows={4}
                                    />
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-zinc-400">
                                            {tempBio.length}/150 karakter
                                        </p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleCancel}
                                                className="flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg text-sm"
                                            >
                                                <IoClose className="text-lg" />
                                                İptal
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm font-medium"
                                            >
                                                <IoSave className="text-lg" />
                                                Kaydet
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-zinc-300">{bio}</p>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Settings 