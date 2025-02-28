import { useState } from 'react';
import { IoAdd, IoTrashOutline } from 'react-icons/io5';
import Modal from '../../../../../components/shared/Modal';
import AddExerciseModal from './AddExerciseModal';

const EditProgramModal = ({ isOpen, setIsOpen, program }) => {
    if (!program) return null;

    const daysOfWeek = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

    // Başlangıç verisi
    const [workoutDays, setWorkoutDays] = useState([
        {
            id: 1,
            day: 'Pazartesi',
            name: 'Push Day',
            exercises: [
                { id: 1, name: 'Bench Press', sets: 4, reps: '8-12' },
                { id: 2, name: 'Shoulder Press', sets: 3, reps: '10-12' }
            ]
        },
        {
            id: 2,
            day: 'Çarşamba',
            name: 'Pull Day',
            exercises: [
                { id: 3, name: 'Deadlift', sets: 4, reps: '6-8' },
                { id: 4, name: 'Barbell Row', sets: 3, reps: '8-10' }
            ]
        }
    ]);

    const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false);
    const [selectedDayId, setSelectedDayId] = useState(null);

    // Hareket ekleme
    const handleAddExercise = (dayId) => {
        setSelectedDayId(dayId);
        setIsAddExerciseModalOpen(true);
    };

    const handleExerciseAdd = (exercise) => {
        setWorkoutDays(prevDays => prevDays.map(day => {
            if (day.id === selectedDayId) {
                return {
                    ...day,
                    exercises: [...day.exercises, exercise]
                };
            }
            return day;
        }));
    };

    // Hareket silme
    const handleDeleteExercise = (dayId, exerciseId) => {
        if (!confirm('Bu hareketi silmek istediğinize emin misiniz?')) return;

        setWorkoutDays(prevDays => prevDays.map(day => {
            if (day.id === dayId) {
                return {
                    ...day,
                    exercises: day.exercises.filter(ex => ex.id !== exerciseId)
                };
            }
            return day;
        }));
    };

    // Gün ekleme
    const handleAddDay = () => {
        const newDay = {
            id: Date.now(),
            day: daysOfWeek[0],
            name: 'Yeni Antrenman',
            exercises: []
        };
        setWorkoutDays(prev => [...prev, newDay]);
    };

    // Gün silme
    const handleDeleteDay = (dayId) => {
        if (!confirm('Bu antrenman gününü silmek istediğinize emin misiniz?')) return;
        setWorkoutDays(prev => prev.filter(day => day.id !== dayId));
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={program ? "Programı Düzenle" : "Yeni Program Oluştur"}
                size="fullscreen"
            >
                <div className="space-y-6 p-6">
                    {/* Program bilgileri */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1">Program Adı</label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    defaultValue={program.name}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1">Durum</label>
                                <select
                                    className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    defaultValue={program.status}
                                >
                                    <option value="active">Aktif</option>
                                    <option value="draft">Taslak</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1">Açıklama</label>
                            <textarea
                                className="w-full bg-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                rows="2"
                                defaultValue={program.description}
                            />
                        </div>
                    </div>

                    {/* Antrenman günleri */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between top-0 py-4 z-10">
                            <h3 className="text-lg text-white font-medium">Antrenman Günleri</h3>
                            <button
                                onClick={handleAddDay}
                                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors text-sm"
                            >
                                <IoAdd className="text-lg" />
                                Gün Ekle
                            </button>
                        </div>

                        <div className="space-y-4">
                            {workoutDays.map((workoutDay) => (
                                <div key={workoutDay.id} className="bg-zinc-800/50 rounded-lg p-4 space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <div className="flex flex-col sm:flex-row gap-2 sm:items-center w-full sm:w-auto">
                                            <select
                                                className="w-full sm:w-auto bg-zinc-700 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                                                value={workoutDay.day}
                                                onChange={(e) => {
                                                    setWorkoutDays(prev => prev.map(day =>
                                                        day.id === workoutDay.id
                                                            ? { ...day, day: e.target.value }
                                                            : day
                                                    ));
                                                }}
                                            >
                                                {daysOfWeek.map(d => (
                                                    <option key={d} value={d}>{d}</option>
                                                ))}
                                            </select>
                                            <input
                                                type="text"
                                                placeholder="Antrenman adı"
                                                className="w-full sm:w-auto bg-zinc-700 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                                                value={workoutDay.name}
                                                onChange={(e) => {
                                                    setWorkoutDays(prev => prev.map(day =>
                                                        day.id === workoutDay.id
                                                            ? { ...day, name: e.target.value }
                                                            : day
                                                    ));
                                                }}
                                            />
                                        </div>
                                        <button
                                            onClick={() => handleDeleteDay(workoutDay.id)}
                                            className="text-zinc-400 hover:text-red-500 transition-colors"
                                        >
                                            <IoTrashOutline className="text-lg" />
                                        </button>
                                    </div>

                                    {/* Hareketler */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm text-zinc-400">Hareketler</h4>
                                            <button
                                                onClick={() => handleAddExercise(workoutDay.id)}
                                                className="text-xs text-amber-500 hover:text-amber-400"
                                            >
                                                + Hareket Ekle
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                            {workoutDay.exercises.map((exercise) => (
                                                <div
                                                    key={exercise.id}
                                                    className="flex items-center justify-between bg-zinc-700/50 rounded px-3 py-2 group"
                                                >
                                                    <div>
                                                        <span className="text-sm text-white">{exercise.name}</span>
                                                        <span className="text-xs text-zinc-400 ml-2">
                                                            {exercise.sets}x{exercise.reps}
                                                        </span>
                                                    </div>
                                                    <button
                                                        onClick={() => handleDeleteExercise(workoutDay.id, exercise.id)}
                                                        className="text-zinc-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                                    >
                                                        <IoTrashOutline />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="sticky bottom-0 pt-4 mt-8 border-t border-zinc-800 bg-zinc-900">
                        <div className="flex justify-end gap-2">
                            <button
                                className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors text-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                İptal
                            </button>
                            <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors text-sm font-medium">
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            <AddExerciseModal
                isOpen={isAddExerciseModalOpen}
                setIsOpen={setIsAddExerciseModalOpen}
                onAdd={handleExerciseAdd}
            />
        </>
    );
};

export default EditProgramModal; 