import Modal from '../../../../../components/shared/Modal';
import { useState } from 'react';
import { IoCloudUpload, IoTrash, IoSave } from 'react-icons/io5';

const ChangePhotoModal = ({ isOpen, setIsOpen, type }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Önizleme için URL oluştur
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
        }
    };

    const handleSave = async () => {
        if (selectedFile) {
            try {
                // API çağrısı yapılacak
                // await profileService.uploadProfilePhoto(selectedFile);
                console.log('Fotoğraf yüklendi:', selectedFile);
                setIsOpen(false);
                // Başarılı mesajı gösterilebilir
            } catch (error) {
                console.error('Yükleme hatası:', error);
                // Hata mesajı gösterilebilir
            }
        }
    };

    const handleDelete = () => {
        // API çağrısı yapılacak
        console.log(`${type} fotoğrafı silindi`);
        setIsOpen(false);
    };

    const handleClose = () => {
        setSelectedFile(null);
        setPreview(null);
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={handleClose}
            title={`${type === 'profile' ? 'Profil' : 'Kapak'} Fotoğrafı Değiştir`}
        >
            <div className="p-6 space-y-6">
                <div className="space-y-4">
                    {preview ? (
                        <div className="relative">
                            <img
                                src={preview}
                                alt="Önizleme"
                                className={`w-full ${type === 'profile' ? 'aspect-square object-cover rounded-full' : 'aspect-[3/1] object-cover rounded-xl'}`}
                            />
                            <button
                                onClick={() => {
                                    setSelectedFile(null);
                                    setPreview(null);
                                }}
                                className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white"
                            >
                                <IoTrash className="text-lg" />
                            </button>
                        </div>
                    ) : (
                        <label className="block w-full cursor-pointer">
                            <div className="bg-zinc-800/50 border-2 border-dashed border-zinc-700/30 rounded-xl p-8 text-center hover:bg-zinc-800/70 transition-colors">
                                <IoCloudUpload className="mx-auto text-4xl text-amber-500 mb-2" />
                                <p className="text-white font-medium">Fotoğraf Yükle</p>
                                <p className="text-sm text-zinc-400 mt-1">veya sürükle bırak</p>
                            </div>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleUpload}
                            />
                        </label>
                    )}

                    {type === 'profile' && !preview && (
                        <button
                            onClick={handleDelete}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-colors"
                        >
                            <IoTrash className="text-lg" />
                            Mevcut Fotoğrafı Kaldır
                        </button>
                    )}
                </div>

                {/* Kaydet ve İptal Butonları */}
                <div className="flex gap-2 justify-end mt-6">
                    <button
                        onClick={handleClose}
                        className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg text-sm transition-colors"
                    >
                        İptal
                    </button>
                    {selectedFile && (
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm font-medium transition-colors"
                        >
                            <IoSave className="text-lg" />
                            Kaydet
                        </button>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ChangePhotoModal; 