import Modal from '../../../../../components/shared/Modal';
import { IoBarbell } from 'react-icons/io5';

const AddExerciseModal = ({ isOpen, setIsOpen, onAdd }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        onAdd({
            id: Date.now(),
            name: formData.get('name'),
            sets: parseInt(formData.get('sets')),
            reps: formData.get('reps'),
            weight: formData.get('weight'),
            notes: formData.get('notes')
        });

        setIsOpen(false);
        e.target.reset();
    };

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Yeni Hareket Ekle"
        >
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="flex items-center gap-4 text-zinc-400">
                    <IoBarbell className="text-3xl" />
                    <div>
                        <h3 className="text-white font-medium">Hareket Detayları</h3>
                        <p className="text-sm">Antrenman programına yeni bir hareket ekleyin.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">
                            Hareket Adı
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Örn: Bench Press"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">
                            Başlangıç Ağırlığı (kg)
                        </label>
                        <input
                            type="number"
                            name="weight"
                            className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Örn: 60"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">
                            Set Sayısı
                        </label>
                        <select
                            name="sets"
                            required
                            className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm text-zinc-400">
                            Tekrar Aralığı
                        </label>
                        <select
                            name="reps"
                            required
                            className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="5">5</option>
                            <option value="8-10">8-10</option>
                            <option value="10-12">10-12</option>
                            <option value="12-15">12-15</option>
                            <option value="15-20">15-20</option>
                            <option value="Maksimum">Maksimum</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="block text-sm text-zinc-400">
                        Notlar (İsteğe bağlı)
                    </label>
                    <textarea
                        name="notes"
                        rows="2"
                        className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Hareket hakkında notlar..."
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
                        Hareketi Ekle
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddExerciseModal; 