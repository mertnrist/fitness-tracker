import Modal from '../../../components/shared/Modal';

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
            {/* Modal içeriği buraya */}
            {/* Mevcut EditModal içeriğini buraya taşıyın */}
        </Modal>
    );
};

export default EditExerciseModal; 