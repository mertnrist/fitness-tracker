import Modal from '../../../../components/shared/Modal';

const EditExerciseModal = ({
    isOpen,
    setIsOpen,
    selectedExercise,
    newWeight,
    setNewWeight,
    newNotes,
    setNewNotes,
    nextWeight,
    setNextWeight,
    nextNotes,
    setNextNotes,
    handleEditSubmit,
    getSuggestedWeight
}) => {
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
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
    );
};

export default EditExerciseModal;