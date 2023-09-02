"use client"
import { BiExit } from 'react-icons/bi';

const ExitButton = ({ exitRoom }) => {
  return (
    <button
      onClick={exitRoom}
      className="ml-2 sm:ml-0 flex border-primary text-primary border-2 rounded-lg bg-secondaryBg px-2 xs:px-4 py-1 xs:py-2 text-sm sm:text-base">
      Leave
    </button>
  );
};

export default ExitButton;