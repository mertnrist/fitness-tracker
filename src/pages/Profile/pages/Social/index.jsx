import { useState } from 'react';
import { IoSearch, IoPersonAdd, IoCheckmark, IoClose } from 'react-icons/io5';
import Tabs from '../../../../components/shared/Tabs';

const Social = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('friends'); // friends, requests, suggestions

    // Örnek veriler (gerçek uygulamada API'den gelecek)
    const [friends] = useState([
        { id: 1, name: 'Ahmet Yılmaz', username: 'ahmet123', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, name: 'Ayşe Demir', username: 'ayse.demir', avatar: 'https://i.pravatar.cc/150?img=2' }
    ]);

    const [friendRequests] = useState([
        { id: 3, name: 'Mehmet Kaya', username: 'mehmet.k', avatar: 'https://i.pravatar.cc/150?img=3' }
    ]);

    const [suggestions] = useState([
        { id: 4, name: 'Zeynep Şahin', username: 'zeynep.s', avatar: 'https://i.pravatar.cc/150?img=4' },
        { id: 5, name: 'Can Yıldız', username: 'can.yildiz', avatar: 'https://i.pravatar.cc/150?img=5' }
    ]);

    const tabs_links = [
        {
            id: 'friends',
            label: 'Arkadaşlarım',
            icon: <></>
        },
        {
            id: 'requests',
            label: 'İstekler',
            icon: <></>
        },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'friends':
                return (
                    <>
                        <h2 className="text-xl font-bold text-white">Arkadaşlarım</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {friends.map(friend => (
                                <FriendCard
                                    key={friend.id}
                                    user={friend}
                                    type="friend"
                                />
                            ))}
                        </div>
                    </>
                );
            case 'requests':
                return (
                    <>
                        <h2 className="text-xl font-bold text-white">Arkadaşlık İstekleri</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {friendRequests.map(request => (
                                <FriendCard
                                    key={request.id}
                                    user={request}
                                    type="request"
                                />
                            ))}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="space-y-6">
                {/* Arama Çubuğu */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Kullanıcı ara..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-zinc-800/50 border border-zinc-700/30 rounded-xl px-4 py-3 pl-12 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl" />
                </div>

                <Tabs tabs_links={tabs_links} setActiveTab={setActiveTab} renderContent={renderContent} activeTab={activeTab} />
            </div>
        </>
    );
};

const FriendCard = ({ user, type }) => {
    return (
        <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/30">
            <div className="flex items-center gap-4">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                    <h3 className="font-medium text-white">{user.name}</h3>
                    <p className="text-sm text-zinc-400">@{user.username}</p>
                </div>
                {type === 'friend' && (
                    <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg text-sm">
                        Profili Gör
                    </button>
                )}
                {type === 'request' && (
                    <div className="flex gap-2">
                        <button className="p-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg">
                            <IoCheckmark className="text-xl" />
                        </button>
                        <button className="p-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg">
                            <IoClose className="text-xl" />
                        </button>
                    </div>
                )}
                {type === 'suggestion' && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm">
                        <IoPersonAdd />
                        Ekle
                    </button>
                )}
            </div>
        </div>
    );
};

export default Social; 