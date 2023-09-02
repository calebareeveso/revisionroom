"use client"
import HandRaiseBadge from './HandRaiseBadge';
import PermissionsMenu from './PermissionsMenu';

const ListenerTile = ({ peer, data }) => {
    const photoURL = `https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=398DFF&seed=${peer.name}`
  return (
    <div className="relative w-100 px-3 py-2">
      <PermissionsMenu id={peer.id} audioTrack={peer.audioTrack} />
      <div className="flex flex-col gap-y-2 justify-center items-center">
      <div className="my-2 text-center inline-flex flex-col justify-around">
                     <img
                        key={photoURL}
                        className=" h-14 w-14 border-[1px] border-primary rounded-[100%] mx-auto"
                        src={photoURL}
                        loading={"lazy"}
                      />
                      <span className="text-secondary text-[12px] xs:text-sm truncate ">
                        {peer.name}
                      </span>
                    </div>
      </div>
      {peer.roleName === 'handraise' && <HandRaiseBadge />}
    </div>
  );
};

export default ListenerTile;