import Navbar from '../../components/Navbar'
import Container from '../../components/shared/Container'
import Modal from '../../components/shared/Modal'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IoEyeOutline, IoPencilOutline } from "react-icons/io5";
import ProfileNav from './components/ProfileNav';


const Profile = () => {
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newWeight, setNewWeight] = useState('');
    const [newNotes, setNewNotes] = useState('');
    const [nextWeight, setNextWeight] = useState('');
    const [nextNotes, setNextNotes] = useState('');

    const exercises = [
        {
            id: 1,
            name: "Bench Press",
            sets: 4,
            reps: "8-10",
            history: [
                {
                    date: "2024-10-20",
                    weight: 109,
                    notes: "Son 2 tekrarda zorlandım, form bozuldu"
                },
                {
                    date: "2024-06-20",
                    weight: 108.5,
                    notes: "Son 2 tekrarda zorlandım, form bozuldu"
                },
                {
                    date: "2024-04-20",
                    weight: 108,
                    notes: "Son 2 tekrarda zorlandım, form bozuldu"
                },
                {
                    date: "2024-03-20",
                    weight: 100,
                    notes: "Son 2 tekrarda zorlandım, form bozuldu"
                },
            ]
        },
        {
            id: 2,
            name: "Squat",
            sets: 5,
            reps: "5-5-5",
            history: [
                {
                    date: "2024-03-19",
                    weight: 120,
                    notes: "Isınma setleri çok önemli, kalça esnekliği arttı"
                },
            ]
        },
    ];

    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise);
        setIsViewModalOpen(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        // Burada API çağrısı yapılabilir
        console.log('Yeni kayıt:', {
            exerciseId: selectedExercise?.id,
            currentSession: {
                weight: parseFloat(newWeight),
                notes: newNotes,
                date: new Date().toISOString().split('T')[0]
            },
            nextSession: {
                plannedWeight: parseFloat(nextWeight),
                notes: nextNotes
            }
        });

        setIsEditModalOpen(false);
        setNewWeight('');
        setNewNotes('');
        setNextWeight('');
        setNextNotes('');
    };

    const getSuggestedWeight = (exercise) => {
        if (!exercise?.history?.length) return null;

        const lastWeight = exercise.history[0].weight;
        const increment = lastWeight < 60 ? 2.5 : lastWeight < 100 ? 1.5 : 1;

        return {
            lastWeight,
            suggestedWeight: lastWeight + increment
        };
    };

    const handleEditClick = (exercise) => {
        setSelectedExercise(exercise);
        const suggestion = getSuggestedWeight(exercise);
        if (suggestion) {
            setNewWeight(suggestion.lastWeight.toString());
            setNextWeight(suggestion.suggestedWeight.toString());
        }
        setIsEditModalOpen(true);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}`;
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-zinc-800 p-3 border border-zinc-700 rounded-sm">
                    <p className="text-amber-400">{label}</p>
                    <p className="text-white">{`Ağırlık: ${payload[0].value} kg`}</p>
                    {payload[0].payload.notes && (
                        <p className="text-zinc-400 text-sm mt-1">{payload[0].payload.notes}</p>
                    )}
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <Navbar />
            <Container>
                <ProfileNav />

                <div>
                    <h2 className="text-xl mb-4 text-white ">Pazartesi Antrenman Programı</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-zinc-900 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-zinc-800">
                                    <th className="p-4 text-left text-zinc-400 font-medium border-b border-zinc-700">Hareket</th>
                                    <th className="p-4 text-left text-zinc-400 font-medium border-b border-zinc-700">Set</th>
                                    <th className="p-4 text-left text-zinc-400 font-medium border-b border-zinc-700">Tekrar</th>
                                    <th className="p-4 text-left text-zinc-400 font-medium border-b border-zinc-700">Son Antrenman Notu</th>
                                    <th className="p-4 text-left text-zinc-400 font-medium border-b border-zinc-700">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exercises.map((exercise) => (
                                    <tr
                                        key={exercise.id}
                                        className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 transition-colors"
                                    >
                                        <td className="p-4 text-xl text-white font-extralight">{exercise.name}</td>
                                        <td className="p-4 text-zinc-400">{exercise.sets}</td>
                                        <td className="p-4 text-zinc-400">{exercise.reps}</td>
                                        <td className="p-4 max-w-[300px]">
                                            {exercise.history && exercise.history[0] ? (
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-amber-400 font-medium">
                                                            {exercise.history[0].weight} kg
                                                        </span>
                                                        <span className="text-zinc-500 text-sm">
                                                            {new Date(exercise.history[0].date).toLocaleDateString('tr-TR')}
                                                        </span>
                                                    </div>
                                                    {exercise.history[0].notes && (
                                                        <p className="text-zinc-400 text-sm line-clamp-2">
                                                            {exercise.history[0].notes}
                                                        </p>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-zinc-500 text-sm italic">
                                                    Henüz kayıt yok
                                                </span>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => handleExerciseClick(exercise)}
                                                    className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-amber-400 rounded-md transition-all text-sm font-medium min-w-[100px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                                                >
                                                    <IoEyeOutline className="text-lg" />
                                                    İzle
                                                </button>
                                                <button
                                                    onClick={() => handleEditClick(exercise)}
                                                    className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-amber-400 rounded-md transition-all text-sm font-medium min-w-[100px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                                                >
                                                    <IoPencilOutline className="text-lg" />
                                                    Düzenle
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Modal
                    isOpen={isViewModalOpen}
                    setIsOpen={setIsViewModalOpen}
                    title={`${selectedExercise?.name} - İlerleme`}
                    size="fullscreen"
                >
                    <div className="h-full overflow-y-auto overflow-x-hidden px-4">
                        <div className="min-h-full flex flex-col gap-8 py-4 max-w-full">
                            <div className="h-[400px] md:h-[500px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        data={selectedExercise?.history?.map(record => ({
                                            date: formatDate(record.date),
                                            weight: record.weight,
                                            notes: record.notes
                                        })).reverse()}
                                        margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                                    >
                                        <XAxis
                                            dataKey="date"
                                            stroke="#71717a"
                                            tick={{ fontSize: 14 }}
                                        />
                                        <YAxis
                                            stroke="#71717a"
                                            domain={['dataMin - 5', 'dataMax + 5']}
                                            tick={{ fontSize: 14 }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Line
                                            type="monotone"
                                            dataKey="weight"
                                            stroke="#f59e0b"
                                            strokeWidth={2}
                                            dot={{ fill: '#f59e0b', strokeWidth: 2 }}
                                            activeDot={{ r: 8, fill: '#f59e0b' }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-amber-400 sticky top-0 bg-[#1a1a1a] py-2 z-10">İstatistikler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-zinc-800 p-6 rounded">
                                            <p className="text-zinc-400 text-sm">En Yüksek Ağırlık</p>
                                            <p className="text-3xl font-bold text-amber-400">
                                                {Math.max(...(selectedExercise?.history?.map(r => r.weight) || [0]))} kg
                                            </p>
                                        </div>
                                        <div className="bg-zinc-800 p-6 rounded">
                                            <p className="text-zinc-400 text-sm">Toplam İlerleme</p>
                                            <p className="text-3xl font-bold text-amber-400">
                                                {selectedExercise?.history?.length > 1
                                                    ? `+${(selectedExercise.history[0].weight - selectedExercise.history[selectedExercise.history.length - 1].weight).toFixed(1)}`
                                                    : '0'
                                                } kg
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-amber-400 sticky top-0 bg-[#1a1a1a] py-2 z-10">Son Kayıtlar</h3>
                                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                                        {selectedExercise?.history?.map((record, index) => (
                                            <div key={index} className="bg-zinc-800 p-4 rounded">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-zinc-400">{new Date(record.date).toLocaleDateString('tr-TR')}</span>
                                                    <span className="text-amber-400 font-medium">{record.weight} kg</span>
                                                </div>
                                                {record.notes && (
                                                    <p className="text-zinc-500 text-sm mt-2">{record.notes}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    isOpen={isEditModalOpen}
                    setIsOpen={setIsEditModalOpen}
                    title={`${selectedExercise?.name} - Yeni Kayıt`}
                    size="fullscreen"
                >
                    <div className="h-full overflow-y-auto overflow-x-hidden px-4">
                        <div className="min-h-full flex flex-col py-4 max-w-full">
                            <form onSubmit={handleEditSubmit} className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                                <div className="space-y-6 min-w-0">
                                    <h3 className="text-xl font-semibold text-amber-400 sticky top-0 bg-[#1a1a1a] py-2 z-10">Bugünkü Antrenman</h3>
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-3">
                                            <label className="text-zinc-400 text-lg">Ağırlık (kg)</label>
                                            <div className="flex flex-col gap-2">
                                                <input
                                                    type="number"
                                                    step="0.5"
                                                    value={newWeight}
                                                    onChange={(e) => setNewWeight(e.target.value)}
                                                    className="bg-zinc-800 border border-zinc-700 rounded p-4 text-lg focus:outline-none focus:border-amber-500 w-full"
                                                    placeholder="Örn: 80.5"
                                                    required
                                                />
                                                {selectedExercise?.history?.length > 0 && (
                                                    <span className="text-base text-zinc-500 break-words">
                                                        Son antrenman: {selectedExercise.history[0].weight} kg
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <label className="text-zinc-400 text-lg">Notlar</label>
                                            <textarea
                                                value={newNotes}
                                                onChange={(e) => setNewNotes(e.target.value)}
                                                className="bg-zinc-800 border border-zinc-700 rounded p-4 h-[200px] text-lg focus:outline-none focus:border-amber-500 w-full"
                                                placeholder="Bugünkü antrenman notlarınız..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 min-w-0">
                                    <h3 className="text-xl font-semibold text-amber-400 sticky top-0 bg-[#1a1a1a] py-2 z-10">Sonraki Antrenman Hedefi</h3>
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-3">
                                            <label className="text-zinc-400 text-lg">Hedef Ağırlık (kg)</label>
                                            <div className="flex flex-col gap-2">
                                                <input
                                                    type="number"
                                                    step="0.5"
                                                    value={nextWeight}
                                                    onChange={(e) => setNextWeight(e.target.value)}
                                                    className="bg-zinc-800 border border-zinc-700 rounded p-4 text-lg focus:outline-none focus:border-amber-500 w-full"
                                                    placeholder="Örn: 82.5"
                                                    required
                                                />
                                                {selectedExercise?.history?.length > 0 && (
                                                    <span className="text-base text-zinc-500 break-words">
                                                        Önerilen artış: {getSuggestedWeight(selectedExercise)?.suggestedWeight} kg
                                                        (+{(getSuggestedWeight(selectedExercise)?.suggestedWeight - getSuggestedWeight(selectedExercise)?.lastWeight).toFixed(1)} kg)
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <label className="text-zinc-400 text-lg">Hedef Notları</label>
                                            <textarea
                                                value={nextNotes}
                                                onChange={(e) => setNextNotes(e.target.value)}
                                                className="bg-zinc-800 border border-zinc-700 rounded p-4 h-[200px] text-lg focus:outline-none focus:border-amber-500 w-full"
                                                placeholder="Sonraki antrenman için notlarınız..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <button
                                onClick={handleEditSubmit}
                                className="bg-amber-500 text-black py-4 rounded hover:bg-amber-600 transition-colors font-medium text-lg mt-8 w-full"
                            >
                                Kaydet
                            </button>
                        </div>
                    </div>
                </Modal>

            </Container>
        </>
    )
}

export default Profile
