"use client"
import { useRouter } from 'next/navigation'
import {
    useHMSStore,
    useHMSActions,
    selectIsLocalAudioEnabled,
    selectLocalPeer,
    selectPermissions
  } from '@100mslive/hms-video-react';
  
  import MicButton from './MicButton';
  import ExitButton from './ExitButton';
 
  import EndRoomButton from './EndRoomButton';
  import HandRaiseButton from './HandRaiseButton';
  
  const Controls = () => {
    const permissions = useHMSStore(selectPermissions);

    const router = useRouter()
    const hmsActions = useHMSActions();
    const isMicOn = useHMSStore(selectIsLocalAudioEnabled);
    const peer = useHMSStore(selectLocalPeer);
  
    const isListenerOrHandraised =
      peer?.roleName === 'listener' || peer?.roleName === 'handraise';
  
    return (
        <div className="rounded-b-lg bg-white px-4 py-2 flex justify-between border-secondaryBg border-x-8 xs:border-x-0 border-b-8 md:border-t-2 fixed xs:static bottom-0 right-0 left-0">
        
        {!isListenerOrHandraised && (
          <MicButton
            isMicOn={isMicOn}
            toggleMic={() => hmsActions.setLocalAudioEnabled(!isMicOn)}
          />
        )}
        {isListenerOrHandraised && (
          <HandRaiseButton
            isHandRaised={peer.roleName === 'handraise'}
            toggleHandRaise={() =>
              hmsActions.changeRoleOfPeer(
                peer.id,
                peer.roleName === 'listener' ? 'handraise' : 'listener',
                false
              )
            }
          />
        )}
        {peer?.roleName === 'moderator' ? <EndRoomButton endRoom={async ()=>{
            const lock = false; // set to true to disallow rejoins
            const reason = 'party is over';
            await hmsActions.endRoom(lock, reason);

            router.replace('/feed')
        }}/> :
        <ExitButton exitRoom={() => {hmsActions.leave(); router.replace('/feed')}} />}
      </div>
    );
  };
  
  export default Controls;