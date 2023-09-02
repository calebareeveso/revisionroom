"use client"
import { BiExit } from 'react-icons/bi';

const EndRoomButton = ({ endRoom }) => {
  return (
    <button
      onClick={endRoom}
      className="ml-2 sm:ml-0 flex border-red-500 text-red-500 border-2 rounded-lg bg-red-50 px-2 xs:px-4 py-1 xs:py-2 text-sm sm:text-base">
      End Room
    </button>
  );
};

export default EndRoomButton;