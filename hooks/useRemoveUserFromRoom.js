import React, { useEffect, useState } from "react";
// change route
import { usePathname, useSearchParams } from "next/navigation";
// auth
import { useAuthContext } from "../app/context/authContext";
// lib
import getRandomNumbers from "../utils/getRandomNumbers";
// firestore
import addRoomListeners from "../utils/firebase/firestore/update/roomListenersData";
import removeRoomListeners from "../utils/firebase/firestore/delete/roomListenersData";
import getRoomData from "../utils/firebase/firestore/get/roomData";
import deleteRoomData from "../utils/firebase/firestore/delete/roomData";
import removeRoomspeaker from "../utils/firebase/firestore/delete/roomSpeakerData";
function useRemoveUserFromRoom() {
  const { user } = useAuthContext();
  // routing
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let userRoomPathname = localStorage.getItem("user-room-pathname");
    (async () => {
      if (userRoomPathname !== null) {
        await removeUserFromRoom(userRoomPathname.slice(6));
        if (userRoomPathname) {
          localStorage.removeItem("user-room-pathname"); //null
        }
      }
    })();
    // return () => {
    //   alert(`is this feed: ${userRoomPathname}`);
    // };
  }, [pathname, searchParams]);

  // disable room ////////////////////////////////////////////////
  const disableRoom = async (roomId) => {
    const response = await fetch("/api/disable-room", {
      method: "POST",
      body: JSON.stringify({ roomId: roomId }),
    });
    const { name } = await response.json();
  };
  // remove sepaker ////////////////////////////////////////////////
  const removeSpeaker = async (roomId, speakerData) => {
    const roomData = {
      roomId: roomId,
      profile: speakerData,
    };
    const { result, error } = await removeRoomspeaker(roomData);
  };
  // remove Room Listeners ////////////////////////////////////////////////
  const removeUserFromRoom = async (roomId) => {
    // if (pathname.includes("room")) {}

    const { result: roomDataResult, error: roomDataError } = await getRoomData(
      roomId
    );
    let oldRoomData;
    if (roomDataResult !== null) {
      oldRoomData = roomDataResult.data();
    } else {
      oldRoomData = [];
    }
    const profilesArray =
      oldRoomData?.listeners && oldRoomData?.listeners?.profiles
        ? oldRoomData.listeners.profiles
        : [];
    const matchedProfiles = profilesArray.filter(
      (profile) =>
        profile.name.toLowerCase() === user?.displayName.toLowerCase()
    );

    setTimeout(() => {
      console.log("matchedProfiles[0]", matchedProfiles[0]);
    }, 3000);
    const roomData = {
      roomId: roomId,
      profile: matchedProfiles[0],
    };
    const { result, error } = await removeRoomListeners(roomData);

    if (oldRoomData?.speakers?.profiles?.length > 0) {
      const roomSpeakers = oldRoomData.speakers.profiles.filter(
        (profile) => profile?.id === user?.uid
      );
      if (roomSpeakers.length == 1) {
        // alert(`DELETING ROOM ID:: ${roomId}`);
        await deleteRoomData(roomId);
        await disableRoom(roomId);
      } else {
        await removeSpeaker(roomId, roomSpeakers[0]);
      }
    }
  };

  return;
}
export default useRemoveUserFromRoom;
