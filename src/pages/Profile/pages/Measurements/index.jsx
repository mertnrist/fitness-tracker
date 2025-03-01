import Navbar from '../../../../components/Navbar';
import Container from '../../../../components/shared/Container';
import ProfileNavigation from '../../components/ProfileNavigation';
import AddMeasurementModal from './components/AddMeasurementModal';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IoAdd, IoScale, IoTrendingUp, IoBodyOutline } from 'react-icons/io5';
import { useState } from 'react';


const Measurements = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Örnek veri
    const measurementHistory = [
        { date: '01/03', weight: 75, bodyFat: 15, muscle: 65 },
        { date: '15/03', weight: 74.5, bodyFat: 14.8, muscle: 65.2 },
        { date: '01/04', weight: 74, bodyFat: 14.5, muscle: 65.5 },
        // ... diğer veriler
    ];

    return (
        <>
            <div className="space-y-8 pb-5">
                {/* Üst Başlık */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Vücut Ölçüleri</h2>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors text-sm font-medium"
                    >
                        <IoAdd className="text-lg" />
                        Yeni Ölçüm
                    </button>
                </div>

                {/* Özet Kartları */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/30">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <IoScale className="text-2xl text-amber-500" />
                            </div>
                            <div>
                                <p className="text-zinc-400 text-sm">Güncel Kilo</p>
                                <p className="text-2xl font-bold text-white">74.0 kg</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <IoTrendingUp className="text-green-500" />
                            <span className="text-green-500">-1.0 kg</span>
                            <span className="text-zinc-500">son 30 gün</span>
                        </div>
                    </div>

                    <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/30">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <IoBodyOutline className="text-2xl text-amber-500" />
                            </div>
                            <div>
                                <p className="text-zinc-400 text-sm">Yağ Oranı</p>
                                <p className="text-2xl font-bold text-white">14.5%</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <IoTrendingUp className="text-green-500" />
                            <span className="text-green-500">-0.5%</span>
                            <span className="text-zinc-500">son 30 gün</span>
                        </div>
                    </div>

                    <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/30">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <IoBodyOutline className="text-2xl text-amber-500" />
                            </div>
                            <div>
                                <p className="text-zinc-400 text-sm">Kas Kütlesi</p>
                                <p className="text-2xl font-bold text-white">65.5 kg</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <IoTrendingUp className="text-green-500" />
                            <span className="text-green-500">+0.5 kg</span>
                            <span className="text-zinc-500">son 30 gün</span>
                        </div>
                    </div>
                </div>

                {/* Grafik */}
                <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">
                    <h3 className="text-lg font-semibold mb-6">İlerleme Grafiği</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={measurementHistory}>
                                <XAxis dataKey="date" stroke="#71717a" />
                                <YAxis stroke="#71717a" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#27272a',
                                        border: '1px solid #3f3f46',
                                        borderRadius: '0.5rem'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="weight"
                                    stroke="#f59e0b"
                                    strokeWidth={2}
                                    dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Ölçüm Geçmişi */}
                <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">
                    <h3 className="text-lg font-semibold mb-4">Ölçüm Geçmişi</h3>
                    <div className="space-y-3">
                        {measurementHistory.map((measurement, index) => (
                            <div
                                key={index}
                                className="bg-zinc-800/50 p-4 rounded-lg flex justify-between items-center hover:bg-zinc-800 transition-colors"
                            >
                                <div>
                                    <p className="text-sm text-zinc-400">{measurement.date}</p>
                                    <p className="text-lg font-medium text-white">{measurement.weight} kg</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-zinc-400">Yağ: {measurement.bodyFat}%</p>
                                    <p className="text-sm text-zinc-400">Kas: {measurement.muscle} kg</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AddMeasurementModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
    );
};

export default Measurements; 