"use client"
import { MdOutlineFrontHand } from 'react-icons/md';

const HandRaiseButton = ({ toggleHandRaise, isHandRaised }) => {
  return (
    <button  className={`${
        isHandRaised ? 'bg-green-500' : null
      } flex items-center sm:ml-0 bg-primary font-dm-sans text-white border-[1px] rounded-[6px] px-2 xs:px-2 py-1 xs:py-1 text-sm sm:text-sm">
      `}
      onClick={toggleHandRaise}
     
    >
      <MdOutlineFrontHand className="h-5 w-5 text-white" />
    </button>
  );
};

export default HandRaiseButton;