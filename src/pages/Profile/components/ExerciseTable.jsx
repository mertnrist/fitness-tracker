import { IoEyeOutline, IoPencilOutline } from "react-icons/io5";

const ExerciseTable = ({ exercises, onViewClick, onEditClick }) => {
    return (
        <div>
            <h2 className="text-xl mb-4 text-white">Pazartesi Antrenman Programı</h2>
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
                            <tr key={exercise.id} className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
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
                                            onClick={() => onViewClick(exercise)}
                                            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-amber-400 rounded-md transition-all text-sm font-medium min-w-[100px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <IoEyeOutline className="text-lg" />
                                            Görüntüle
                                        </button>
                                        <button
                                            onClick={() => onEditClick(exercise)}
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

    );
};

export default ExerciseTable; 