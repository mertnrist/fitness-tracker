import { useState } from 'react';
import Modal from '../../../../../components/shared/Modal';
import { IoBarbell } from 'react-icons/io5';

const CreateProgramModal = ({ isOpen, setIsOpen, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        duration: '60-90 dk'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setFormData({
            name: '',
            description: '',
            duration: '60-90 dk'
        });
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Yeni Program Oluştur"
            size="fullscreen"
        >
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Program Bilgileri */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-zinc-400">
                        <IoBarbell className="text-3xl" />
                        <div>
                            <h3 className="text-white font-medium">Program Detayları</h3>
                            <p className="text-sm">Yeni antrenman programınızın temel bilgilerini girin.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Program Adı</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Örn: Push Pull Legs"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Açıklama</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 h-24 resize-none"
                                placeholder="Program hakkında kısa bir açıklama yazın..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Antrenman Süresi</label>
                            <select
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            >
                                <option value="30-45 dk">30-45 dakika</option>
                                <option value="45-60 dk">45-60 dakika</option>
                                <option value="60-90 dk">60-90 dakika</option>
                                <option value="90+ dk">90+ dakika</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Form Butonları */}
                <div className="flex justify-end gap-2 pt-4 border-t border-zinc-800">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
                    >
                        İptal
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors font-medium"
                    >
                        Programı Oluştur
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default CreateProgramModal; 