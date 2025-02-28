import Modal from "../../../../components/shared/Modal"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ExercisesViewModal = ({ isViewModalOpen, setIsViewModalOpen, selectedExercise }) => {

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
    )
}

export default ExercisesViewModal
