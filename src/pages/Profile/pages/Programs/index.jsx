import Navbar from '../../../../components/Navbar'
import Container from '../../../../components/shared/Container'
import ProfileNavigation from '../../components/ProfileNavigation'
import EditProgramModal from './components/EditProgramModal';
import CreateProgramModal from './components/CreateProgramModal';
import { useState } from 'react';
import { IoAdd, IoBarbell, IoCalendarOutline, IoTimeOutline } from 'react-icons/io5'

const Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [programs, setPrograms] = useState([
        {
            id: 1,
            name: "Push Pull Legs",
            description: "6 günlük bölgesel antrenman programı",
            workoutCount: 18,
            duration: "60-90 dk",
            startDate: "01.01.2025",
            status: "active"
        },
        {
            id: 2,
            name: "Full Body",
            description: "3 günlük tam vücut antrenman programı",
            workoutCount: 12,
            duration: "45-60 dk",
            startDate: "15.02.2025",
            status: "draft"
        }
    ]);

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
        setIsModalOpen(true);
    };

    const handleCreateProgram = (newProgram) => {
        const program = {
            ...newProgram,
            id: Date.now(),
            workoutCount: 0,
            startDate: new Date().toLocaleDateString('tr-TR'),
            status: 'draft'
        };
        setPrograms([...programs, program]);
    };

    return (
        <>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl text-white">Antrenman Programlarım</h2>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors text-sm font-medium"
                    >
                        <IoAdd className="text-lg" />
                        Yeni Program
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-5">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            onClick={() => handleProgramClick(program)}
                            className="bg-zinc-800 rounded-lg p-6 space-y-4 hover:bg-zinc-700/80 transition-colors cursor-pointer"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-medium">{program.name}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full ${program.status === 'active'
                                        ? 'bg-green-500/20 text-green-500'
                                        : 'bg-zinc-600/50 text-zinc-400'
                                        }`}>
                                        {program.status === 'active' ? 'Aktif' : 'Taslak'}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-400">{program.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <IoBarbell className="text-lg" />
                                    <span className="text-sm">{program.workoutCount} antrenman</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <IoTimeOutline className="text-lg" />
                                    <span className="text-sm">{program.duration}</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-zinc-700">
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <IoCalendarOutline className="text-lg" />
                                    <span className="text-sm">Başlangıç: {program.startDate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {programs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-zinc-400">Henüz bir antrenman programı oluşturmadınız.</p>
                    </div>
                )}

                <CreateProgramModal
                    isOpen={isCreateModalOpen}
                    setIsOpen={setIsCreateModalOpen}
                    onSave={handleCreateProgram}
                />

                <EditProgramModal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    program={selectedProgram}
                />
            </div>
        </>
    )
}

export default Programs 