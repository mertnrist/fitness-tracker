import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoBarbell, IoPeople, IoCalendar, IoTrophy, IoPersonAdd, IoCheckmark } from 'react-icons/io5';
import Container from '../../../../components/shared/Container';
import Navbar from '../../../../components/Navbar';

const UserProfile = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [friendStatus, setFriendStatus] = useState('none'); // none, pending, friends

    // Örnek veri
    useEffect(() => {
        setUser({
            name: 'Mehmet Kaya',
            username: 'mehmet.k',
            avatar: 'https://i.pravatar.cc/150?img=3',
            bio: 'Powerlifting & Calisthenics',
            stats: {
                workouts: 234,
                friends: 67,
                programs: 12
            },
            achievements: [
                { id: 1, title: '200 Antrenman', icon: '🏋️‍♂️', date: '2024-01-10' },
                { id: 2, title: '120kg Deadlift', icon: '💪', date: '2024-01-25' }
            ]
        });
        setFriendStatus('none');
    }, [username]);

    if (!user) return null;

    const handleFriendAction = () => {
        switch (friendStatus) {
            case 'none':
                setFriendStatus('pending');
                break;
            case 'friends':
                setFriendStatus('none');
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Navbar />
            <Container>
                <div className="space-y-8 pb-10">
                    {/* Profil Başlığı */}
                    <div className="relative">
                        <div className="h-32 md:h-48 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-xl" />
                        <div className="absolute -bottom-12 md:-bottom-16 left-4 md:left-8 flex items-end gap-6">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-zinc-900"
                            />
                        </div>

                        {/* Arkadaşlık Butonu */}
                        <div className="absolute top-2 md:top-4 right-2 md:right-4">
                            {friendStatus === 'none' && (
                                <button
                                    onClick={handleFriendAction}
                                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-xs md:text-sm font-medium"
                                >
                                    <IoPersonAdd className="text-base md:text-lg" />
                                    Arkadaş Ekle
                                </button>
                            )}
                            {friendStatus === 'pending' && (
                                <button className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-zinc-700 text-white rounded-lg text-xs md:text-sm">
                                    İstek Gönderildi
                                </button>
                            )}
                            {friendStatus === 'friends' && (
                                <button
                                    onClick={handleFriendAction}
                                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-green-500 text-white rounded-lg text-xs md:text-sm"
                                >
                                    <IoCheckmark className="text-base md:text-lg" />
                                    Arkadaşsınız
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Profil Bilgileri */}
                    <div className="mt-16 md:mt-20 space-y-4 md:space-y-6">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-white">{user.name}</h1>
                            <p className="text-sm md:text-base text-zinc-400">@{user.username}</p>
                            <p className="mt-2 text-sm md:text-base text-white">{user.bio}</p>
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
                                {user.achievements.map(achievement => (
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
            </Container>
        </div>
    );
};

export default UserProfile; 