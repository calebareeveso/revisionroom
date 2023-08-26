"use client";
import React, { useRef, useState, useEffect } from "react";
// mantine
import {
  Transition,
  TextInput,
  Button,
  Box,
  Affix,
  FileButton,
  List,
} from "@mantine/core";
// mantaine hook
import { getHotkeyHandler } from "@mantine/hooks";
import { useOnClickOutside } from "../../.././../hooks/useOnClickOutside";
import Picker from "@emoji-mart/react";
// firesore
// import addChatRoomData from "../../../../utils/firebase/firestore/add/roomChatData";
import addChatRoomData from "../../../../utils/firebase/firestore/update/roomChatData";
import listenToRoomData from "../../../../utils/firebase/firestore/get/realTime/roomChatData";
// auth
import { useAuthContext } from "../../../context/authContext";
// getCurrentFormattedTime
import getCurrentFormattedTime from "../../../../utils/getCurrentFormattedTime";
import getRandomNumbers from "../../../../utils/getRandomNumbers";
export default function chat({ className, slice, isMobile, opened, roomId }) {
  const [showPicker, setPickerState] = useState(false);
  const handleClickOutside = () => {
    // Your custom logic here
    console.log("clicked outside");
    dismissPicker();
  };
  const ref = useRef(null);

  useOnClickOutside(ref, handleClickOutside);

  const [TextInputValue, setTextInputValue] = useState("");

  const dismissPicker = () => {
    setPickerState(false);
  };

  const togglePicker = () => {
    setPickerState(!showPicker);
  };

  const addEmoji = (emoji) => {
    if ("native" in emoji) {
      setTextInputValue((previousValue) => {
        return `${previousValue}${emoji.native}`;
      });
      dismissPicker();
    }
  };

  // show emoji input field
  const [emojiInputField, setemojiInputField] = useState(false);
  useEffect(() => {
    if (opened !== false && isMobile !== false) {
      setTimeout(() => {
        setemojiInputField(true);
      }, 250);
    } else {
      setemojiInputField(false);
    }
  }, [opened]);

  // roomdata
  const [roomData, setRoomData] = useState({ messages: [] });
  useEffect(() => {
    const unsubscribe = listenToRoomData(roomId, (data) => {
      setRoomData(data);
      console.log("REALTIME DATA", data);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [roomId]);
  // chat box
  const chatBoxEndRef = useRef(null);
  // handle auth
  const { user } = useAuthContext();
  return (
    <aside className={`${className} rounded-lg bg-white xs:px-4 xs:py-2`}>
      <h4 className="font-dm-sans text-md md:text-xl font-medium mb-1">Chat</h4>
      <div className="flex flex-col space-y-3 h-[75vh] overflow-y-scroll">
        {/* <pre>{JSON.stringify(roomData.messages, null, 2)}</pre> */}
        {roomData.messages !== undefined &&
          roomData.messages.map(({ time, fullname, message, messageID }) => (
            <div key={messageID}>
              <h6 className="flex space-x-2">
                <span className="font-dm-sans font-medium text-base">
                  {fullname}
                </span>
                <span className="font-dm-sans font-normal text-secondary text-base">
                  {time}
                </span>
              </h6>
              <p className="font-dm-sans mt-0">{message}</p>
            </div>
          ))}
        {/* dummy div for scoll */}
        <div ref={chatBoxEndRef}></div>
        {roomData.messages.length == 0 && (
          <div className="text-left font-dm-sans text-secondary bg-secondaryBg p-3 rounded-lg flex space-x-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="#5e5e5e"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M12 17v-6"
                  />
                  <circle
                    cx="1"
                    cy="1"
                    r="1"
                    fill="#5e5e5e"
                    transform="matrix(1 0 0 -1 11 9)"
                  />
                  <path
                    stroke="#5e5e5e"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
                  />
                </g>
              </svg>
            </span>
            <p className="text-sm">
              Messages can only be seen by people in this room
            </p>
          </div>
        )}
      </div>
      {/* emojiInputField  */}
      {/* desktop  */}
      <div className="hidden md:block mt-2">
        <TextInput
          classNames={{
            wrapper:
              "flex items-center justify-between rounded-lg bg-secondaryBg py-1 px-2",
            input: "py-2 px-1 bg-secondaryBg w-full focus:outline-none",
            icon: "mr-2",
          }}
          unstyled
          onKeyDown={getHotkeyHandler([
            [
              "Enter",
              async () => {
                const roomData = {
                  roomId: roomId,
                  message: {
                    message: TextInputValue,
                    fullname: user?.displayName,
                    time: getCurrentFormattedTime(),
                    messageID: getRandomNumbers(),
                  },
                };
                const { result, error } = await addChatRoomData(roomData);
                setTextInputValue("");
                setTimeout(() => {
                  chatBoxEndRef.current?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              },
            ],
          ])}
          size="lg"
          radioGroup="lg"
          value={TextInputValue}
          onChange={(event) => setTextInputValue(event.currentTarget.value)}
          onKeyP
          rightSection={
            <>
              <div ref={ref} style={{ position: "relative" }}>
                <Box style={{ position: "absolute", right: 0, bottom: 50 }}>
                  {showPicker && (
                    <Picker
                      previewPosition={"none"}
                      navPosition={"bottom"}
                      native={true}
                      onEmojiSelect={addEmoji}
                      // onClickOutside={dismissPicker}
                    />
                  )}
                </Box>
                <button onClick={togglePicker}>
                  <svg
                    className="w-6 h-6 -mb-1"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7499 9.21428C13.0624 9.21428 13.3622 9.09011 13.5832 8.86909C13.8043 8.64806 13.9284 8.34829 13.9284 8.03571C13.9284 7.72314 13.8043 7.42336 13.5832 7.20234C13.3622 6.98131 13.0624 6.85714 12.7499 6.85714C12.4373 6.85714 12.1375 6.98131 11.9165 7.20234C11.6955 7.42336 11.5713 7.72314 11.5713 8.03571C11.5713 8.34829 11.6955 8.64806 11.9165 8.86909C12.1375 9.09011 12.4373 9.21428 12.7499 9.21428ZM8.42843 8.03571C8.42843 8.34829 8.30426 8.64806 8.08324 8.86909C7.86221 9.09011 7.56244 9.21428 7.24986 9.21428C6.93728 9.21428 6.63751 9.09011 6.41648 8.86909C6.19546 8.64806 6.07129 8.34829 6.07129 8.03571C6.07129 7.72314 6.19546 7.42336 6.41648 7.20234C6.63751 6.98131 6.93728 6.85714 7.24986 6.85714C7.56244 6.85714 7.86221 6.98131 8.08324 7.20234C8.30426 7.42336 8.42843 7.72314 8.42843 8.03571ZM5.54329 12.4593C5.67208 12.3716 5.83035 12.3385 5.98349 12.3672C6.13662 12.3959 6.27215 12.4841 6.36043 12.6125L6.3675 12.6219L6.40207 12.6683C6.43507 12.7107 6.4885 12.7751 6.56157 12.8553C6.7085 13.0148 6.93243 13.2324 7.23572 13.4501C7.83915 13.8846 8.75215 14.3214 9.99986 14.3214C11.2476 14.3214 12.1606 13.8846 12.764 13.4501C13.0673 13.2324 13.292 13.0148 13.4381 12.8553C13.5068 12.7806 13.5718 12.7028 13.633 12.6219L13.6385 12.6141C13.7265 12.4849 13.8623 12.3959 14.0159 12.3668C14.1695 12.3377 14.3284 12.3708 14.4576 12.4589C14.5868 12.5469 14.6757 12.6827 14.7048 12.8363C14.7339 12.9899 14.7008 13.1488 14.6128 13.278L14.6112 13.2788V13.2804L14.6089 13.2827L14.6034 13.2906L14.5861 13.3149C14.4988 13.4316 14.4057 13.5439 14.3071 13.6512C14.0486 13.9316 13.7622 14.1848 13.4523 14.4071C12.6901 14.9547 11.5414 15.5 9.99986 15.5C8.45829 15.5 7.30958 14.9547 6.54743 14.4071C6.23752 14.1848 5.95108 13.9316 5.69257 13.6512C5.58771 13.5367 5.48909 13.4165 5.39715 13.2914L5.39086 13.2835L5.38929 13.2804L5.3885 13.2788L5.38772 13.278C5.29978 13.1488 5.26677 12.99 5.29595 12.8364C5.32512 12.6829 5.41409 12.5472 5.54329 12.4593ZM9.99986 0.571426C4.79293 0.571426 0.571289 4.79307 0.571289 10C0.571289 15.2069 4.79293 19.4286 9.99986 19.4286C15.2068 19.4286 19.4284 15.2069 19.4284 10C19.4284 4.79307 15.2068 0.571426 9.99986 0.571426ZM1.74986 10C1.74986 5.44364 5.4435 1.75 9.99986 1.75C14.5562 1.75 18.2499 5.44364 18.2499 10C18.2499 14.5564 14.5562 18.25 9.99986 18.25C5.4435 18.25 1.74986 14.5564 1.74986 10Z"
                      fill="#5E5E5E"
                    />
                  </svg>
                </button>
              </div>
            </>
          }
          rightSectionWidth={100}
          placeholder="Type a message"
        />
      </div>
      {/* mobile */}
      <Transition
        className="block md:hidden"
        mounted={emojiInputField}
        transition="slide-up"
        duration={1500}
        exitDuration={0}
        timingFunction="ease"
      >
        {() => (
          <Affix position={{ bottom: 0, right: 0, left: 0 }}>
            <TextInput
              classNames={{
                wrapper:
                  "flex items-center justify-between m-2 rounded-lg bg-secondaryBg py-1 px-2",
                input: "py-2 px-1 bg-secondaryBg w-full focus:outline-none",
                icon: "mr-2",
              }}
              unstyled
              onKeyDown={getHotkeyHandler([
                [
                  "Enter",
                  async () => {
                    const roomData = {
                      roomId: roomId,
                      message: {
                        message: TextInputValue,
                        fullname: user?.displayName,
                        time: getCurrentFormattedTime(),
                        messageID: getRandomNumbers(),
                      },
                    };
                    const { result, error } = await addChatRoomData(roomData);
                    setTextInputValue("");
                    setTimeout(() => {
                      chatBoxEndRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 100);
                  },
                ],
              ])}
              size="lg"
              radioGroup="lg"
              value={TextInputValue}
              onChange={(event) => setTextInputValue(event.currentTarget.value)}
              onKeyP
              rightSection={
                <>
                  <div ref={ref} style={{ position: "relative" }}>
                    <Box style={{ position: "absolute", right: 0, bottom: 50 }}>
                      {showPicker && (
                        <Picker
                          previewPosition={"none"}
                          navPosition={"bottom"}
                          native={true}
                          onEmojiSelect={addEmoji}
                          // onClickOutside={dismissPicker}
                        />
                      )}
                    </Box>
                    <button onClick={togglePicker}>
                      <svg
                        className="w-6 h-6 -mb-1"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7499 9.21428C13.0624 9.21428 13.3622 9.09011 13.5832 8.86909C13.8043 8.64806 13.9284 8.34829 13.9284 8.03571C13.9284 7.72314 13.8043 7.42336 13.5832 7.20234C13.3622 6.98131 13.0624 6.85714 12.7499 6.85714C12.4373 6.85714 12.1375 6.98131 11.9165 7.20234C11.6955 7.42336 11.5713 7.72314 11.5713 8.03571C11.5713 8.34829 11.6955 8.64806 11.9165 8.86909C12.1375 9.09011 12.4373 9.21428 12.7499 9.21428ZM8.42843 8.03571C8.42843 8.34829 8.30426 8.64806 8.08324 8.86909C7.86221 9.09011 7.56244 9.21428 7.24986 9.21428C6.93728 9.21428 6.63751 9.09011 6.41648 8.86909C6.19546 8.64806 6.07129 8.34829 6.07129 8.03571C6.07129 7.72314 6.19546 7.42336 6.41648 7.20234C6.63751 6.98131 6.93728 6.85714 7.24986 6.85714C7.56244 6.85714 7.86221 6.98131 8.08324 7.20234C8.30426 7.42336 8.42843 7.72314 8.42843 8.03571ZM5.54329 12.4593C5.67208 12.3716 5.83035 12.3385 5.98349 12.3672C6.13662 12.3959 6.27215 12.4841 6.36043 12.6125L6.3675 12.6219L6.40207 12.6683C6.43507 12.7107 6.4885 12.7751 6.56157 12.8553C6.7085 13.0148 6.93243 13.2324 7.23572 13.4501C7.83915 13.8846 8.75215 14.3214 9.99986 14.3214C11.2476 14.3214 12.1606 13.8846 12.764 13.4501C13.0673 13.2324 13.292 13.0148 13.4381 12.8553C13.5068 12.7806 13.5718 12.7028 13.633 12.6219L13.6385 12.6141C13.7265 12.4849 13.8623 12.3959 14.0159 12.3668C14.1695 12.3377 14.3284 12.3708 14.4576 12.4589C14.5868 12.5469 14.6757 12.6827 14.7048 12.8363C14.7339 12.9899 14.7008 13.1488 14.6128 13.278L14.6112 13.2788V13.2804L14.6089 13.2827L14.6034 13.2906L14.5861 13.3149C14.4988 13.4316 14.4057 13.5439 14.3071 13.6512C14.0486 13.9316 13.7622 14.1848 13.4523 14.4071C12.6901 14.9547 11.5414 15.5 9.99986 15.5C8.45829 15.5 7.30958 14.9547 6.54743 14.4071C6.23752 14.1848 5.95108 13.9316 5.69257 13.6512C5.58771 13.5367 5.48909 13.4165 5.39715 13.2914L5.39086 13.2835L5.38929 13.2804L5.3885 13.2788L5.38772 13.278C5.29978 13.1488 5.26677 12.99 5.29595 12.8364C5.32512 12.6829 5.41409 12.5472 5.54329 12.4593ZM9.99986 0.571426C4.79293 0.571426 0.571289 4.79307 0.571289 10C0.571289 15.2069 4.79293 19.4286 9.99986 19.4286C15.2068 19.4286 19.4284 15.2069 19.4284 10C19.4284 4.79307 15.2068 0.571426 9.99986 0.571426ZM1.74986 10C1.74986 5.44364 5.4435 1.75 9.99986 1.75C14.5562 1.75 18.2499 5.44364 18.2499 10C18.2499 14.5564 14.5562 18.25 9.99986 18.25C5.4435 18.25 1.74986 14.5564 1.74986 10Z"
                          fill="#5E5E5E"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              }
              rightSectionWidth={100}
              placeholder="Type a message"
            />
          </Affix>
        )}
      </Transition>
      {/* } */}
    </aside>
  );
}
