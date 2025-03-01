import { useState, useEffect } from 'react';
import { IoClose, IoCheckmark, IoBarbell, IoPeople, IoLocation, IoTime, IoFitness, IoInformation, IoHeart, IoHeartOutline, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Container from '../../../../components/shared/Container';
import Navbar from '../../../../components/Navbar';
import ProfileNavigation from '../../components/ProfileNavigation';
import Modal from '../../../../components/shared/Modal';

const Match = () => {
    const [currentProfile, setCurrentProfile] = useState(0);
    const [matches, setMatches] = useState([]);
    const [showMatchModal, setShowMatchModal] = useState(false);
    const [matchedProfile, setMatchedProfile] = useState(null);
    const [showLikesModal, setShowLikesModal] = useState(false);
    const [showMyLikesModal, setShowMyLikesModal] = useState(false);
    const [whoLikedMe, setWhoLikedMe] = useState([
        {
            id: 101,
            name: "Selin Yıldız",
            age: 27,
            images: [
                "https://i.pravatar.cc/150?img=11",
                "https://i.pravatar.cc/150?img=11",
                "https://i.pravatar.cc/150?img=11",
                "https://i.pravatar.cc/150?img=11"
            ],
            interests: ["Yoga", "Pilates"],
            location: "İstanbul, Kadıköy",
            distance: "3 km"
        },
        {
            id: 102,
            name: "Mert Demir",
            age: 30,
            images: [
                "https://i.pravatar.cc/150?img=24",
                "https://i.pravatar.cc/150?img=25",
                "https://i.pravatar.cc/150?img=26",
                "https://i.pravatar.cc/150?img=27"
            ],
            interests: ["CrossFit", "Olympic Lifting"],
            location: "İstanbul, Şişli",
            distance: "4 km"
        },
        {
            id: 103,
            name: "İrem Kara",
            age: 25,
            images: [
                "https://i.pravatar.cc/150?img=28",
                "https://i.pravatar.cc/150?img=29",
                "https://i.pravatar.cc/150?img=30",
                "https://i.pravatar.cc/150?img=31"
            ],
            interests: ["Powerlifting", "Bodybuilding"],
            location: "İstanbul, Beşiktaş",
            distance: "2 km"
        }
    ]);
    const [myLikes, setMyLikes] = useState([
        {
            id: 201,
            name: "Emre Çelik",
            age: 29,
            images: [
                "https://i.pravatar.cc/150?img=32",
                "https://i.pravatar.cc/150?img=33",
                "https://i.pravatar.cc/150?img=34",
                "https://i.pravatar.cc/150?img=35"
            ],
            interests: ["CrossFit", "Powerlifting"],
            location: "İstanbul, Beşiktaş",
            distance: "5 km"
        },
        {
            id: 202,
            name: "Ceren Aydın",
            age: 26,
            images: [
                "https://i.pravatar.cc/150?img=36",
                "https://i.pravatar.cc/150?img=37",
                "https://i.pravatar.cc/150?img=38",
                "https://i.pravatar.cc/150?img=39"
            ],
            interests: ["Yoga", "Dance"],
            location: "İstanbul, Üsküdar",
            distance: "6 km"
        },
        {
            id: 203,
            name: "Berk Yılmaz",
            age: 31,
            images: [
                "https://i.pravatar.cc/150?img=40",
                "https://i.pravatar.cc/150?img=41",
                "https://i.pravatar.cc/150?img=42",
                "https://i.pravatar.cc/150?img=43"
            ],
            interests: ["Boxing", "MMA"],
            location: "İstanbul, Maltepe",
            distance: "7 km"
        }
    ]);

    // Ana profil listesi
    const profiles = [
        {
            id: 1,
            name: "Kerem Yılmaz",
            age: 25,
            location: "İstanbul, Kadıköy",
            distance: "5 km",
            bio: "Powerlifting & Calisthenics tutkunu. Birlikte antrenman yapmak için partner arıyorum.",
            images: [
                "https://i.pravatar.cc/400?img=11",
                "https://i.pravatar.cc/400?img=11",
                "https://i.pravatar.cc/400?img=11",
                "https://i.pravatar.cc/400?img=11"
            ],
            interests: ["Powerlifting", "Calisthenics", "HIIT"],
            stats: {
                workouts: 234,
                friends: 67,
                experience: "2 yıl"
            },
            availability: ["Hafta içi akşam", "Hafta sonu sabah"],
            gym: "PowerGym Fitness Club",
            matched: true
        },
        {
            id: 2,
            name: "Zeynep Öztürk",
            age: 28,
            location: "İstanbul, Beşiktaş",
            distance: "3 km",
            bio: "CrossFit eğitmeni. Yeni arkadaşlarla WOD yapmak istiyorum!",
            images: [
                "https://i.pravatar.cc/400?img=2",
                "https://i.pravatar.cc/400?img=3",
                "https://i.pravatar.cc/400?img=4",
                "https://i.pravatar.cc/400?img=5"
            ],
            interests: ["CrossFit", "Olympic Lifting", "Gymnastics"],
            stats: {
                workouts: 456,
                friends: 89,
                experience: "4 yıl"
            },
            availability: ["Hafta içi öğle", "Hafta sonu"],
            gym: "CrossFit Box Istanbul",
            matched: true
        },
        {
            id: 3,
            name: "Cem Demir",
            age: 30,
            location: "İstanbul, Şişli",
            distance: "7 km",
            bio: "Vücut geliştirme ile ilgileniyorum. Düzenli ve disiplinli antrenman partneri arıyorum.",
            images: [
                "https://i.pravatar.cc/400?img=6",
                "https://i.pravatar.cc/400?img=7",
                "https://i.pravatar.cc/400?img=8",
                "https://i.pravatar.cc/400?img=9"
            ],
            interests: ["Bodybuilding", "Strength Training", "Nutrition"],
            stats: {
                workouts: 567,
                friends: 45,
                experience: "5 yıl"
            },
            availability: ["Hafta içi sabah", "Hafta sonu öğle"],
            gym: "Muscle Factory Gym",
            matched: true
        },
        {
            id: 4,
            name: "Defne Yıldırım",
            age: 26,
            location: "İstanbul, Ataşehir",
            distance: "4 km",
            bio: "Yoga eğitmeni ve fitness tutkunu. Hem yoga hem fitness partneri arıyorum.",
            images: [
                "https://i.pravatar.cc/400?img=10",
                "https://i.pravatar.cc/400?img=11",
                "https://i.pravatar.cc/400?img=12",
                "https://i.pravatar.cc/400?img=13"
            ],
            interests: ["Yoga", "Pilates", "Functional Training"],
            stats: {
                workouts: 345,
                friends: 78,
                experience: "3 yıl"
            },
            availability: ["Sabah", "Akşam"],
            gym: "Zen Fitness & Yoga",
            matched: true
        },
        {
            id: 5,
            name: "Kaan Aydın",
            age: 32,
            location: "İstanbul, Levent",
            distance: "6 km",
            bio: "Triathlon hazırlığı yapıyorum. Koşu ve yüzme antrenmanları için partner arıyorum.",
            images: [
                "https://i.pravatar.cc/400?img=14",
                "https://i.pravatar.cc/400?img=15",
                "https://i.pravatar.cc/400?img=16",
                "https://i.pravatar.cc/400?img=17"
            ],
            interests: ["Running", "Swimming", "Cycling"],
            stats: {
                workouts: 678,
                friends: 56,
                experience: "6 yıl"
            },
            availability: ["Hafta içi sabah", "Hafta sonu"],
            gym: "Sports International",
            matched: true
        },
        {
            id: 6,
            name: "Deniz Şahin",
            age: 27,
            location: "İstanbul, Maltepe",
            distance: "8 km",
            bio: "Kickbox ve MMA ile ilgileniyorum. Sparring partneri arıyorum.",
            images: [
                "https://i.pravatar.cc/400?img=18",
                "https://i.pravatar.cc/400?img=19",
                "https://i.pravatar.cc/400?img=20",
                "https://i.pravatar.cc/400?img=21"
            ],
            interests: ["Kickboxing", "MMA", "Boxing"],
            stats: {
                workouts: 423,
                friends: 34,
                experience: "4 yıl"
            },
            availability: ["Akşam", "Hafta sonu"],
            gym: "Fight Club Istanbul",
            matched: true
        },
        {
            id: 7,
            name: "Elif Kaya",
            age: 29,
            location: "İstanbul, Üsküdar",
            distance: "5 km",
            bio: "Profesyonel dans eğitmeni. Dans ve fitness antrenmanları için partner arıyorum.",
            images: [
                "https://i.pravatar.cc/400?img=22",
                "https://i.pravatar.cc/400?img=23",
                "https://i.pravatar.cc/400?img=24",
                "https://i.pravatar.cc/400?img=25"
            ],
            interests: ["Dance", "Zumba", "Stretching"],
            stats: {
                workouts: 289,
                friends: 91,
                experience: "7 yıl"
            },
            availability: ["Öğleden sonra", "Akşam"],
            gym: "Dance & Fit Studio",
            matched: true
        },
        {
            id: 8,
            name: "Onur Yalçın",
            age: 31,
            location: "İstanbul, Bakırköy",
            distance: "9 km",
            bio: "Strongman yarışmalarına hazırlanıyorum. Ağırlık antrenmanları için partner arıyorum.",
            images: [
                "https://i.pravatar.cc/400?img=26",
                "https://i.pravatar.cc/400?img=27",
                "https://i.pravatar.cc/400?img=28",
                "https://i.pravatar.cc/400?img=29"
            ],
            interests: ["Strongman", "Powerlifting", "Olympic Lifting"],
            stats: {
                workouts: 512,
                friends: 43,
                experience: "8 yıl"
            },
            availability: ["Sabah", "Akşam"],
            gym: "Strong Performance Gym",
            matched: true
        }
    ];

    // Yeni state ekleyelim
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // Fotoğraf geçiş fonksiyonları
    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % 4);
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + 4) % 4);
    };

    // Beğeni kartı komponenti
    const LikeCard = ({ user }) => (
        <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="relative h-48">
                <img
                    src={user.images[currentPhotoIndex]}
                    alt={user.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                        <h3 className="text-white font-medium">{user.name}</h3>
                        <span className="text-white">{user.age}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-zinc-300 mt-1">
                        <IoLocation className="text-amber-500" />
                        <span>{user.location}</span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-amber-500">{user.distance}</span>
                    </div>
                </div>
            </div>
            <div className="p-4"></div>
            <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs"
                    >
                        {interest}
                    </span>
                ))}
            </div>
        </div>
    );

    const handleLike = () => {
        // Eşleşme kontrolü ve işlemleri
        setMatches(prev => [...prev, profiles[currentProfile]]);
        setCurrentPhotoIndex(0); // Fotoğraf indeksini sıfırla
        setCurrentProfile(prev => prev + 1);
    };

    const handleDislike = () => {
        setCurrentPhotoIndex(0); // Fotoğraf indeksini sıfırla
        setCurrentProfile(prev => prev + 1);
    };

    // Profil değiştiğinde fotoğraf indeksini sıfırla
    useEffect(() => {
        setCurrentPhotoIndex(0);
    }, [currentProfile]);

    const handleAccept = (userId) => {
        // Kabul etme işlemi
        setWhoLikedMe(prev => prev.filter(user => user.id !== userId));
        // Burada backend'e istek atılacak
    };

    const handleReject = (userId) => {
        // Reddetme işlemi
        setWhoLikedMe(prev => prev.filter(user => user.id !== userId));
        // Burada backend'e istek atılacak
    };

    const handleWithdraw = (userId) => {
        // Beğeniyi geri çekme işlemi
        setMyLikes(prev => prev.filter(user => user.id !== userId));
        // Burada backend'e istek atılacak
    };

    if (currentProfile >= profiles.length) {
        return (
            <div>
                <Navbar />
                <Container>
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
                        <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/30 max-w-md">
                            <IoBarbell className="text-6xl text-amber-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-white mb-3">
                                Şu an için tüm adayları gördünüz
                            </h2>
                            <p className="text-zinc-400 mb-6">
                                Yakınızda yeni antrenman partnerleri bulmak için daha sonra tekrar kontrol edin
                            </p>
                            <button
                                onClick={() => setCurrentProfile(0)}
                                className="bg-amber-500 text-black px-6 py-3 rounded-xl font-medium hover:bg-amber-600 transition-colors"
                            >
                                Profilleri Yeniden Gör
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    const profile = profiles[currentProfile];


    return (
        <>
            {/* Beğeni Butonları - Mobilde alt alta */}
            <div className="max-w-4xl mx-auto mb-4 px-2 md:px-4 pt-4 md:pt-8">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4 md:mb-8">
                    <button
                        onClick={() => setShowLikesModal(true)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-white transition-colors"
                    >
                        <IoHeart className="text-red-500 text-xl" />
                        <span className="font-medium">Beni Beğenenler</span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {whoLikedMe.length}
                        </span>
                    </button>
                    <button
                        onClick={() => setShowMyLikesModal(true)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-white transition-colors"
                    >
                        <IoHeartOutline className="text-amber-500 text-xl" />
                        <span className="font-medium">Beğendiklerim</span>
                        <span className="bg-amber-500 text-black text-xs px-2 py-1 rounded-full">
                            {myLikes.length}
                        </span>
                    </button>
                </div>

                {/* Ana İçerik - Resim genişliği düzeltildi */}
                <div className="max-w-4xl mx-auto pb-4 md:pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                        {/* Ana Profil Kartı */}
                        <div className="md:col-span-3 w-full">
                            <div className="relative bg-zinc-800 rounded-2xl overflow-hidden w-full">
                                <div className="relative w-full h-[550px] md:h-[600px]">
                                    <img
                                        src={profiles[currentProfile].images[currentPhotoIndex]}
                                        alt={profiles[currentProfile].name}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Fotoğraf Navigasyon Butonları */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentPhotoIndex((prev) =>
                                                prev === 0 ? profiles[currentProfile].images.length - 1 : prev - 1
                                            );
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors z-10"
                                    >
                                        <IoChevronBack className="text-2xl" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentPhotoIndex((prev) =>
                                                (prev + 1) % profiles[currentProfile].images.length
                                            );
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors z-10"
                                    >
                                        <IoChevronForward className="text-2xl" />
                                    </button>

                                    {/* Fotoğraf İndikatörleri */}
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 px-3 py-2 rounded-full">
                                        {profiles[currentProfile].images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentPhotoIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-colors ${currentPhotoIndex === index
                                                    ? 'bg-amber-500' // Aktif olan turuncu
                                                    : 'bg-white/40 hover:bg-white/60'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Gradient overlay - Üst kısım için yeni gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />

                                    {/* Temel Bilgiler - Mobil için düzenlendi */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                        <div className="space-y-3 md:space-y-4">
                                            <div>
                                                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                                                    <h2 className="text-2xl md:text-3xl font-bold text-white">{profiles[currentProfile].name}</h2>
                                                    <span className="text-xl md:text-2xl text-white">{profiles[currentProfile].age}</span>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm md:text-base text-zinc-300">
                                                    <IoLocation className="text-amber-500" />
                                                    <span>{profiles[currentProfile].location}</span>
                                                    <span className="text-zinc-500">•</span>
                                                    <span className="text-amber-500">{profiles[currentProfile].distance}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                {profiles[currentProfile].interests.map((interest, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 md:px-4 md:py-1.5 bg-amber-500 text-black rounded-full text-xs md:text-sm font-medium"
                                                    >
                                                        {interest}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Aksiyon Butonları - Mobil için düzenlendi */}
                            <div className="flex justify-center gap-3 md:gap-4 mt-4 md:mt-6">
                                <button
                                    onClick={handleDislike}
                                    className="p-4 md:p-5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-red-500 transition-all hover:scale-110 shadow-lg"
                                >
                                    <IoClose className="text-3xl md:text-4xl" />
                                </button>
                                <button
                                    onClick={handleLike}
                                    className="p-4 md:p-5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-green-500 transition-all hover:scale-110 shadow-lg"
                                >
                                    <IoCheckmark className="text-3xl md:text-4xl" />
                                </button>
                            </div>
                        </div>

                        {/* Detay Kartları - Mobil için düzenlendi */}
                        <div className="md:col-span-2 space-y-3 md:space-y-4">
                            {/* İstatistikler */}
                            <div className="bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
                                <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <IoInformation className="text-amber-500" />
                                    Antrenman Bilgileri
                                </h3>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="bg-zinc-700/50 p-3 md:p-4 rounded-lg">
                                        <div className="flex items-center gap-2 text-amber-500 mb-1">
                                            <IoBarbell className=" md:text-xl" />
                                            <span className="text-xs ">Antrenmanlar</span>
                                        </div>
                                        <p className="text-lg md:text-xl font-bold text-white">{profiles[currentProfile].stats.workouts}</p>
                                    </div>
                                    <div className="bg-zinc-700/50 p-3 md:p-4 rounded-lg">
                                        <div className="flex items-center gap-2 text-amber-500 mb-1">
                                            <IoFitness className="text-xl md:text-xl" />
                                            <span className="text-xs md:text-sm">Deneyim</span>
                                        </div>
                                        <p className="text-lg md:text-xl font-bold text-white">{profiles[currentProfile].stats.experience}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Müsaitlik */}
                            <div className="bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
                                <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <IoTime className="text-amber-500" />
                                    Müsaitlik
                                </h3>
                                <div className="space-y-1.5 md:space-y-2">
                                    {profiles[currentProfile].availability.map((time, index) => (
                                        <div key={index} className="bg-zinc-700/50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base text-zinc-300">
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Spor Salonu */}
                            <div className="bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
                                <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <IoBarbell className="text-amber-500" />
                                    Spor Salonu
                                </h3>
                                <div className="bg-zinc-700/50 px-3 md:px-4 py-2 md:py-3 rounded-lg text-sm md:text-base text-zinc-300">
                                    {profiles[currentProfile].gym}
                                </div>
                            </div>

                            {/* Hakkında */}
                            <div className="bg-zinc-800 rounded-xl p-4 md:p-6 shadow-lg">
                                <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <IoInformation className="text-amber-500" />
                                    Hakkında
                                </h3>
                                <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                                    {profiles[currentProfile].bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Beni Beğenenler Modalı */}
            <Modal
                isOpen={showLikesModal}
                setIsOpen={setShowLikesModal}
                title={`Beni Beğenenler (${whoLikedMe.length})`}
                size="fullscreen"
            >
                <div className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {whoLikedMe.map(user => (
                            <div key={user.id} className="bg-zinc-800 rounded-xl overflow-hidden">
                                <div className="relative h-48 md:h-64">
                                    <img
                                        src={user.images[currentPhotoIndex]}
                                        alt={user.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-white text-lg font-medium">{user.name}</h3>
                                            <span className="text-white">{user.age}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-zinc-300 mt-1">
                                            <IoLocation className="text-amber-500" />
                                            <span>{user.location}</span>
                                            <span className="text-zinc-500">•</span>
                                            <span className="text-amber-500">{user.distance}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {user.interests.map((interest, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs"
                                            >
                                                {interest}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Mobil için tek sütunlu butonlar */}
                                    <div className="grid grid-cols-1 gap-2 md:hidden">
                                        <button
                                            className="w-full px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2"
                                            onClick={() => handleAccept(user.id)}
                                        >
                                            <IoCheckmark className="text-lg" />
                                            Kabul Et
                                        </button>
                                        <button
                                            className="w-full px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2"
                                            onClick={() => handleReject(user.id)}
                                        >
                                            <IoClose className="text-lg" />
                                            Reddet
                                        </button>
                                    </div>

                                    {/* Masaüstü için yan yana butonlar */}
                                    <div className="hidden md:grid grid-cols-2 gap-2">
                                        <button
                                            className="px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2"
                                            onClick={() => handleAccept(user.id)}
                                        >
                                            <IoCheckmark className="text-lg" />
                                            Kabul Et
                                        </button>
                                        <button
                                            className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2"
                                            onClick={() => handleReject(user.id)}
                                        >
                                            <IoClose className="text-lg" />
                                            Reddet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {whoLikedMe.length === 0 && (
                        <div className="text-center py-12">
                            <div className="bg-zinc-800/50 max-w-md mx-auto p-8 rounded-2xl">
                                <IoHeart className="text-red-500 text-5xl mx-auto mb-4" />
                                <p className="text-zinc-400 text-lg">Henüz beğeni yok</p>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>

            {/* Beğendiklerim Modalı */}
            <Modal
                isOpen={showMyLikesModal}
                setIsOpen={setShowMyLikesModal}
                title={`Beğendiklerim (${myLikes.length})`}
                size="fullscreen"
            >
                <div className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {myLikes.map(user => (
                            <div key={user.id} className="bg-zinc-800 rounded-xl overflow-hidden">
                                <div className="relative h-48 md:h-64">
                                    <img
                                        src={user.images[currentPhotoIndex]}
                                        alt={user.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-white text-lg font-medium">{user.name}</h3>
                                            <span className="text-white">{user.age}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-zinc-300 mt-1">
                                            <IoLocation className="text-amber-500" />
                                            <span>{user.location}</span>
                                            <span className="text-zinc-500">•</span>
                                            <span className="text-amber-500">{user.distance}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {user.interests.map((interest, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs"
                                            >
                                                {interest}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        className="w-full px-4 py-2.5 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2"
                                        onClick={() => handleWithdraw(user.id)}
                                    >
                                        <IoClose className="text-lg" />
                                        İsteği Geri Çek
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {myLikes.length === 0 && (
                        <div className="text-center py-12">
                            <div className="bg-zinc-800/50 max-w-md mx-auto p-8 rounded-2xl">
                                <IoHeartOutline className="text-amber-500 text-5xl mx-auto mb-4" />
                                <p className="text-zinc-400 text-lg">Henüz kimseyi beğenmediniz</p>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default Match; 