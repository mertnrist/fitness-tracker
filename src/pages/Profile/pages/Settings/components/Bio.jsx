import { IoSave, IoClose } from 'react-icons/io5';

const Bio = ({ bio, setBio, isEditing, setIsEditing, tempBio, setTempBio }) => {
    const handleSave = async () => {
        try {
            setBio(tempBio);
            setIsEditing(false);
        } catch (error) {
            console.error('Bio güncellenirken hata oluştu:', error);
        }
    };

    const handleCancel = () => {
        setTempBio(bio);
        setIsEditing(false);
    };

    return (
        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/30">
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">Hakkımda</h3>
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-sm text-amber-500 hover:text-amber-400"
                        >
                            Düzenle
                        </button>
                    )}
                </div>

                {isEditing ? (
                    <div className="space-y-4">
                        <textarea
                            value={tempBio}
                            onChange={(e) => setTempBio(e.target.value)}
                            placeholder="Kendinizden bahsedin..."
                            maxLength={150}
                            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                            rows={4}
                        />
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-zinc-400">
                                {tempBio.length}/150 karakter
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleCancel}
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg text-sm"
                                >
                                    <IoClose className="text-lg" />
                                    İptal
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm font-medium"
                                >
                                    <IoSave className="text-lg" />
                                    Kaydet
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-zinc-300">{bio}</p>
                )}
            </div>
        </div>
    );
};

export default Bio;
