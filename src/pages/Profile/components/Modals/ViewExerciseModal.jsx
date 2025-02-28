import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Modal from '../../../../components/shared/Modal';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-zinc-800/95 p-4 border border-zinc-700 rounded-lg shadow-xl backdrop-blur">
                <p className="text-amber-400 font-medium">{label}</p>
                <p className="text-white text-lg font-semibold mt-1">{`${payload[0].value} kg`}</p>
                {payload[0].payload.notes && (
                    <p className="text-zinc-400 text-sm mt-2 max-w-[200px]">{payload[0].payload.notes}</p>
                )}
            </div>
        );
    }
    return null;
};

const ViewExerciseModal = ({ isOpen, setIsOpen, selectedExercise, formatDate }) => {
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={`${selectedExercise?.name} - İlerleme`}
            size="fullscreen"
        >
            <div className="flex flex-col h-full overflow-hidden">
                {/* Üst Kısım - Sabit */}
                <div className="flex-none">
                    {/* İstatistikler */}
                    <div className="grid grid-cols-2 gap-3 p-4">
                        <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                            <p className="text-zinc-400 text-xs uppercase tracking-wider">En Yüksek Ağırlık</p>
                            <p className="text-2xl font-bold text-amber-400 mt-1">
                                {Math.max(...(selectedExercise?.history?.map(r => r.weight) || [0]))} kg
                            </p>
                        </div>
                        <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                            <p className="text-zinc-400 text-xs uppercase tracking-wider">Toplam İlerleme</p>
                            <p className="text-2xl font-bold text-amber-400 mt-1">
                                {selectedExercise?.history?.length > 1
                                    ? `+${(selectedExercise.history[0].weight - selectedExercise.history[selectedExercise.history.length - 1].weight).toFixed(1)}`
                                    : '0'
                                } kg
                            </p>
                        </div>
                    </div>

                    {/* Grafik */}
                    <div className="px-4 pb-4">
                        <div className="h-[200px] w-full bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={selectedExercise?.history?.map(record => ({
                                        date: formatDate(record.date),
                                        weight: record.weight,
                                        notes: record.notes
                                    })).reverse()}
                                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                                >
                                    <XAxis
                                        dataKey="date"
                                        stroke="#71717a"
                                        tick={{ fontSize: 11 }}
                                    />
                                    <YAxis
                                        stroke="#71717a"
                                        domain={['dataMin - 2', 'dataMax + 2']}
                                        tick={{ fontSize: 11 }}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="weight"
                                        stroke="#f59e0b"
                                        strokeWidth={2.5}
                                        dot={{ fill: '#f59e0b', strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 6, fill: '#f59e0b' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Alt Kısım - Kaydırılabilir */}
                <div className="flex-1 ">
                    <div className="px-4 pb-4">
                        <h3 className="text-lg font-medium text-zinc-300 mb-3 sticky top-0 bg-zinc-900 py-2">
                            Son Kayıtlar
                        </h3>
                        <div className="space-y-3">
                            {selectedExercise?.history?.map((record, index) => (
                                <div
                                    key={index}
                                    className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 transition-all hover:bg-zinc-800"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="space-y-1">
                                            <span className="text-amber-400 font-medium text-lg">
                                                {record.weight} kg
                                            </span>
                                            <p className="text-zinc-400 text-sm">
                                                {new Date(record.date).toLocaleDateString('tr-TR')}
                                            </p>
                                        </div>
                                        {record.notes && (
                                            <div className="bg-zinc-700/50 px-3 py-2 rounded-lg max-w-[60%]">
                                                <p className="text-zinc-300 text-sm">{record.notes}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ViewExerciseModal;