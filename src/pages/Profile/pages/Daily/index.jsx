import { useEffect, useRef, useState } from 'react';
import Navbar from '../../../../components/Navbar'
import Container from '../../../../components/shared/Container'
import ProfileNavigation from '../../components/ProfileNavigation'
import DailyWorkoutModal from './components/DailyWorkoutModal'
import { IoCalendarOutline, IoFitnessOutline, IoTrendingUp } from 'react-icons/io5';

const Daily = () => {
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const currentDateRef = useRef(null);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    // Ay isimleri
    const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    // Örnek veri (gerçek verilerinizle değiştirin)
    const workoutData = {
        // Ocak
        "0": {
            "15": {
                exercises: [
                    { name: "Bench Press", weight: 100, sets: 4, reps: "8-10" },
                    { name: "Shoulder Press", weight: 60, sets: 3, reps: "10-12" }
                ]
            },
            "22": {
                exercises: [
                    { name: "Squat", weight: 120, sets: 5, reps: "5" },
                    { name: "Deadlift", weight: 140, sets: 3, reps: "5" }
                ]
            }
        },
        // Şubat
        "1": {
            "5": {
                exercises: [
                    { name: "Pull-ups", weight: 0, sets: 4, reps: "max" },
                    { name: "Rows", weight: 80, sets: 3, reps: "12" }
                ]
            }
        }
        // Diğer aylar için veri ekleyebilirsiniz
    };

    const handleDayClick = (day, month, monthIndex) => {
        const workout = workoutData[monthIndex]?.[day];
        if (workout) {
            setSelectedWorkout(workout);
            setSelectedDate(`${day} ${month} 2025`);
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        // Sayfa yüklendiğinde mevcut tarihe scroll yap
        if (currentDateRef.current) {
            currentDateRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, []);

    return (
        <>
            {/* Üst Kısım - Özet Bilgiler */}
            <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/30">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <IoCalendarOutline className="text-2xl text-amber-500" />
                            </div>
                            <h3 className="text-zinc-400 font-medium">Bu Ay</h3>
                        </div>
                        <p className="text-3xl font-bold text-white">12 Antrenman</p>
                    </div>

                    <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/30">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <IoFitnessOutline className="text-2xl text-amber-500" />
                            </div>
                            <h3 className="text-zinc-400 font-medium">Toplam Süre</h3>
                        </div>
                        <p className="text-3xl font-bold text-white">18.5 Saat</p>
                    </div>

                    <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/30">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <IoTrendingUp className="text-2xl text-amber-500" />
                            </div>
                            <h3 className="text-zinc-400 font-medium">Ortalama</h3>
                        </div>
                        <p className="text-3xl font-bold text-white">4.2/Hafta</p>
                    </div>
                </div>

                {/* Takvim Başlığı */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        Antrenman Takvimi
                    </h2>
                </div>
            </div>

            {/* Takvim */}
            <div className="space-y-8 pb-5">
                {months.map((month, monthIndex) => {
                    const monthData = workoutData[monthIndex];
                    if (!monthData || Object.keys(monthData).length === 0) return null;

                    return (
                        <div key={monthIndex} className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">
                            <h3 className="text-xl text-amber-500 font-semibold mb-4 flex items-center gap-2">
                                <IoCalendarOutline className="text-xl" />
                                {month}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
                                {Object.keys(monthData).map(day => {
                                    const dayNum = parseInt(day);
                                    const isCurrentDate = monthIndex === currentMonth && dayNum === currentDay;

                                    return (
                                        <div
                                            key={`${monthIndex}-${day}`}
                                            ref={isCurrentDate ? currentDateRef : null}
                                            onClick={() => handleDayClick(day, month, monthIndex)}
                                            className={`
                                                    relative p-4 rounded-lg cursor-pointer transition-all duration-200
                                                    hover:transform hover:scale-105
                                                    ${isCurrentDate
                                                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                                                    : 'bg-zinc-800/50 text-white hover:bg-zinc-700/50'
                                                }
                                                `}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className={`text-base font-medium ${isCurrentDate ? 'text-black' : 'text-zinc-400'}`}>
                                                    {dayNum}
                                                </span>
                                                <div className={`w-2 h-2 rounded-full ${isCurrentDate ? 'bg-black/40' : 'bg-amber-500'}`} />
                                            </div>
                                            <div className="mt-2 text-xs text-zinc-500">
                                                {monthData[day].exercises.length} hareket
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            <DailyWorkoutModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                workout={selectedWorkout}
                date={selectedDate}
            />
        </>
    )
}

export default Daily 