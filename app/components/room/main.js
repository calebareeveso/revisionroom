"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
// mantine
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Modal } from "@mantine/core";
import Chat from "./sidebar/chat";
// hooks
import useWindowSize from "../../../hooks/usewndowsize";
// firesore
import getRoomData from "../../../utils/firebase/firestore/get/roomData";
// auth
import { useAuthContext } from "../../context/authContext";
// routing
import { useRouter } from "next/navigation";
// addRoomListeners
import addRoomListeners from "../../../utils/firebase/firestore/update/roomListenersData";
import removeRoomListeners from "../../../utils/firebase/firestore/delete/roomListenersData";
import listenToRoomData from "../../../utils/firebase/firestore/get/realTime/roomData";
// random lib
import getRandomNumbers from "../../../utils/getRandomNumbers";
// change route
import { usePathname, useSearchParams } from "next/navigation";
import { useRouteChange } from "nextjs13-router-events";
// Reassign User to new Room
import useReassignUserRoom from "../../../hooks/useReassignUserRoom";

// https://socket.dev/npm/package/uyem
const Uyem = dynamic(() => import("uyem"));
import "uyem/packages/client/dist/styles.css";
export default function mainRoom({ className, data, roomId }) {
  const router = useRouter();
  // handle auth
  const { user } = useAuthContext();

  // Remove Room Listeners
  // handle when user leave the page
  // useRouteChange({
  //   onRouteChangeStart: async () => {
  //     const profilesArray =
  //       data.listeners && data.listeners.profiles
  //         ? data.listeners.profiles
  //         : [];
  //     const matchedProfiles = profilesArray.filter(
  //       (profile) =>
  //         profile.name.toLowerCase() === user?.displayName.toLowerCase()
  //     );

  //     const roomData = {
  //       roomId: roomId,
  //       profile: matchedProfiles[0],
  //     };
  //     const { result, error } = await removeRoomListeners(roomData);

  //     // alert(`pathname:${pathname} | roomId:${roomId}`);
  //   },
  //   onRouteChangeComplete: async () => {
  //     function filterListeners(data, input) {
  //       const profilesArray =
  //         data.listeners && data.listeners.profiles
  //           ? data.listeners.profiles
  //           : [];
  //       const matchedProfiles = profilesArray.filter(
  //         (profile) => profile.name.toLowerCase() === input.toLowerCase()
  //       );
  //       return matchedProfiles.length > 0;
  //     }
  //     function filterSpeakers(data, input) {
  //       const profilesArray =
  //         data.speakers && data.speakers.profiles ? data.speakers.profiles : [];
  //       const matchedProfiles = profilesArray.filter(
  //         (profile) => profile.name.toLowerCase() === input.toLowerCase()
  //       );
  //       return matchedProfiles.length > 0;
  //     }
  //     if (
  //       filterListeners(data, user?.displayName) !== true &&
  //       filterSpeakers(data, user?.displayName) !== true
  //     ) {
  //       const roomData = {
  //         roomId: roomId,
  //         profile: {
  //           name: user?.displayName,
  //           photoURL: user?.photoURL,
  //           id: getRandomNumbers(),
  //         },
  //       };
  //       const { result, error } = await addRoomListeners(roomData);
  //     }
  //   },
  // });

  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // // remove Room Listeners ////////////////////////////////////////////////
  // useEffect(() => {
  //   return () => {
  //     if (pathname.includes("room")) {
  //       (async () => {
  //         const profilesArray =
  //           data.listeners && data.listeners.profiles
  //             ? data.listeners.profiles
  //             : [];
  //         const matchedProfiles = profilesArray.filter(
  //           (profile) =>
  //             profile.name.toLowerCase() === user?.displayName.toLowerCase()
  //         );

  //         const roomData = {
  //           roomId: roomId,
  //           profile: matchedProfiles[0],
  //         };
  //         const { result, error } = removeRoomListeners(roomData);
  //       })();
  //     }
  //   };
  // }, [pathname, searchParams]);

  useEffect(() => {
    if (user == null) router.push("/signin");
  }, [user]);

  // // Add Room Listeners  ////////////////////////////////////////////////
  // useEffect(() => {
  //   (async () => {
  //     function filterListeners(data, input) {
  //       const profilesArray =
  //         data.listeners && data.listeners.profiles
  //           ? data.listeners.profiles
  //           : [];
  //       const matchedProfiles = profilesArray.filter(
  //         (profile) => profile.name.toLowerCase() === input.toLowerCase()
  //       );
  //       return matchedProfiles.length > 0;
  //     }
  //     function filterSpeakers(data, input) {
  //       const profilesArray =
  //         data.speakers && data.speakers.profiles ? data.speakers.profiles : [];
  //       const matchedProfiles = profilesArray.filter(
  //         (profile) => profile.name.toLowerCase() === input.toLowerCase()
  //       );
  //       return matchedProfiles.length > 0;
  //     }
  //     if (
  //       filterListeners(data, user?.displayName) !== true &&
  //       filterSpeakers(data, user?.displayName) !== true
  //     ) {
  //       const roomData = {
  //         roomId: roomId,
  //         profile: {
  //           name: user?.displayName,
  //           photoURL: user?.photoURL,
  //           id: getRandomNumbers(),
  //         },
  //       };
  //       const { result, error } = await addRoomListeners(roomData);
  //     }
  //   })();
  // }, [pathname, searchParams]);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedTag, setSelectedTag] = useState(["maths"]);

  // new chat
  const [roomDataUpdated, setRoomDataUpdated] = useState(false);
  // roomdata
  const [roomData, setRoomData] = useState({ messages: [] });
  useEffect(() => {
    const unsubscribe = listenToRoomData(roomId, (data) => {
      setRoomData(data);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [roomId]);
  useEffect(() => {}, []);
  useReassignUserRoom(data);
  return (
    <section className="pr-2">
      <div className="rounded-t-lg bg-white px-4 py-2">
        <h4 className="font-dm-sans text-xl xs:text-2xl font-medium mb-0">
          {data.name}
        </h4>
        <p className="font-dm-sans text-base xs:text-md font-normal text-secondary mb-1">
          {data.description}
        </p>
        <div className="">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="mt-1 text-sm font-dm-sans sm:text-base border-[1px] border-secondary px-[6px] py-[2px] rounded-[4px] inline-block mr-1.5 text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="block w-full pt-0.5 m-0 bg-secondaryBg"></div>
      <div className="bg-white px-4 py-2 flex flex-col space-y-2  md:h-[65vh] md:overflow-y-scroll">
        <div className="flex flex-col xs:flex-row xs:space-x-3 space-y-2 xs:space-y-0 items-center">
          <button className="flex justify-around rounded-[5px] bg-secondaryBg text-primary px-3 py-2 w-full xs:w-fit">
            <span className="font-dm-sans mx-auto items-center flex space-x-2 text-">
              <svg
                className="h-4 w-4"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.351893 0.679688H0.2C0.0895431 0.679688 0 0.769231 0 0.879687V1.79988H0.00679622L0.00167308 4.1212C-0.000674502 5.23289 -0.000645914 6.03356 0.00236012 6.56067H0V7.48086C0 7.59132 0.089543 7.68086 0.2 7.68086H1.1875V7.67395L1.65849 7.67647L1.66232 7.67649L2.96578 7.68305L2.96115 8.3766L2.95419 9.07016L2.62948 9.0811C2.27926 9.09204 2.22128 9.10954 2.10299 9.22768C1.8757 9.45303 1.9476 9.81184 2.25143 9.95843C2.33493 9.99781 2.42538 10 4.92562 10C7.21249 10 7.52328 9.99562 7.59982 9.96499C7.91757 9.84029 8.0057 9.4596 7.77145 9.22768C7.65316 9.10954 7.59518 9.09204 7.24496 9.0811L6.92025 9.07016L6.91329 8.3766L6.90866 7.68305L8.21212 7.67649L8.66876 7.67419V7.68086H9.65626C9.76672 7.68086 9.85626 7.59132 9.85626 7.48086V7.38339L9.86581 7.37018V4.17152V1.81109H9.8681V0.8909C9.8681 0.780443 9.77856 0.6909 9.6681 0.6909H9.56704L9.56661 0.690627L4.96041 0.684064L1.1875 0.680481V0.679688H0.351893Z"
                  fill="#398DFF"
                />
                <g clipPath="url(#clip0_0_1)">
                  <path
                    d="M5.16684 5.53337H4.83351V3.53337L3.91684 4.45004L3.68018 4.21337L5.00018 2.89337L6.32018 4.21337L6.08351 4.45004L5.16684 3.53337V5.53337Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1">
                    <rect
                      width="4"
                      height="4"
                      fill="white"
                      transform="translate(3 2.20001)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span>Share Screen</span>
            </span>
          </button>
          <button className="flex justify-around rounded-[5px] bg-secondaryBg text-primary px-3 py-2 w-full xs:w-fit">
            <span className="font-dm-sans mx-auto items-center flex space-x-2 text-">
              <svg
                className="h-4 w-4"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 0C1.28587 0 0.840752 0.17779 0.512563 0.494257C0.184374 0.810725 0 1.23995 0 1.6875V7.3125C0 7.76005 0.184374 8.18927 0.512563 8.50574C0.840752 8.82221 1.28587 9 1.75 9H7.58333C8.04746 9 8.49258 8.82221 8.82077 8.50574C9.14896 8.18927 9.33333 7.76005 9.33333 7.3125V1.6875C9.33333 1.23995 9.14896 0.810725 8.82077 0.494257C8.49258 0.17779 8.04746 0 7.58333 0H1.75ZM14 0.5625C13.9999 0.45132 13.9656 0.342663 13.9015 0.250251C13.8374 0.157839 13.7464 0.0858183 13.6398 0.0432848C13.5333 0.000751248 13.4161 -0.0103873 13.303 0.011276C13.1899 0.0329393 13.086 0.0864325 13.0044 0.165L10.6711 2.415C10.5617 2.52039 10.5001 2.66337 10.5 2.8125V6.1875C10.5 6.33675 10.5614 6.48 10.6711 6.585L13.0044 8.835C13.086 8.91357 13.1899 8.96706 13.303 8.98872C13.4161 9.01039 13.5333 8.99925 13.6398 8.95672C13.7464 8.91418 13.8374 8.84216 13.9015 8.74975C13.9656 8.65734 13.9999 8.54868 14 8.4375V0.5625Z"
                  fill="#398DFF"
                />
                <path
                  d="M4.96665 5.83336H4.63331V3.83336L3.71665 4.75003L3.47998 4.51336L4.79998 3.19336L6.11998 4.51336L5.88331 4.75003L4.96665 3.83336V5.83336Z"
                  fill="white"
                />
              </svg>

              <span>Start Camera</span>
            </span>
          </button>
        </div>
        {/* WHITE BOARD STARTS */}
        <div className="rounded-lg border-tertiary border-2 bg-secondaryBg py-20 text-center font-hi-melody text-3xl">
          <p>White Board</p>
        </div>
        {/* WHITE BOARD ENDS */}
        {/* EMEBED SECTION */}
        <Uyem
          // Required props
          userId={roomId}
          // Optional props
          server="localhost"
          port={3000}
          iceServers={[
            {
              urls: ["stun:127.0.0.1:3478"],
            },
            {
              urls: ["turn:127.0.0.2:3478"],
              username: "username",
              credential: "password",
            },
          ]}
          name="John Doe"
        />
        <div className="w-full pt-2 pb-14 md:pb-0 ">
          {/* SPEAKER */}
          <div>
            <div className="flex">
              <h5 className="font-dm-sans text-xl font-medium">Speaker</h5>{" "}
              <span className="ml-1 py-1 px-2 bg-secondaryBg rounded-[10px] text-primary">
                {roomData?.speakers?.profiles.length}
              </span>
            </div>
            <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 lg:grid-cols-7 gap-4">
              {roomData?.speakers?.profiles.map(({ photoURL, name }) => (
                <div
                  key={photoURL}
                  className="my-2 text-center inline-flex flex-col justify-around"
                >
                  <img
                    className=" h-14 w-14 border-[1px] border-primary rounded-[100%]  mx-auto"
                    src={photoURL}
                    loading={"lazy"}
                  />
                  <span className="text-secondary text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
          {roomData?.listeners?.profiles.length > 0 ? (
            <div className="mt-2">
              <div className="flex">
                <h5 className="font-dm-sans text-xl font-medium">Listeners</h5>{" "}
                <span className="ml-1 py-1 px-2 bg-secondaryBg rounded-[10px] text-primary">
                  {roomData?.listeners?.profiles.length}
                </span>
              </div>
              <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 lg:grid-cols-7 gap-4">
                {roomData?.listeners?.profiles.map(({ photoURL, name }) => (
                  <div className="my-2 text-center inline-flex flex-col justify-around">
                    <img
                      key={photoURL}
                      className=" h-14 w-14 border-[1px] border-primary rounded-[100%] mx-auto"
                      src={photoURL}
                      loading={"lazy"}
                    />
                    <span className="text-secondary text-[12px] xs:text-sm truncate ">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-10 font-dm-sans text-secondary">
              <p>No listeners In this room :(</p>
            </div>
          )}
        </div>
      </div>
      {/* chat Icon */}
      {/* <div
        style={
          opened
            ? {
                zIndex: 20,
              }
            : { zIndex: 1 }
        }
        className="z-[1] h-screen flex md:hidden fixed top-0 bottom-0 left-0 right-0 items-center justify-end"
      > */}
      <button
        style={
          opened
            ? {
                position: "fixed",
                top: "50%",
                right: "0",
                transform: "translateY(-47vh)",
              }
            : {
                position: "fixed",
                top: "50%",
                right: "0",
                transform: "translateY(100%)",
              }
        }
        className={` z-20 block md:hidden transition duration-300 ease-in-out delay-150`}
      >
        {opened !== false ? (
          <span
            onClick={close}
            className="flex items-center sm:ml-0 bg-primary font-dm-sans text-white border-[1px] rounded-l-[120px] px-1 xs:px-1 py-1 xs:py-1 text-sm sm:text-sm"
          >
            <span className="pr-1 ">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5002 22.9167C18.2533 22.9167 22.9168 18.2531 22.9168 12.5C22.9168 6.74689 18.2533 2.08334 12.5002 2.08334C6.74704 2.08334 2.0835 6.74689 2.0835 12.5C2.0835 18.2531 6.74704 22.9167 12.5002 22.9167Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.4464 9.55365L9.55371 15.4464M9.55371 9.55365L15.4464 15.4464"
                  stroke="#398DFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="pr-2">Close</span>
          </span>
        ) : (
          <span
            onClick={open}
            className="flex items-center sm:ml-0 bg-primary font-dm-sans text-white border-[1px] rounded-l-[120px] px-1 xs:px-1 py-1 xs:py-1 text-sm sm:text-sm"
          >
            <span className="pr-1 relative">
              {/* red dot */}
              <span className="absolute top-0 right-0.5 p-1 bg-red-500 rounded-full"></span>
              <svg
                className=""
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32ZM16.28 23.325C17.308 24.036 18.612 24.459 20.024 24.459C20.375 24.459 20.722 24.433 21.063 24.382C21.18 24.43 21.293 24.489 21.432 24.569C21.732 24.745 22.133 25.015 22.632 25.379C23.041 25.678 23.62 25.389 23.62 24.886V23.425C23.83 23.289 24.028 23.142 24.215 22.983C25.345 22.025 26 20.715 26 19.31C26 18.385 25.72 17.52 25.228 16.773C25.0729 17.3035 24.8628 17.8162 24.601 18.303C24.705 18.626 24.76 18.963 24.76 19.31C24.76 20.344 24.272 21.32 23.408 22.052C23.1851 22.2403 22.945 22.4074 22.691 22.551C22.5969 22.6042 22.5185 22.6813 22.4639 22.7746C22.4093 22.8678 22.3803 22.9739 22.38 23.082V23.706C21.787 23.326 21.38 23.147 21.07 23.147C21.0351 23.1471 21.0004 23.1501 20.966 23.156C20.0972 23.3013 19.2065 23.2431 18.364 22.986C17.6816 23.1632 16.9843 23.277 16.281 23.326L16.28 23.325ZM8.814 20.403C9.14375 20.682 9.4926 20.9376 9.858 21.168V23.66C9.858 24.29 10.583 24.65 11.094 24.276C12.504 23.246 13.484 22.664 13.729 22.606C14.295 22.696 14.873 22.741 15.457 22.741C20.657 22.741 24.915 19.134 24.915 14.621C24.915 10.107 20.656 6.5 15.457 6.5C10.258 6.5 6 10.107 6 14.62C6 16.83 7.03 18.891 8.814 20.403ZM13.763 21.069C13.26 21.069 12.525 21.424 11.409 22.173V20.736C11.4085 20.6007 11.3722 20.468 11.3036 20.3514C11.2351 20.2347 11.1369 20.1383 11.019 20.072C10.5953 19.8322 10.1948 19.5533 9.823 19.239C8.37 18.01 7.55 16.366 7.55 14.62C7.55 11.01 11.066 8.032 15.457 8.032C19.849 8.032 23.364 11.01 23.364 14.62C23.364 18.23 19.849 21.209 15.457 21.209C14.927 21.209 14.404 21.165 13.893 21.079C13.85 21.0721 13.8065 21.0687 13.763 21.069ZM11.426 16.153C12.111 16.153 12.666 15.603 12.666 14.927C12.666 14.25 12.111 13.701 11.426 13.701C10.741 13.701 10.186 14.25 10.186 14.927C10.186 15.604 10.741 16.153 11.426 16.153ZM15.457 16.153C16.142 16.153 16.697 15.603 16.697 14.927C16.697 14.25 16.142 13.701 15.457 13.701C14.772 13.701 14.217 14.25 14.217 14.927C14.217 15.604 14.772 16.153 15.457 16.153ZM19.488 16.153C20.173 16.153 20.728 15.603 20.728 14.927C20.728 14.25 20.173 13.701 19.488 13.701C18.803 13.701 18.248 14.25 18.248 14.927C18.248 15.604 18.803 16.153 19.488 16.153Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <span className="pr-2">Chat</span>
          </span>
        )}
      </button>
      {/* </div> */}
      {/* mobile chat drawer  */}
      <Drawer
        className="block md:hidden"
        withCloseButton={false}
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.5, blur: 4, backgroundcolor: "#ffffff" }}
        zIndex={10}
        size={"100%"}
      >
        <Chat
          className="w-full"
          data={roomData}
          isMobile={true}
          opened={opened}
          roomId={roomId}
        />
      </Drawer>
      {/* footer */}
      <div className="">
        <div className="rounded-b-lg bg-white px-4 py-2 flex justify-between border-secondaryBg border-x-8 xs:border-x-0 border-b-8 md:border-t-2 fixed xs:static bottom-0 right-0 left-0">
          <div className="flex space-x-2 items-center">
            <button className="flex items-center sm:ml-0 bg-primary font-dm-sans text-white border-[1px] rounded-[6px] px-2 xs:px-2 py-1 xs:py-1 text-sm sm:text-sm">
              <span className="pr-1">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.8212 4.57115L8.32115 8.58846H4.80769C4.55268 8.58846 4.30811 8.68977 4.12778 8.87009C3.94746 9.05041 3.84615 9.29498 3.84615 9.55V15.3192C3.84615 15.5742 3.94746 15.8188 4.12778 15.9991C4.30811 16.1795 4.55268 16.2808 4.80769 16.2808H8.20673L12.8183 20.4269C13.4375 20.9827 14.4231 20.5442 14.4231 19.7115V5.28846C14.4231 4.45769 13.4413 4.01827 12.8212 4.57115ZM9.29423 10.2971L12.5 7.43558V17.5538L9.49423 14.8519C9.41092 14.7021 9.28908 14.5773 9.14132 14.4904C8.99356 14.4035 8.82526 14.3577 8.65385 14.3577H5.76923V10.5115H8.41442C8.70481 10.5875 9.03173 10.5308 9.29423 10.2971Z"
                    fill="#398DFF"
                  />
                  <path
                    d="M17.7779 15.451C17.6328 15.5757 17.4441 15.6376 17.2533 15.6232C17.0625 15.6088 16.8853 15.5191 16.7606 15.374C16.6359 15.2289 16.5739 15.0402 16.5883 14.8495C16.6028 14.6587 16.6924 14.4814 16.8375 14.3567C16.8702 14.3288 16.9019 14.299 16.9337 14.2663C17.0663 14.1288 17.1846 13.9548 17.2817 13.751C17.4615 13.3586 17.5524 12.9315 17.5481 12.5C17.5481 11.775 17.3077 11.1221 16.9337 10.7337C16.903 10.7021 16.8709 10.6719 16.8375 10.6433C16.6924 10.5186 16.6028 10.3413 16.5883 10.1505C16.5739 9.95976 16.6359 9.77107 16.7606 9.62596C16.8853 9.48086 17.0625 9.39123 17.2533 9.37681C17.4441 9.36238 17.6328 9.42434 17.7779 9.54904C17.8452 9.60673 17.9096 9.66827 17.9721 9.73269C18.6163 10.4019 18.9904 11.4154 18.9904 12.5C18.9904 13.1692 18.849 13.8135 18.5837 14.3702C18.4221 14.7115 18.2154 15.0144 17.9721 15.2673C17.9103 15.3312 17.8455 15.3932 17.7779 15.451Z"
                    fill="#398DFF"
                  />
                </svg>
              </span>
              <span>Request</span>
            </button>
          </div>
          {/* LEAVE BTN */}
          <div>
            <button className="ml-2 sm:ml-0 flex border-primary text-primary border-2 rounded-lg bg-secondaryBg px-2 xs:px-4 py-1 xs:py-2 text-sm sm:text-base">
              <span className="">Leave</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
