import Modal from '../../../../../components/shared/Modal';
import { IoScale } from 'react-icons/io5';

const AddMeasurementModal = ({ isOpen, setIsOpen }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form işlemleri
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Yeni Ölçüm Ekle"
            size="fullscreen"
        >
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="flex items-center gap-4 text-zinc-400">
                    <IoScale className="text-3xl" />
                    <div>
                        <h3 className="text-white font-medium">Ölçüm Detayları</h3>
                        <p className="text-sm">Yeni vücut ölçümlerinizi girin.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">
                            Vücut Ağırlığı (kg)
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Örn: 75.5"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">
                            Yağ Oranı (%)
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Örn: 15.5"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">
                            Kas Kütlesi (kg)
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Örn: 65.5"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">
                            Tarih
                        </label>
                        <input
                            type="date"
                            className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="block text-sm text-zinc-400">
                        Notlar (İsteğe bağlı)
                    </label>
                    <textarea
                        rows="2"
                        className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Ölçümlerle ilgili notlarınız..."
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors text-sm"
                    >
                        İptal
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors text-sm font-medium"
                    >
                        Kaydet
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddMeasurementModal; 