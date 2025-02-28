import { IoEyeOutline, IoPencilOutline } from "react-icons/io5";

const ExerciseTable = ({ exercises, onViewClick, onEditClick }) => {
    return (
        <div>
            <h2 className="text-xl mb-4 text-white">Pazartesi Antrenman Programı</h2>

            {/* Masaüstü görünümü */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse bg-zinc-800 rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-zinc-700">
                            <th className="p-4 text-left text-zinc- font-extralight text-[12px] border-b border-zinc-700">Hareket</th>
                            <th className="p-4 text-left text-zinc- font-extralight text-[12px] border-b border-zinc-700">Set</th>
                            <th className="p-4 text-left text-zinc- font-extralight text-[12px] border-b border-zinc-700">Tekrar</th>
                            <th className="p-4 text-left text-zinc- font-extralight text-[12px] border-b border-zinc-700">Son Antrenman Notu</th>
                            <th className="p-4 text-left text-zinc- font-extralight text-[12px] border-b border-zinc-700">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map((exercise) => (
                            <tr key={exercise.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-700/50 transition-colors">
                                <td className="p-4 text-xl text-white font-extralight">{exercise.name}</td>
                                <td className="p-4 text-zinc-300">{exercise.sets}</td>
                                <td className="p-4 text-zinc-300">{exercise.reps}</td>
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
                                            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-700 hover:bg-zinc-600 text-amber-400 rounded-md transition-all text-sm font-medium min-w-[100px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <IoEyeOutline className="text-lg" />
                                            Görüntüle
                                        </button>
                                        <button
                                            onClick={() => onEditClick(exercise)}
                                            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-700 hover:bg-zinc-700 text-amber-400 rounded-md transition-all text-sm font-medium min-w-[100px] justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
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

            {/* Mobil görünümü */}
            <div className="md:hidden space-y-4">
                {exercises.map((exercise) => (
                    <div key={exercise.id} className="bg-zinc-800 rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl text-white font-extralight">{exercise.name}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span className="text-zinc-400">Set:</span>
                                <span className="ml-2 text-zinc-300">{exercise.sets}</span>
                            </div>
                            <div>
                                <span className="text-zinc-400">Tekrar:</span>
                                <span className="ml-2 text-zinc-300">{exercise.reps}</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-zinc-400 text-sm">Son Antrenman:</span>
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
                                        <p className="text-zinc-400 text-sm">
                                            {exercise.history[0].notes}
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <span className="text-zinc-500 text-sm italic block">
                                    Henüz kayıt yok
                                </span>
                            )}
                        </div>

                        <div className="flex gap-2 pt-2">
                            <button
                                onClick={() => onViewClick(exercise)}
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zinc-700 hover:bg-zinc-600 text-amber-400 rounded-md transition-all text-sm font-medium"
                            >
                                <IoEyeOutline className="text-lg" />
                                Görüntüle
                            </button>
                            <button
                                onClick={() => onEditClick(exercise)}
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zinc-700 hover:bg-zinc-600 text-amber-400 rounded-md transition-all text-sm font-medium"
                            >
                                <IoPencilOutline className="text-lg" />
                                Düzenle
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExerciseTable; 