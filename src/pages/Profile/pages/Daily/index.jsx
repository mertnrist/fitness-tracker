import { useEffect, useRef, useState } from 'react';
import Navbar from '../../../../components/Navbar'
import Container from '../../../../components/shared/Container'
import ProfileNavigation from '../../components/ProfileNavigation'
import DailyWorkoutModal from './components/DailyWorkoutModal'

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
        <div>
            <Navbar />
            <Container>
                <ProfileNavigation />
                <div className="space-y-12">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white py-4">
                            2025
                        </h2>
                        <div className="space-y-12">
                            {months.map((month, monthIndex) => {
                                const monthData = workoutData[monthIndex];
                                if (!monthData || Object.keys(monthData).length === 0) return null;

                                return (
                                    <div key={monthIndex} className="space-y-4">
                                        <h3 className="text-xl text-amber-500 font-semibold">
                                            {month}
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                                            {Object.keys(monthData).map(day => {
                                                const dayNum = parseInt(day);
                                                const isCurrentDate = monthIndex === currentMonth && dayNum === currentDay;

                                                return (
                                                    <div
                                                        key={`${monthIndex}-${day}`}
                                                        ref={isCurrentDate ? currentDateRef : null}
                                                        onClick={() => handleDayClick(day, month, monthIndex)}
                                                        className={`p-3 rounded-lg ${isCurrentDate
                                                            ? 'bg-amber-500 text-black'
                                                            : 'bg-zinc-800 text-white'
                                                            } hover:bg-zinc-700 transition-colors cursor-pointer group`}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <span className={`text-sm font-medium ${isCurrentDate ? 'text-black' : 'text-zinc-400'
                                                                }`}>
                                                                {dayNum}
                                                            </span>
                                                            <span className={`w-2 h-2 rounded-full ${isCurrentDate
                                                                ? 'bg-black/40'
                                                                : 'bg-amber-500'
                                                                }`} />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <DailyWorkoutModal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    workout={selectedWorkout}
                    date={selectedDate}
                />
            </Container>
        </div>
    )
}

export default Daily 