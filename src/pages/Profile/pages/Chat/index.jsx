import { useState, useEffect } from 'react';
import { IoSend, IoEllipsisVertical, IoAdd } from 'react-icons/io5';
import Container from '../../../../components/shared/Container';
import Navbar from '../../../../components/Navbar';
import Modal from '../../../../components/shared/Modal';
import ProfileNavigation from '../../components/ProfileNavigation'

function Chat() {
    const [selectedChat, setSelectedChat] = useState(null);
    const [message, setMessage] = useState('');
    const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [friends, setFriends] = useState([
        {
            id: 1,
            name: 'Ahmet Yılmaz',
            avatar: 'https://i.pravatar.cc/150?img=1',
            lastSeen: 'Çevrimiçi'
        },
        {
            id: 2,
            name: 'Mehmet Demir',
            avatar: 'https://i.pravatar.cc/150?img=2',
            lastSeen: '10 dk önce'
        },
        // Daha fazla arkadaş eklenebilir
    ]);
    const [isMobileListVisible, setIsMobileListVisible] = useState(true);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!message.trim() || !selectedChat) return;

        const newMessage = {
            id: Date.now(),
            text: message,
            sender: 'me',
            timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        };

        setConversations(conversations.map(conv =>
            conv.id === selectedChat.id
                ? { ...conv, messages: [...conv.messages, newMessage], lastMessage: message }
                : conv
        ));

        setMessage('');
    };

    const handleNewMessage = () => {
        if (!selectedFriend) return;

        // Seçilen arkadaşla mevcut bir sohbet var mı kontrol et
        const existingChat = conversations.find(conv => conv.user.id === selectedFriend.id);

        if (existingChat) {
            setSelectedChat(existingChat);
        } else {
            // Yeni sohbet oluştur
            const newChat = {
                id: Date.now(),
                user: selectedFriend,
                messages: [],
                lastMessage: '',
                unread: 0
            };
            setConversations([...conversations, newChat]);
            setSelectedChat(newChat);
        }

        setIsNewMessageModalOpen(false);
        setSelectedFriend(null);
    };

    // Mobil görünümde sohbet seçildiğinde listeyi gizle
    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
        setIsMobileListVisible(false);
    };

    // Mobil görünümde geri butonu için
    const handleBack = () => {
        setIsMobileListVisible(true);
        setSelectedChat(null);
    };

    return (
        <div className="min-h-screen pb-10">
            <Navbar />
            <Container>
                <ProfileNavigation />
                <div className="h-[calc(100vh-64px)]">
                    <div className="flex h-full bg-zinc-800/80 rounded-lg">
                        {/* Sol taraf - Sohbet listesi */}
                        <div className={`w-full md:w-1/3 border-r border-zinc-700 ${!isMobileListVisible && 'hidden md:block'
                            }`}>
                            <div className="p-4 flex items-center justify-between border-b border-zinc-700">
                                <h2 className="text-xl font-semibold text-white">Mesajlar</h2>
                                <button
                                    onClick={() => setIsNewMessageModalOpen(true)}
                                    className="p-2 hover:bg-zinc-700 rounded-full text-white transition-colors"
                                >
                                    <IoAdd size={24} />
                                </button>
                            </div>
                            <div className="overflow-y-auto h-[calc(100%-73px)]">
                                {conversations.map(conv => (
                                    <div
                                        key={conv.id}
                                        onClick={() => handleChatSelect(conv)}
                                        className={`flex items-center p-4 hover:bg-zinc-800 cursor-pointer ${selectedChat?.id === conv.id ? 'bg-zinc-800' : ''
                                            }`}
                                    >
                                        <img
                                            src={conv.user.avatar}
                                            alt={conv.user.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="ml-4 flex-1">
                                            <div className="flex justify-between">
                                                <h3 className="font-semibold text-white">{conv.user.name}</h3>
                                                {conv.unread > 0 && (
                                                    <span className="bg-[#FF9500] text-white px-2 rounded-full text-sm">
                                                        {conv.unread}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-400 text-sm truncate">{conv.lastMessage}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sağ taraf - Mesajlaşma alanı */}
                        {selectedChat ? (
                            <div className={`flex-1 flex flex-col ${isMobileListVisible && 'hidden md:flex'
                                }`}>
                                <div className="p-4 border-b border-zinc-700 flex items-center justify-between">
                                    <div className="flex items-center">
                                        {/* Mobil için geri butonu */}
                                        <button
                                            onClick={handleBack}
                                            className="mr-2 p-2 rounded-full hover:bg-zinc-700 text-white md:hidden"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        <img
                                            src={selectedChat.user.avatar}
                                            alt={selectedChat.user.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div className="ml-3">
                                            <h3 className="font-semibold text-white">{selectedChat.user.name}</h3>
                                            <p className="text-sm text-gray-400">{selectedChat.user.lastSeen}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {selectedChat.messages.map(msg => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[85%] md:max-w-[70%] p-3 rounded-lg ${msg.sender === 'me'
                                                    ? 'bg-[#FF9500] text-white'
                                                    : 'bg-zinc-800 text-white'
                                                    }`}
                                            >
                                                <p className="break-words">{msg.text}</p>
                                                <span className={`text-xs ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-400'
                                                    } block mt-1`}>
                                                    {msg.timestamp}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 border-t border-zinc-700">
                                    <form onSubmit={handleSendMessage}>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="text"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Bir mesaj yazın..."
                                                className="flex-1 p-3 bg-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF9500] text-white placeholder-gray-500"
                                            />
                                            <button
                                                type="submit"
                                                className="p-3 bg-[#FF9500] text-white rounded-lg hover:bg-[#FF9500]/90 transition-colors"
                                            >
                                                <IoSend size={20} />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <div className={`flex-1 flex items-center justify-center text-gray-400 ${isMobileListVisible && 'hidden md:flex'
                                }`}>
                                Sohbet başlatmak için sol taraftan bir kişi seçin veya yeni mesaj oluşturun
                            </div>
                        )}
                    </div>
                </div>
            </Container>

            {/* Yeni Mesaj Modalı */}
            <Modal
                isOpen={isNewMessageModalOpen}
                setIsOpen={() => {
                    setIsNewMessageModalOpen(false);
                    setSelectedFriend(null);
                }}
                title="Yeni Mesaj"
            >
                <div className="space-y-4">
                    <div className="space-y-4">
                        {friends.map(friend => (
                            <div
                                key={friend.id}
                                onClick={() => setSelectedFriend(friend)}
                                className={`flex items-center p-4 rounded-lg cursor-pointer ${selectedFriend?.id === friend.id
                                    ? 'bg-[#FF9500]/10'
                                    : 'hover:bg-zinc-800'
                                    }`}
                            >
                                <img
                                    src={friend.avatar}
                                    alt={friend.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div className="ml-4">
                                    <h3 className="font-semibold text-white">{friend.name}</h3>
                                    <p className="text-sm text-gray-400">{friend.lastSeen}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                        <button
                            onClick={() => {
                                setIsNewMessageModalOpen(false);
                                setSelectedFriend(null);
                            }}
                            className="px-4 py-2 text-white hover:bg-zinc-700 rounded-lg transition-colors"
                        >
                            İptal
                        </button>
                        <button
                            onClick={handleNewMessage}
                            disabled={!selectedFriend}
                            className={`px-4 py-2 rounded-lg transition-colors ${selectedFriend
                                ? 'bg-[#FF9500] text-white hover:bg-[#FF9500]/90'
                                : 'bg-zinc-700 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Mesaj Başlat
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Chat;
