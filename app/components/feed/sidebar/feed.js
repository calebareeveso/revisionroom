"use client";
import React, { useEffect, useState } from "react";
import RoomCard from "../card/room/index";
// mantine
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
// mantine notification
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
// react-tag-input-component
import { TagsInput } from "react-tag-input-component";
// auth
import { useAuthContext } from "../../../context/authContext";
// routing
import { useRouter } from "next/navigation";
// testing
import { getAuth } from "firebase/auth";
import firebase_app from "../../../../utils/firebase";
// firesore
import addRoomData from "../../../../utils/firebase/firestore/add/roomData";
import addChatRoomData from "../../../../utils/firebase/firestore/add/roomChatData";
// random character id
import ShortUniqueId from "short-unique-id";
// listenToAllRoomData
import listenToAllRoomData from "../../../../utils/firebase/firestore/get/realTime/allRoomData";
// Reassign User To Room
import useRemoveUserFromRoom from "../../../../hooks/useRemoveUserFromRoom";
export default function feed({ className, data }) {
  const [allRoomData, setAllRoomData] = useState([]);
  useEffect(() => {
    const unsubscribe = listenToAllRoomData((data) => {
      setAllRoomData(data);
      console.log("listenToAllRoomData:", data);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const router = useRouter();
  // states
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedTag, setSelectedTag] = useState(["maths"]);
  // room name
  const [roomName, setRoomName] = useState("");
  // room description
  const [roomDescription, setRoomDescription] = useState("");
  // handle auth
  const { user } = useAuthContext();
  // testing
  const auth = getAuth(firebase_app);
  useEffect(() => {
    console.log(`Texting  auth.currentUser`, auth?.currentUser);
    console.log(`Texting  auth.currentUser.uid`, auth?.currentUser?.uid);
    console.log("USER log from feed", user);
    if (user == null) router.push("/signin");
  }, [user]);
  // craete new room
  const createNewRoom = async (event) => {
    const uid = new ShortUniqueId({ length: 6 });
    event.preventDefault();
    console.log("roomName:", roomName);
    console.log("roomDescription:", roomDescription);
    console.log("selectedTag:", selectedTag);

    const uniqueId = uid();
    const chatRoomData = {
      roomId: uniqueId,
      messages: [],
    };
    const { result: chatRoomDataResult, error: chatRoomDataError } =
      await addChatRoomData(chatRoomData);
    const roomData = {
      name: roomName,
      description: roomDescription,
      tags: selectedTag,
      roomId: uniqueId,
      listeners: {
        profiles: [
          // {
          // name: "",
          // photoURL: "",
          // school: "",
          // id: "",
          // },
        ],
      },
      speakers: {
        profiles: [
          {
            name: user?.displayName,
            photoURL: user?.photoURL,
            id: auth?.currentUser?.uid,
          },
        ],
      },
      createdAt: new Date().toISOString(),
      createdBy: {
        name: user?.displayName,
        photoURL: user?.photoURL,
        id: auth?.currentUser?.uid,
      },
    };
    const { result, error } = await addRoomData(roomData);
    console.log("addRoomData result", result);
    console.log("addRoomData error", error);
    if (result !== null) router.push(`/room/${uniqueId}`);
  };

  // useRemoveUserFromRoom
  useRemoveUserFromRoom();
  return (
    <aside className={`${className} px-2 md:mr-0`}>
      <Notifications position="top-right" />
      <div className="rounded-lg bg-white px-4 py-2">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-dm-sans text-md md:text-xl font-medium mb-2">
            Your Feed
          </h4>
          <Modal
            opened={opened}
            onClose={close}
            title="Create a new Room"
            centered
          >
            <div className="flex flex-col space-y-2">
              <div>
                <label
                  className="font-dm-sans text-sm mb-2 text-secondary"
                  htmlFor="roomName"
                >
                  Room Name
                </label>
                <input
                  onChange={(event) => setRoomName(event.target.value)}
                  value={roomName}
                  id="roomName"
                  type="text"
                  className="bg-secondaryBg focus:outline-none px-3 py-2 text-gray-900 sm:text-sm w-full rounded-[4px]"
                  placeholder="What's the room name?"
                />
              </div>
              <div>
                <label
                  className="font-dm-sans text-sm mb-2 text-secondary"
                  htmlFor="roomName"
                >
                  Room description
                </label>
                <input
                  onChange={(event) => setRoomDescription(event.target.value)}
                  value={roomDescription}
                  id="roomDescription"
                  type="text"
                  className="bg-secondaryBg focus:outline-none px-3 py-2 text-gray-900 sm:text-sm w-full rounded-[4px]"
                  placeholder="What's this room for?"
                />
              </div>
              <div>
                <label
                  className="font-dm-sans text-sm mb-2 text-secondary"
                  htmlFor="roomTag"
                >
                  Room tags
                </label>
                {/* https://codesandbox.io/s/react-tag-input-component-rgf97?file=/src/App.js:68-93 */}
                <TagsInput
                  beforeAddValidate={(text) => {
                    if (/\s/g.test(text)) {
                      // alert(`Remove white space. eg: "a-level" NOT "a level"`);
                      Notifications.show({
                        id: "notification",
                        withCloseButton: true,
                        autoClose: 5000,
                        // title: "Error!!",
                        message: `Remove white space. eg: "a-level" NOT "a level`,
                        color: "red",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"
                            />
                          </svg>
                        ),
                        className: "text-white",
                        // style: { backgroundColor: "red" },
                        styles: {
                          root: {
                            backgroundColor: "red",
                            borderColor: "red",

                            "&::before": { backgroundColor: "#ffffff" },
                          },

                          title: {
                            color: "#ffffff",
                          },
                          description: {
                            color: "#ffffff",
                            fontWeight: "400",
                            fontFamily: "'DM Sans', sans-serif",
                            textTransform: "capitalize",
                          },
                          closeButton: {
                            color: "#ffffff",
                          },
                        },
                        sx: { backgroundColor: "red" },
                        loading: false,
                      });
                      return false;
                    }
                    return true;
                  }}
                  id="roomTag"
                  value={selectedTag}
                  onChange={setSelectedTag}
                  name="roomTag"
                  placeHolder="enter tags"
                  classNames={{
                    tag: "font-dm-sans text-sm",
                    input: "font-dm-sans",
                  }}
                />
              </div>
              <button
                onClick={createNewRoom}
                className="flex justify-around rounded-[5px] bg-primary text-white px-3 py-2"
              >
                <span className="font-dm-sans mx-auto items-center flex space-x-2 text-">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Create Room</span>
                </span>
              </button>
            </div>
          </Modal>

          <button
            onClick={open}
            className="flex items-center ml-2 sm:ml-0 border-primary text-primary border-[1px] rounded-[6px] px-2 xs:px-2 py-1 xs:py-1 text-sm sm:text-sm"
          >
            <span className="pr-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49996 0.416626C3.58996 0.416626 0.416626 3.58996 0.416626 7.49996C0.416626 11.41 3.58996 14.5833 7.49996 14.5833C11.41 14.5833 14.5833 11.41 14.5833 7.49996C14.5833 3.58996 11.41 0.416626 7.49996 0.416626ZM10.3333 8.20829H8.20829V10.3333C8.20829 10.7229 7.88954 11.0416 7.49996 11.0416C7.11038 11.0416 6.79163 10.7229 6.79163 10.3333V8.20829H4.66663C4.27704 8.20829 3.95829 7.88954 3.95829 7.49996C3.95829 7.11038 4.27704 6.79163 4.66663 6.79163H6.79163V4.66663C6.79163 4.27704 7.11038 3.95829 7.49996 3.95829C7.88954 3.95829 8.20829 4.27704 8.20829 4.66663V6.79163H10.3333C10.7229 6.79163 11.0416 7.11038 11.0416 7.49996C11.0416 7.88954 10.7229 8.20829 10.3333 8.20829Z"
                  fill="#398DFF"
                />
              </svg>
            </span>
            <span>Create Room</span>
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          {allRoomData
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map(({ listeners, name, roomId, description, tags }) => (
              <RoomCard
                key={roomId}
                listeners={listeners}
                roomId={roomId}
                name={name}
                description={description}
                tags={tags}
              />
            ))}
        </div>
      </div>
    </aside>
  );
}
