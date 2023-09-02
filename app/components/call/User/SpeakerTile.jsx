"use client"
import { FiMic, FiMicOff } from 'react-icons/fi';
import {
  useHMSStore,
  selectPeerAudioByID,
  selectIsPeerAudioEnabled,
} from '@100mslive/hms-video-react';

import PermissionsMenu from './PermissionsMenu';

const SpeakerTile = ({ peer , data}) => {
  const isSpeaking = useHMSStore(selectPeerAudioByID(peer.id)) > 0;
  const isMicOn = useHMSStore(selectIsPeerAudioEnabled(peer.id));
  const capitalizeString = (inputString, allWords)=>{
    if (allWords) {
      return inputString.split(' ').map(word => capitalizeString(word)).join('');
   } else {
      return inputString.charAt(0).toUpperCase() + inputString.slice(1);
   }
 }
const photoURL = `https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=398DFF&seed=${capitalizeString(peer.name, true)}`
  return (
    <div className="relative">
      <PermissionsMenu id={peer.id} audioTrack={peer.audioTrack} />
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div
          className={
            isSpeaking
              ? 'ring rounded-full transition ring-3 ring-primary p-0.5'
              : 'p-0.5'
          }
        >
          <div className="my-2 text-center inline-flex flex-col justify-around">
                     <img
                        key={photoURL}
                        className=" w-full border-[1px] border-primary rounded-[100%] mx-auto"
                        src={photoURL}
                        loading={"lazy"}
                      />
                      <span className="text-secondary text-[12px] xs:text-sm truncate capitalize">
                        {peer.name}
                      </span>
                    </div>
        </div> 
      </div>
    </div>
  );
};

export default SpeakerTile;