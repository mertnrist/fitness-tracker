import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Modal from '../../../components/shared/Modal';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-zinc-800 p-3 border border-zinc-700 rounded-sm">
                <p className="text-amber-400">{label}</p>
                <p className="text-white">{`Ağırlık: ${payload[0].value} kg`}</p>
                {payload[0].payload.notes && (
                    <p className="text-zinc-400 text-sm mt-1">{payload[0].payload.notes}</p>
                )}
            </div>
        );
    }
    return null;
};

const ViewExerciseModal = ({ isOpen, setIsOpen, selectedExercise, formatDate }) => {
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={`${selectedExercise?.name} - İlerleme`}
            size="fullscreen"
        >
            {/* Modal içeriği buraya */}
            {/* Mevcut ViewModal içeriğini buraya taşıyın */}
        </Modal>
    );
};

export default ViewExerciseModal; 