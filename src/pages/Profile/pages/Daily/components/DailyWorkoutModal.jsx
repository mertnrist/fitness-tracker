import Modal from '../../../../../components/shared/Modal';

const DailyWorkoutModal = ({ isOpen, setIsOpen, workout, date }) => {
    if (!workout) return null;

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={`${date} - Antrenman Detayı`}
            size="fullscreen"
        >
            <div className="p-4">
                <div className="space-y-6">
                    {workout.exercises.map((exercise, index) => (
                        <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-white font-medium">{exercise.name}</h3>
                                <span className="text-amber-500">{exercise.weight} kg</span>
                            </div>
                            <div className="text-sm text-zinc-400">
                                {exercise.sets} set x {exercise.reps} tekrar
                            </div>
                            {exercise.notes && (
                                <p className="text-sm text-zinc-500 mt-2">{exercise.notes}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default DailyWorkoutModal; 