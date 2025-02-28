import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSettings, IoCamera, IoTrophy, IoPeople, IoBarbell, IoCalendar, IoSave, IoClose, IoPencil } from 'react-icons/io5';
import Container from '../../../../components/shared/Container';
import Navbar from '../../../../components/Navbar';
import ProfileNavigation from '../../components/ProfileNavigation';
import ChangePhotoModal from './components/ChangePhotoModal';

const MyProfile = () => {
    const navigate = useNavigate();
    const [user] = useState({
        name: 'Ahmet Yılmaz',
        username: 'ahmet123',
        avatar: 'https://i.pravatar.cc/150?img=1',
        bio: 'Fitness tutkunu | 3 yıllık deneyim',
        stats: {
            workouts: 156,
            friends: 45,
            programs: 8
        }
    });

    const [isEditingBio, setIsEditingBio] = useState(false);
    const [tempBio, setTempBio] = useState(user.bio);

    const handleSaveBio = async () => {
        try {
            // API çağrısı yapılacak
            // await updateBio(tempBio);
            user.bio = tempBio;
            setIsEditingBio(false);
        } catch (error) {
            console.error('Bio güncellenirken hata oluştu:', error);
        }
    };

    const handleCancelBio = () => {
        setTempBio(user.bio);
        setIsEditingBio(false);
    };

    const [achievements] = useState([
        { id: 1, title: '100 Antrenman', icon: '🏋️‍♂️', date: '2024-01-15' },
        { id: 2, title: '50kg Bench Press', icon: '💪', date: '2024-02-01' },
        { id: 3, title: '10 Program', icon: '📋', date: '2024-02-15' }
    ]);

    const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState(false);
    const [isCoverPhotoModalOpen, setIsCoverPhotoModalOpen] = useState(false);

    return (
        <div>
            <Navbar />
            <Container>
                <ProfileNavigation />

                <div className="space-y-8 pb-10">
                    {/* Profil Başlığı */}
                    <div className="relative">
                        {/* Kapak Fotoğrafı */}
                        <div className="h-48 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl relative">
                            <button
                                onClick={() => setIsCoverPhotoModalOpen(true)}
                                className="absolute bottom-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
                            >
                                <IoCamera className="text-xl" />
                            </button>
                        </div>

                        {/* Profil Fotoğrafı ve Bilgiler */}
                        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
                            <div className="relative">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-32 h-32 rounded-full border-4 border-zinc-900"
                                />
                                <button
                                    onClick={() => setIsProfilePhotoModalOpen(true)}
                                    className="absolute bottom-0 right-0 p-2 bg-amber-500 hover:bg-amber-600 rounded-full text-black transition-colors"
                                >
                                    <IoCamera className="text-lg" />
                                </button>
                            </div>
                        </div>

                        {/* Ayarlar Butonu */}
                        <button
                            onClick={() => navigate('/profil/ayarlarim')}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
                        >
                            <IoSettings className="text-xl" />
                        </button>
                    </div>

                    {/* Profil Bilgileri */}
                    <div className="mt-20 space-y-6">
                        <div>
                            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                            <p className="text-zinc-400">@{user.username}</p>

                            {/* Bio Düzenleme Alanı */}
                            <div className="mt-4">
                                {isEditingBio ? (
                                    <div className="space-y-3">
                                        <textarea
                                            value={tempBio}
                                            onChange={(e) => setTempBio(e.target.value)}
                                            placeholder="Kendinizden bahsedin..."
                                            maxLength={150}
                                            className="w-full bg-zinc-800/50 border border-zinc-700/30 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                                            rows={3}
                                        />
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-zinc-400">
                                                {tempBio.length}/150 karakter
                                            </p>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleCancelBio}
                                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg text-sm"
                                                >
                                                    <IoClose className="text-lg" />
                                                    İptal
                                                </button>
                                                <button
                                                    onClick={handleSaveBio}
                                                    className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm font-medium"
                                                >
                                                    <IoSave className="text-lg" />
                                                    Kaydet
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="group relative">
                                        <p className="text-white pr-8">{user.bio}</p>
                                        <button
                                            onClick={() => setIsEditingBio(true)}
                                            className="absolute right-0 top-0 p-1.5 bg-zinc-800/50 hover:bg-zinc-700 rounded-lg text-zinc-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <IoPencil className="text-sm" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* İstatistikler */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/30">
                                <div className="flex items-center gap-2 text-amber-500 mb-2">
                                    <IoBarbell className="text-xl" />
                                    <span className="text-sm">Antrenmanlar</span>
                                </div>
                                <p className="text-2xl font-bold text-white">{user.stats.workouts}</p>
                            </div>

                            <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/30">
                                <div className="flex items-center gap-2 text-amber-500 mb-2">
                                    <IoPeople className="text-xl" />
                                    <span className="text-sm">Arkadaşlar</span>
                                </div>
                                <p className="text-2xl font-bold text-white">{user.stats.friends}</p>
                            </div>

                            <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/30">
                                <div className="flex items-center gap-2 text-amber-500 mb-2">
                                    <IoCalendar className="text-xl" />
                                    <span className="text-sm">Programlar</span>
                                </div>
                                <p className="text-2xl font-bold text-white">{user.stats.programs}</p>
                            </div>
                        </div>

                        {/* Başarılar */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <IoTrophy className="text-amber-500" />
                                Başarılar
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {achievements.map(achievement => (
                                    <div
                                        key={achievement.id}
                                        className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/30"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{achievement.icon}</span>
                                            <div>
                                                <p className="font-medium text-white">{achievement.title}</p>
                                                <p className="text-sm text-zinc-400">{achievement.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modallar */}
                <ChangePhotoModal
                    isOpen={isProfilePhotoModalOpen}
                    setIsOpen={setIsProfilePhotoModalOpen}
                    type="profile"
                />
                <ChangePhotoModal
                    isOpen={isCoverPhotoModalOpen}
                    setIsOpen={setIsCoverPhotoModalOpen}
                    type="cover"
                />
            </Container>
        </div>
    );
};

export default MyProfile; 