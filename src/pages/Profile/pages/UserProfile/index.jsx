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
                        <div className="h-48 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-xl " />
                        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-32 h-32 rounded-full border-4 border-zinc-900"
                            />
                        </div>

                        {/* Arkadaşlık Butonu */}
                        <div className="absolute top-4 right-4">
                            {friendStatus === 'none' && (
                                <button
                                    onClick={handleFriendAction}
                                    className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm font-medium"
                                >
                                    <IoPersonAdd className="text-lg" />
                                    Arkadaş Ekle
                                </button>
                            )}
                            {friendStatus === 'pending' && (
                                <button className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded-lg text-sm">
                                    İstek Gönderildi
                                </button>
                            )}
                            {friendStatus === 'friends' && (
                                <button
                                    onClick={handleFriendAction}
                                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm"
                                >
                                    <IoCheckmark className="text-lg" />
                                    Arkadaşsınız
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Profil Bilgileri */}
                    <div className="mt-20 space-y-6">
                        <div>
                            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                            <p className="text-zinc-400">@{user.username}</p>
                            <p className="mt-2 text-white">{user.bio}</p>
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
                                {user.achievements.map(achievement => (
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
            </Container>
        </div>
    );
};

export default UserProfile; 