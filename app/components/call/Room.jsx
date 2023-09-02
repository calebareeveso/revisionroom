"use client"
import { selectPeers, useHMSStore } from '@100mslive/hms-video-react';

import Controls from './Room/Controls';
import ListenerTile from './User/ListenerTile';
import SpeakerTile from './User/SpeakerTile';
import RoomNotification from './User/RoomNotification';
const Room = ({data}) => {
    
  const peers = useHMSStore(selectPeers);

  const speakersAndModerators = peers.filter(
    (peer) => peer.roleName === 'speaker' || peer.roleName === 'moderator'
  );
  const listenersAndHandraised = peers.filter(
    (peer) => peer.roleName === 'listener' || peer.roleName === 'handraise'
  );

  return (
    <div className="flex flex-col bg-white ">
      <RoomNotification/>
      <div className="flex-1">
      <div className="flex my-3">
              <h5 className="font-dm-sans text-black text-xl font-medium">Eggheads</h5>{" "}
              <span className="ml-1 py-1 px-2 bg-secondaryBg rounded-[10px] text-primary">
              {speakersAndModerators.length}
              </span>
      </div>

      <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 lg:grid-cols-7 gap-4 min-h-[1rem]">
          {speakersAndModerators.map((speaker) => (
            <SpeakerTile key={speaker.id} peer={speaker} data={data}/>
          ))}
        </div>

       {listenersAndHandraised.length > 0 && <div className="flex my-3">
                <h5 className="font-dm-sans text-xl text-black font-medium">Listeners</h5>{" "}
                <span className="ml-1 py-1 px-2 bg-secondaryBg rounded-[10px] text-primary">
                {listenersAndHandraised.length}
                </span>
        </div>}
        {listenersAndHandraised.length > 0 &&  <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 lg:grid-cols-7 gap-4">
          {listenersAndHandraised.map((listener) => (
            <ListenerTile key={listener.id} peer={listener} data={data}/>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default Room;