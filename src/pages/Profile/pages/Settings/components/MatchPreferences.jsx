import { IoHeartOutline, IoCamera, IoAdd, IoTrashOutline } from 'react-icons/io5';
import { useState, useRef } from 'react';

const MatchPreferences = ({ matchPreferences, setMatchPreferences }) => {
    const [photos, setPhotos] = useState([null, null, null, null]);
    const fileInputRef = useRef(null);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    const availabilityOptions = [
        'Hafta içi sabah',
        'Hafta içi öğle',
        'Hafta içi akşam',
        'Hafta sonu sabah',
        'Hafta sonu öğle',
        'Hafta sonu akşam'
    ];

    const interestOptions = [
        'Powerlifting',
        'CrossFit',
        'Bodybuilding',
        'Yoga',
        'Pilates',
        'Koşu',
        'Yüzme',
        'Kickbox',
        'MMA',
        'Dans',
        'Calisthenics'
    ];

    const trainingStyleOptions = [
        'Güç antrenmanı',
        'Kardio',
        'HIIT',
        'Fonksiyonel antrenman',
        'Grup dersleri',
        'Kişisel antrenman'
    ];

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
                <IoHeartOutline className="text-2xl text-amber-500" />
                <div>
                    <h2 className="text-lg text-white font-medium">Eşleşme Tercihleri</h2>
                    <p className="text-sm text-zinc-400">Antrenman partnerini bulmak için tercihlerini belirle</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Eşleşme özelliğini aç/kapa */}
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Eşleşme Özelliği</h3>
                        <p className="text-sm text-zinc-400">Antrenman partneri bulmak için eşleşme özelliğini aktifleştir</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={matchPreferences.isMatchingEnabled}
                            onChange={(e) => setMatchPreferences({
                                ...matchPreferences,
                                isMatchingEnabled: e.target.checked
                            })}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                    </label>
                </div>

                {matchPreferences.isMatchingEnabled && (
                    <>
                        {/* Fotoğraf Yükleme Bölümü */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {photos.map((photo, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-square rounded-xl overflow-hidden"
                                    >
                                        {photo ? (
                                            <div className="group relative w-full h-full">
                                                <img
                                                    src={photo}
                                                    alt={`Profil fotoğrafı ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedPhotoIndex(index);
                                                            fileInputRef.current?.click();
                                                        }}
                                                        className="p-2 bg-amber-500 rounded-full text-black hover:bg-amber-600 transition-colors"
                                                    >
                                                        <IoCamera className="text-xl" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeletePhoto(index)}
                                                        className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                                                    >
                                                        <IoTrashOutline className="text-xl" />
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    setSelectedPhotoIndex(index);
                                                    fileInputRef.current?.click();
                                                }}
                                                className="w-full h-full bg-zinc-700/50 hover:bg-zinc-700 transition-colors rounded-xl border-2 border-dashed border-zinc-600 flex flex-col items-center justify-center gap-2"
                                            >
                                                <IoAdd className="text-3xl text-zinc-400" />
                                                <span className="text-sm text-zinc-400">Fotoğraf Ekle</span>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handlePhotoChange}
                                accept="image/*"
                                className="hidden"
                            />
                        </div>

                        {/* Spor İlgi Alanları */}
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Spor İlgi Alanları</label>
                            <div className="flex flex-wrap gap-2">
                                {interestOptions.map((interest) => (
                                    <button
                                        key={interest}
                                        onClick={() => {
                                            const newInterests = matchPreferences.interests.includes(interest)
                                                ? matchPreferences.interests.filter(i => i !== interest)
                                                : [...matchPreferences.interests, interest];
                                            setMatchPreferences({
                                                ...matchPreferences,
                                                interests: newInterests
                                            });
                                        }}
                                        className={`px-3 py-1.5 rounded-full text-sm ${matchPreferences.interests.includes(interest)
                                            ? 'bg-amber-500 text-black'
                                            : 'bg-zinc-700 text-zinc-300'
                                            }`}
                                    >
                                        {interest}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tercih Edilen Cinsiyet */}
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Tercih Edilen Cinsiyet</label>
                            <select
                                value={matchPreferences.preferredGender}
                                onChange={(e) => setMatchPreferences({
                                    ...matchPreferences,
                                    preferredGender: e.target.value
                                })}
                                className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="all">Hepsi</option>
                                <option value="male">Erkek</option>
                                <option value="female">Kadın</option>
                            </select>
                        </div>

                        {/* Yaş Aralığı */}
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Yaş Aralığı</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    min="18"
                                    max="100"
                                    value={matchPreferences.ageRange.min}
                                    onChange={(e) => setMatchPreferences({
                                        ...matchPreferences,
                                        ageRange: { ...matchPreferences.ageRange, min: parseInt(e.target.value) }
                                    })}
                                    className="w-24 bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                                <span className="text-zinc-400">-</span>
                                <input
                                    type="number"
                                    min="18"
                                    max="100"
                                    value={matchPreferences.ageRange.max}
                                    onChange={(e) => setMatchPreferences({
                                        ...matchPreferences,
                                        ageRange: { ...matchPreferences.ageRange, max: parseInt(e.target.value) }
                                    })}
                                    className="w-24 bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                        </div>

                        {/* Maksimum Mesafe */}
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Maksimum Mesafe (km)</label>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={matchPreferences.maxDistance}
                                onChange={(e) => setMatchPreferences({
                                    ...matchPreferences,
                                    maxDistance: parseInt(e.target.value)
                                })}
                                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="text-right text-sm text-zinc-400">{matchPreferences.maxDistance} km</div>
                        </div>

                        {/* Antrenman Lokasyonu */}
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Antrenman Lokasyonu</label>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setMatchPreferences({
                                            ...matchPreferences,
                                            trainingLocation: { ...matchPreferences.trainingLocation, type: 'anywhere' }
                                        })}
                                        className={`px-3 py-1.5 rounded-full text-sm ${matchPreferences.trainingLocation.type === 'anywhere'
                                            ? 'bg-amber-500 text-black'
                                            : 'bg-zinc-700 text-zinc-300'
                                            }`}
                                    >
                                        Farketmez
                                    </button>
                                    <button
                                        onClick={() => setMatchPreferences({
                                            ...matchPreferences,
                                            trainingLocation: { ...matchPreferences.trainingLocation, type: 'gym' }
                                        })}
                                        className={`px-3 py-1.5 rounded-full text-sm ${matchPreferences.trainingLocation.type === 'gym'
                                            ? 'bg-amber-500 text-black'
                                            : 'bg-zinc-700 text-zinc-300'
                                            }`}
                                    >
                                        Spor Salonu
                                    </button>
                                    <button
                                        onClick={() => setMatchPreferences({
                                            ...matchPreferences,
                                            trainingLocation: { ...matchPreferences.trainingLocation, type: 'home' }
                                        })}
                                        className={`px-3 py-1.5 rounded-full text-sm ${matchPreferences.trainingLocation.type === 'home'
                                            ? 'bg-amber-500 text-black'
                                            : 'bg-zinc-700 text-zinc-300'
                                            }`}
                                    >
                                        Ev Antrenmanı
                                    </button>
                                    <button
                                        onClick={() => setMatchPreferences({
                                            ...matchPreferences,
                                            trainingLocation: { ...matchPreferences.trainingLocation, type: 'outdoor' }
                                        })}
                                        className={`px-3 py-1.5 rounded-full text-sm ${matchPreferences.trainingLocation.type === 'outdoor'
                                            ? 'bg-amber-500 text-black'
                                            : 'bg-zinc-700 text-zinc-300'
                                            }`}
                                    >
                                        Açık Alan
                                    </button>
                                </div>

                                {matchPreferences.trainingLocation.type === 'gym' && (
                                    <div className="space-y-2">
                                        <label className="block text-sm text-zinc-400">Spor Salonu Adı</label>
                                        <input
                                            type="text"
                                            value={matchPreferences.trainingLocation.gymName}
                                            onChange={(e) => setMatchPreferences({
                                                ...matchPreferences,
                                                trainingLocation: {
                                                    ...matchPreferences.trainingLocation,
                                                    gymName: e.target.value
                                                }
                                            })}
                                            placeholder="Spor salonunuzun adını girin (opsiyonel)"
                                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Müsait Olunan Zamanlar */}
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Müsait Olunan Zamanlar</label>
                            <div className="flex flex-wrap gap-2">
                                {availabilityOptions.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => {
                                            const newAvailability = matchPreferences.availability.includes(time)
                                                ? matchPreferences.availability.filter(t => t !== time)
                                                : [...matchPreferences.availability, time];
                                            setMatchPreferences({
                                                ...matchPreferences,
                                                availability: newAvailability
                                            });
                                        }}
                                        className={`px-3 py-1.5 rounded-full text-sm ${matchPreferences.availability.includes(time)
                                            ? 'bg-amber-500 text-black'
                                            : 'bg-zinc-700 text-zinc-300'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Deneyim Seviyesi */}
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Deneyim Seviyesi</label>
                            <select
                                value={matchPreferences.experienceLevel}
                                onChange={(e) => setMatchPreferences({
                                    ...matchPreferences,
                                    experienceLevel: e.target.value
                                })}
                                className="w-full bg-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="beginner">Başlangıç</option>
                                <option value="intermediate">Orta Seviye</option>
                                <option value="advanced">İleri Seviye</option>
                            </select>
                        </div>

                        {/* Antrenman Stilleri */}
                        <div className="space-y-2">
                            <label className="block text-sm text-zinc-400">Antrenman Stilleri</label>
                            <div className="flex flex-wrap gap-2">
                                {trainingStyleOptions.map((style) => (
                                    <button
                                        key={style}
                                        onClick={() => {
                                            const newStyles = matchPreferences.trainingStyle.includes(style)
                                                ? matchPreferences.trainingStyle.filter(s => s !== style)
                                                : [...matchPreferences.trainingStyle, style];
                                            setMatchPreferences({
                                                ...matchPreferences,
                                                trainingStyle: newStyles
                                            });
                                        }}
                                        className={`px-3 py-1.5 rounded-full text-sm ${matchPreferences.trainingStyle.includes(style)
                                            ? 'bg-amber-500 text-black'
                                            : 'bg-zinc-700 text-zinc-300'
                                            }`}
                                    >
                                        {style}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Kaydet Butonu */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => {
                                    console.log('Eşleşme tercihleri güncellendi:', matchPreferences);
                                }}
                                className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors font-medium"
                            >
                                Tercihleri Kaydet
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MatchPreferences; 