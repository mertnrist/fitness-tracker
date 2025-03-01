import Navbar from '../../../../components/Navbar';
import Container from '../../../../components/shared/Container'
import ProfileNavigation from '../../components/ProfileNavigation';
import ExerciseTable from '../../components/ExerciseTable';
import ViewExerciseModal from '../../components/Modals/ViewExerciseModal';
import EditExerciseModal from '../../components/Modals/EditExerciseModal';

import { useState } from 'react'


const Dashboard = () => {
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newWeight, setNewWeight] = useState('');
    const [newNotes, setNewNotes] = useState('');
    const [nextWeight, setNextWeight] = useState('');
    const [nextNotes, setNextNotes] = useState('');

    const exercises = [
        {
            id: 1,
            name: "Bench Press",
            sets: 4,
            reps: "8-10",
            history: [
                {
                    date: "2024-10-20",
                    weight: 109,
                    notes: "Son 2 tekrarda zorlandım, form bozuldu"
                },
                {
                    date: "2024-06-20",
                    weight: 108.5,
                    notes: "Son 2 tekrarda zorlandım, form bozuldu"
                },
                {
                    date: "2024-04-20",
                    weight: 108,
                    notes: "Son 2 tekrarda zorlandım, form bozuldu"
                },
                {
                    date: "2024-03-20",
                    weight: 100,
                    notes: "Son 2 tekrarda zorlandım, form bozuldu"
                },
            ]
        },
        {
            id: 2,
            name: "Squat",
            sets: 5,
            reps: "5-5-5",
            history: [
                {
                    date: "2024-03-19",
                    weight: 120,
                    notes: "Isınma setleri çok önemli, kalça esnekliği arttı"
                },
            ]
        },
    ];

    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise);
        setIsViewModalOpen(true);
    };

    const handleEditClick = (exercise) => {
        setSelectedExercise(exercise);
        const suggestion = getSuggestedWeight(exercise);
        if (suggestion) {
            setNewWeight(suggestion.lastWeight.toString());
            setNextWeight(suggestion.suggestedWeight.toString());
        }
        setIsEditModalOpen(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log('Yeni kayıt:', {
            exerciseId: selectedExercise?.id,
            currentSession: {
                weight: parseFloat(newWeight),
                notes: newNotes,
                date: new Date().toISOString().split('T')[0]
            },
            nextSession: {
                plannedWeight: parseFloat(nextWeight),
                notes: nextNotes
            }
        });

        setIsEditModalOpen(false);
        setNewWeight('');
        setNewNotes('');
        setNextWeight('');
        setNextNotes('');
    };

    const getSuggestedWeight = (exercise) => {
        if (!exercise?.history?.length) return null;

        const lastWeight = exercise.history[0].weight;
        const increment = lastWeight < 60 ? 2.5 : lastWeight < 100 ? 1.5 : 1;

        return {
            lastWeight,
            suggestedWeight: lastWeight + increment
        };
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}`;
    };

    return (
        <>
            <ExerciseTable
                exercises={exercises}
                onViewClick={handleExerciseClick}
                onEditClick={handleEditClick}
            />

            <ViewExerciseModal
                isOpen={isViewModalOpen}
                setIsOpen={setIsViewModalOpen}
                selectedExercise={selectedExercise}
                formatDate={formatDate}
            />

            <EditExerciseModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                selectedExercise={selectedExercise}
                newWeight={newWeight}
                setNewWeight={setNewWeight}
                newNotes={newNotes}
                setNewNotes={setNewNotes}
                nextWeight={nextWeight}
                setNextWeight={setNextWeight}
                nextNotes={nextNotes}
                setNextNotes={setNextNotes}
                handleEditSubmit={handleEditSubmit}
                getSuggestedWeight={getSuggestedWeight}
            />
        </>
    )
}

export default Dashboard
