import { useState } from 'react';
import {
    IoPersonOutline,
    IoHeartOutline,
    IoNotificationsOutline,
    IoShieldOutline
} from 'react-icons/io5';
import PersonalInfo from './components/PersonalInfo';
import Bio from './components/Bio';
import MatchPreferences from './components/MatchPreferences';
import NotificationSettings from './components/NotificationSettings';
import SecuritySettings from './components/SecuritySettings';
import DeleteAccount from './components/DeleteAccount';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [photos, setPhotos] = useState([null, null, null, null]);

    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        height: 180,
        weight: 80,
        birthDate: '1990-01-01',
        gender: 'male'
    });

    const [bio, setBio] = useState('Fitness tutkunu | 3 yıllık deneyim');
    const [isEditing, setIsEditing] = useState(false);
    const [tempBio, setTempBio] = useState(bio);

    const [notifications, setNotifications] = useState({
        email: true,
        workout: true,
        progress: false,
        news: false
    });

    const [matchPreferences, setMatchPreferences] = useState({
        isMatchingEnabled: false,
        interests: [],
        preferredGender: 'all',
        ageRange: { min: 18, max: 50 },
        maxDistance: 50,
        trainingLocation: {
            type: 'anywhere',
            gymName: '',
        },
        availability: [],
        experienceLevel: 'beginner',
        trainingStyle: [],
    });

    const tabs = [
        {
            id: 'profile',
            label: 'Profil',
            icon: <IoPersonOutline className="text-xl" />
        },
        {
            id: 'matching',
            label: 'Eşleşme',
            icon: <IoHeartOutline className="text-xl" />
        },
        {
            id: 'notifications',
            label: 'Bildirimler',
            icon: <IoNotificationsOutline className="text-xl" />
        },
        {
            id: 'security',
            label: 'Güvenlik',
            icon: <IoShieldOutline className="text-xl" />
        }
    ];

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prev) =>
            photos[(prev + 1) % photos.length] === null
                ? 0
                : (prev + 1) % photos.length
        );
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prev) => {
            let newIndex = prev - 1;
            if (newIndex < 0) {
                for (let i = photos.length - 1; i >= 0; i--) {
                    if (photos[i] !== null) {
                        return i;
                    }
                }
                return 0;
            }
            return photos[newIndex] === null ? prev : newIndex;
        });
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <>
                        <PersonalInfo user={user} setUser={setUser} />
                        <Bio
                            bio={bio}
                            setBio={setBio}
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            tempBio={tempBio}
                            setTempBio={setTempBio}
                        />
                    </>
                );
            case 'matching':
                return (
                    <MatchPreferences
                        matchPreferences={matchPreferences}
                        setMatchPreferences={setMatchPreferences}
                        photos={photos}
                        setPhotos={setPhotos}
                        currentPhotoIndex={currentPhotoIndex}
                        setCurrentPhotoIndex={setCurrentPhotoIndex}
                        onNextPhoto={handleNextPhoto}
                        onPrevPhoto={handlePrevPhoto}
                    />
                );
            case 'notifications':
                return (
                    <NotificationSettings
                        notifications={notifications}
                        setNotifications={setNotifications}
                    />
                );
            case 'security':
                return (
                    <>
                        <SecuritySettings />
                        <DeleteAccount />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="mb-8 overflow-x-auto flex flex-col gap-5">
                <div className="flex whitespace-nowrap min-w-full md:min-w-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                        py-4 px-4 md:px-4 relative flex-1 md:flex-none
                        text-sm md:text-base
                        ${activeTab === tab.id
                                    ? 'text-amber-500'
                                    : 'text-zinc-400 hover:text-zinc-200'
                                }
                    `}
                        >
                            <div className="flex items-center justify-center gap-2">
                                {tab.icon}
                                <span>{tab.label}</span>
                            </div>
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></div>
                            )}
                        </button>
                    ))}
                </div>
                <div className="space-y-8 pb-10">
                    {renderContent()}
                </div>
            </div>


        </>
    );
};

export default Settings; 