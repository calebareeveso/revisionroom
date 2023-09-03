"use client";
import Reactt, { useEffect, useState } from "react";
import BasicCard from "../card/basic";
import Minimal from "../card/room/minimal";
// listenToAllRoomData
import listenToAllRoomData from "../../../../utils/firebase/firestore/get/realTime/allRoomData";
export default function Popular({ className, data, slice }) {
  const [allRoomData, setAllRoomData] = useState([]);
  const [loadRoomData, setLoadRoomData] = useState(false);
  useEffect(() => {
    const unsubscribe = listenToAllRoomData((data) => {
      setAllRoomData(data);
      setLoadRoomData(true);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <aside
      className={`${className} ${
        loadRoomData && allRoomData.length > 0 ? "block" : "hidden md:block"
      }`}
    >
      <div className="rounded-lg bg-white px-4 py-2 my-4 md:my-0 mx-2 md:mr-0">
        <h4 className="font-dm-sans text-md md:text-xl font-medium mb-2">
          Popular Rooms
        </h4>

        {loadRoomData && (
          <div className="flex space-x-2 w-full overflow-x-scroll md:flex-col md:space-x-0 md:space-y-3 pb-2 md:pb-0">
            {allRoomData.slice(0, slice).map(({ listeners, name, roomId }) => (
              <Minimal
                key={roomId}
                number={listeners.profiles.length}
                name={name}
                id={roomId}
              />
            ))}

            {allRoomData.length < 1 && (
              <div className="flex justify-around items-center h-20 ">
                {" "}
                <h3 className="relative">
                  <span class="pulsating-circle"></span>{" "}
                  <span className="ml-2 text-sm">Rooms will appear here</span>
                </h3>{" "}
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
