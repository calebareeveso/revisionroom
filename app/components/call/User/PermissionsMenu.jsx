"use client"
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  useHMSStore,
  useHMSActions,
  selectLocalPeer,
} from '@100mslive/hms-video-react';

const PermissionsMenu = ({ audioTrack, id }) => {
  const hmsActions = useHMSActions();

  const mutePeer = () => {
    hmsActions.setRemoteTrackEnabled(audioTrack, false);
  };

  const changeRole = (role) => {
    hmsActions.changeRole(id, role, true);
  };

  const localPeer = useHMSStore(selectLocalPeer);

  const [showMenu, setShowMenu] = useState(false);

  const btnClass = 'w-full text-sm font-semibold py-1.5 px-3';

  const isModerator = localPeer.roleName === 'moderator';

  if (isModerator) {
    return (
      <div className="absolute right-1 top-1 z-[1]">
        <AiOutlineMenu
          className="ml-auto cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="mt-1 bg-white text-black py-1 rounded-lg shadow-sm divide-y-2 divide-secondaryBg">
            <button className={btnClass} onClick={() => mutePeer()}>
              Mute
            </button>
            <button className={`${btnClass} text-red-500`} onClick={async () => {
    await hmsActions.removePeer(id, 'Good Bye');}}>
              Remove
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default PermissionsMenu;