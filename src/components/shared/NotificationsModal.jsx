import { useState } from 'react';
import { IoCheckmark, IoClose, IoTime } from 'react-icons/io5';

const NotificationsModal = ({ isOpen, onClose }) => {
    const [notifications] = useState([
        {
            id: 1,
            type: 'friend_request',
            message: 'Ahmet Yılmaz arkadaşlık isteği gönderdi',
            time: '5 dk önce',
            isRead: false
        },
        {
            id: 2,
            type: 'workout',
            message: 'Bugünkü antrenmanınızı tamamlamayı unutmayın',
            time: '2 saat önce',
            isRead: true
        }
    ]);

    if (!isOpen) return null;

    return (
        <div className="absolute top-[120%] right-0 w-80 bg-zinc-800 rounded-xl shadow-lg border border-zinc-700/30 overflow-hidden z-[9999]">
            <div className="p-4 border-b border-zinc-700/30 flex justify-between items-center">
                <h3 className="font-medium text-white">Bildirimler</h3>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-zinc-700/50 rounded-lg transition-colors"
                >
                    <IoClose className="text-lg" />
                </button>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
                {notifications.length > 0 ? (
                    <div className="divide-y divide-zinc-700/30">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-4 hover:bg-zinc-700/30 transition-colors ${!notification.isRead ? 'bg-zinc-700/10' : ''
                                    }`}
                            >
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        {/* Bildirim ikonu */}
                                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                                            <IoTime className="text-amber-500" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-white">{notification.message}</p>
                                        <p className="text-xs text-zinc-400 mt-1">{notification.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-4 text-center text-zinc-400 text-sm">
                        Bildirim bulunmuyor
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotificationsModal; 