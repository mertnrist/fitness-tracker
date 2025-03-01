import { IoTrashOutline } from 'react-icons/io5';

const DeleteAccount = () => {
    const handleDeleteAccount = () => {
        if (window.confirm('Hesabınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.')) {
            console.log('Hesap silindi');
        }
    };

    return (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
                <IoTrashOutline className="text-2xl text-red-500" />
                <div>
                    <h2 className="text-lg text-white font-medium">Hesabı Sil</h2>
                    <p className="text-sm text-zinc-400">Hesabınızı kalıcı olarak silin</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-400">
                    Bu işlem geri alınamaz. Tüm verileriniz kalıcı olarak silinecektir.
                </p>
                <button
                    onClick={handleDeleteAccount}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm font-medium"
                >
                    Hesabı Sil
                </button>
            </div>
        </div>
    );
};

export default DeleteAccount; 