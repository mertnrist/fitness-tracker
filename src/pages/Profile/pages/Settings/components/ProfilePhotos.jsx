import { useState, useRef } from 'react';
import { IoCamera, IoTrashOutline, IoAdd } from 'react-icons/io5';

const ProfilePhotos = () => {
    const [photos, setPhotos] = useState([null, null, null, null]);
    const fileInputRef = useRef(null);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    const handlePhotoChange = (e) => {
        if (e.target.files && e.target.files[0] && selectedPhotoIndex !== null) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const newPhotos = [...photos];
                newPhotos[selectedPhotoIndex] = e.target.result;
                setPhotos(newPhotos);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDeletePhoto = (index) => {
        const newPhotos = [...photos];
        newPhotos[index] = null;
        setPhotos(newPhotos);
    };

    return (
        <div className="bg-zinc-800/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
                <IoCamera className="text-2xl text-amber-500" />
                <div>
                    <h2 className="text-lg text-white font-medium">Profil Fotoğrafları</h2>
                    <p className="text-sm text-zinc-400">En az bir fotoğraf ekleyin (maksimum 4 fotoğraf)</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* ... Fotoğraf grid yapısı (mevcut kod) ... */}
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoChange}
                accept="image/*"
                className="hidden"
            />

            {/* ... Fotoğraf gereksinimleri (mevcut kod) ... */}
        </div>
    );
};

export default ProfilePhotos; 