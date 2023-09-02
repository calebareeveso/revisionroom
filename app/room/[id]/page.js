"use client";
import "../../globals.css";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
// components
import Nav from "../../components/landing/nav";
import Student from "../../components/feed/sidebar/student";
import MainRoom from "../../components/room/main";
import Chat from "../../components/room/sidebar/chat";
// firesore
import getRoomData from "../../../utils/firebase/firestore/get/roomData";
import allUserData from "../../../utils/firebase/firestore/get/allUserData";
// @100mslive
import { HMSRoomProvider } from "@100mslive/hms-video-react";

export default function Page() {
  const params = useParams();
  const roomId = params.id;
  // const roomData = {
  //   title: "Exponential and logarithms revision",
  //   tags: ["#maths", "#exponentials", "#logarithms"],
  //   listeners: {
  //     profiles: [
  //       {
  //         name: "John Doe",
  //         age: 18,
  //         photoURL: "/images/room_card_avatar_2.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 17,
  //         photoURL: "/images/room_card_avatar_4.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //       {
  //         name: "John Doe",
  //         age: 15,
  //         photoURL: "/images/room_card_avatar_5.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //     ],
  //     noOfListeners: "13",
  //   },
  //   speakers: {
  //     profiles: [
  //       {
  //         name: "John Doe",
  //         age: 18,
  //         photoURL: "/images/room_card_avatar_2.jpg",
  //         school: "Wellington College",
  //         id: "123454321",
  //       },
  //     ],
  //     noOfSpeakers: "13",
  //   },
  //   createdAt: "2018-04-23T10:26:00.996Z",
  //   createdBy: {
  //     name: "John Doe",
  //     age: 10,
  //     photoURL: "/images/room_card_avatar_2.jpg",
  //     school: "Wellington College",
  //     id: "123454321",
  //   },
  //   id: 134567892,
  //   description:
  //     "Revision room for student struggling with Advanced Exponential and logarithms",
  // };
  // const chatData = [
  //   {
  //     time: "8:20",
  //     username: "Caleb",
  //     message: "Hello EveryOne",
  //   },
  //   {
  //     time: "8:20",
  //     username: "Caleb",
  //     message: "Hello Guysssssssssss",
  //   },
  //   {
  //     time: "8:20",
  //     username: "Caleb",
  //     message: "Hello Guysssssssssss",
  //   },
  //   {
  //     time: "8:20",
  //     username: "Caleb",
  //     message: "Hello Guysssssssssss",
  //   },
  //   {
  //     time: "8:20",
  //     username: "Caleb",
  //     message: "Hello Guysssssssssss",
  //   },
  //   {
  //     time: "8:20",
  //     username: "Caleb",
  //     message: "Hello Guysssssssssss",
  //   },
  //   {
  //     time: "8:22",
  //     username: "John Doe",
  //     message: "STOP SPAMMING CALEB! ⚠️",
  //   },
  // ];
  const [Data, setData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [contentloaded, setcontentloaded] = useState(false);
  useEffect(() => {
    // alert(`roomId ${roomId}`);
    (async () => {
      const { result, error } = await getRoomData(roomId);
      let data;
      if (result !== null) {
        data = setData(result.data());
      }
      // student data
      const { result: studentResult, error: studentError } =
        await allUserData();
      const studentData = [];
      studentResult.forEach((doc) => {
        studentData.push(doc.data());
      });
      setStudentData(studentData);
      setcontentloaded(true);
    })();
    console.log("roomId:::", roomId);
  }, []);

  return (
    <>
      {contentloaded !== true ? (
        <main className="flex items-center justify-around min-h-screen w-screen">
          <div
            aria-label="Blue and tan hamster running in a metal wheel"
            role="img"
            className="wheel-and-hamster"
          >
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
        </main>
      ) : (
        <HMSRoomProvider>
          {roomId !== null && (
            <main className="bg-secondaryBg">
              <Nav />
              <div className="max-w-7xl mx-auto">
                <div className="md:flex space-x-2 mt-4">
                  <section className="sticky top-1 hidden xl:flex flex-col space-y-4 xl:w-1/4">
                    <Student className="w-full" data={studentData} slice={20} />
                  </section>
                  <section className="md:w-2/3 xl:w-2/4 rounded-lg">
                    {/* Room id: {roomId} */}
                    {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
                    {Data && (
                      <MainRoom
                        className="w-full"
                        data={Data}
                        roomId={roomId}
                      />
                    )}
                  </section>
                  <section className="sticky top-1 rounded-lg md:w-1/3 xl:w-1/4">
                    <Chat
                      className="w-full  hidden md:block"
                      // data={chatData}
                      isMobile={false}
                      opened={false}
                      roomId={roomId}
                    />
                  </section>
                </div>
              </div>
            </main>
          )}
        </HMSRoomProvider>
      )}
    </>
  );
}
