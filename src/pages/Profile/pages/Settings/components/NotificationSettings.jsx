import { IoNotificationsOutline } from 'react-icons/io5';

const NotificationSettings = ({ notifications, setNotifications }) => {
    return (
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
    );
};

export default NotificationSettings; 