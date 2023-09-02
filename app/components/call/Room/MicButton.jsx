"use client"
import { FiMic, FiMicOff } from 'react-icons/fi';

const MicButton = ({ isMicOn, toggleMic }) => {
  return (
    <button onClick={toggleMic} className="bg-primary p-3 rounded-lg">
      {isMicOn ? (
        <FiMic className="h-5 w-5 text-white" />
      ) : (
        <FiMicOff className="h-5 w-5 text-white" />
      )}
    </button>
  );
};

export default MicButton;