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
        <>
            <div className="space-y-8 pb-10">
                {/* Profil Başlığı */}
                <div className="relative">
                    {/* Kapak Fotoğrafı */}
                    <div className="h-32 md:h-48 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl relative">
                        <button
                            onClick={() => setIsCoverPhotoModalOpen(true)}
                            className="absolute bottom-2 md:bottom-4 right-2 md:right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
                        >
                            <IoCamera className="text-xl" />
                        </button>
                    </div>

                    {/* Profil Fotoğrafı ve Bilgiler */}
                    <div className="absolute -bottom-12 md:-bottom-16 left-4 md:left-8 flex items-end gap-6">
                        <div className="relative">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-zinc-900"
                            />
                            <button
                                onClick={() => setIsProfilePhotoModalOpen(true)}
                                className="absolute bottom-0 right-0 p-1.5 md:p-2 bg-amber-500 hover:bg-amber-600 rounded-full text-black transition-colors"
                            >
                                <IoCamera className="text-base md:text-lg" />
                            </button>
                        </div>
                    </div>

                    {/* Ayarlar Butonu */}
                    <button
                        onClick={() => navigate('/profil/ayarlarim')}
                        className="absolute top-2 md:top-4 right-2 md:right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
                    >
                        <IoSettings className="text-xl" />
                    </button>
                </div>

                {/* Profil Bilgileri */}
                <div className="mt-16 md:mt-20 space-y-4 md:space-y-6">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-white">{user.name}</h1>
                        <p className="text-sm md:text-base text-zinc-400">@{user.username}</p>

                        {/* Bio Düzenleme Alanı */}
                        <div className="mt-3 md:mt-4">
                            {isEditingBio ? (
                                <div className="space-y-2 md:space-y-3">
                                    <textarea
                                        value={tempBio}
                                        onChange={(e) => setTempBio(e.target.value)}
                                        placeholder="Kendinizden bahsedin..."
                                        maxLength={150}
                                        className="w-full bg-zinc-800/50 border border-zinc-700/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                                        rows={3}
                                    />
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                                        <p className="text-xs md:text-sm text-zinc-400">
                                            {tempBio.length}/150 karakter
                                        </p>
                                        <div className="flex gap-2 w-full md:w-auto">
                                            <button
                                                onClick={handleCancelBio}
                                                className="flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg text-sm"
                                            >
                                                <IoClose className="text-lg" />
                                                İptal
                                            </button>
                                            <button
                                                onClick={handleSaveBio}
                                                className="flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm font-medium"
                                            >
                                                <IoSave className="text-lg" />
                                                Kaydet
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="group relative">
                                    <p className="text-sm md:text-base text-white pr-8">{user.bio}</p>
                                    <button
                                        onClick={() => setIsEditingBio(true)}
                                        className="absolute right-0 top-0 p-1.5 bg-zinc-800/50 hover:bg-zinc-700 rounded-lg text-zinc-400 hover:text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                                    >
                                        <IoPencil className="text-xs md:text-sm" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* İstatistikler */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                        <div className="bg-zinc-800/50 rounded-xl p-3 md:p-4 border border-zinc-700/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 md:gap-2 text-amber-500">
                                    <IoBarbell className="text-lg md:text-xl" />
                                    <span className="text-xs md:text-sm">Antrenmanlar</span>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-white">{user.stats.workouts}</p>
                            </div>
                        </div>

                        <div className="bg-zinc-800/50 rounded-xl p-3 md:p-4 border border-zinc-700/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 md:gap-2 text-amber-500">
                                    <IoPeople className="text-lg md:text-xl" />
                                    <span className="text-xs md:text-sm">Arkadaşlar</span>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-white">{user.stats.friends}</p>
                            </div>
                        </div>

                        <div className="bg-zinc-800/50 rounded-xl p-3 md:p-4 border border-zinc-700/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 md:gap-2 text-amber-500">
                                    <IoCalendar className="text-lg md:text-xl" />
                                    <span className="text-xs md:text-sm">Programlar</span>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-white">{user.stats.programs}</p>
                            </div>
                        </div>
                    </div>

                    {/* Başarılar */}
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                            <IoTrophy className="text-amber-500" />
                            Başarılar
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                            {achievements.map(achievement => (
                                <div
                                    key={achievement.id}
                                    className="bg-zinc-800/50 rounded-xl p-3 md:p-4 border border-zinc-700/30"
                                >
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <span className="text-xl md:text-2xl">{achievement.icon}</span>
                                        <div>
                                            <p className="text-sm md:text-base font-medium text-white">{achievement.title}</p>
                                            <p className="text-xs md:text-sm text-zinc-400">{achievement.date}</p>
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
        </>
    );
};

export default MyProfile; 