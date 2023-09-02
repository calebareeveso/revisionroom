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
import removeRoomspeaker from "../utils/firebase/firestore/delete/roomSpeakerData";
import deleteRoomData from "../utils/firebase/firestore/delete/roomData";
import addRoomSpeakers from "@/utils/firebase/firestore/update/roomSpeakersData";

function useReassignUserRoom(data) {
  const { user } = useAuthContext();
  // routing
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let userRoomPathname = localStorage.getItem("user-room-pathname");
    // alert(`old: ${userRoomPathname.slice(6)} | new: ${pathname.slice(6)}`);
    (async () => {
      if (pathname.includes("room")) {
        if (userRoomPathname !== null) {
          if (pathname !== userRoomPathname) {
            await removeUserFromRoom(userRoomPathname.slice(6));
            await addUserToRoom(pathname.slice(6));
            localStorage.setItem("user-room-pathname", pathname);
          } else if (userRoomPathname == pathname) {
            await addUserToRoom(pathname.slice(6));
          }
        } else {
          await addUserToRoom(pathname.slice(6));
          localStorage.setItem("user-room-pathname", pathname);
        }
      } else {
        removeUserFromRoom(userRoomPathname.slice(6));
        await removeSpeaker(userRoomPathname.slice(6));
        if (userRoomPathname) {
          localStorage.removeItem("user-room-pathname");
        }
      }
    })();

    // (async () => {
    //   alert(user?.uid);
    // })();
    //
    //
    // return () => {
    //   alert(`is this feed: ${userRoomPathname}`);
    // };
  }, [pathname, searchParams]);

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
      oldRoomData.listeners && oldRoomData.listeners.profiles
        ? oldRoomData.listeners.profiles
        : [];
    const matchedProfiles = profilesArray.filter(
      (profile) =>
        profile.name.toLowerCase() === user?.displayName.toLowerCase()
    );

    const roomData = {
      roomId: roomId,
      profile: matchedProfiles[0],
    };
    const { result, error } = await removeRoomListeners(roomData);

    if (oldRoomData.speakers.profiles.length > 0) {
      const roomSpeakers = oldRoomData.speakers.profiles.filter(
        (profile) => profile?.id === user?.uid
      );
      if (roomSpeakers.length == 1) {
        // alert(`DELETING ROOM ID:: ${roomId}`);
        await deleteRoomData(roomId);
      } else {
        await removeSpeaker(roomId, roomSpeakers[0]);
      }
    }
  };

  // Add Room Listeners  ////////////////////////////////////////////////
  const addUserToRoom = async (roomId) => {
    function filterListeners(data, input) {
      const profilesArray =
        data.listeners && data.listeners.profiles
          ? data.listeners.profiles
          : [];
      const matchedProfiles = profilesArray.filter(
        (profile) => profile.name.toLowerCase() === input.toLowerCase()
      );
      return matchedProfiles.length > 0;
    }
    function filterSpeakers(data, input) {
      const profilesArray =
        data.speakers && data.speakers.profiles ? data.speakers.profiles : [];
      const matchedProfiles = profilesArray.filter(
        (profile) => profile.name.toLowerCase() === input.toLowerCase()
      );
      return matchedProfiles.length > 0;
    }
    if (
      filterListeners(data, user?.displayName) !== true &&
      filterSpeakers(data, user?.displayName) !== true
    ) {
      const roomData = {
        roomId: roomId,
        profile: {
          name: user?.displayName,
          photoURL: user?.photoURL,
          id: user?.uid,
        },
      };
      const { result, error } = await addRoomListeners(roomData);
    }

    return;
  };

  return;
}
export default useReassignUserRoom;
