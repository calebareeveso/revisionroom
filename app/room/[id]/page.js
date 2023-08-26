import Student from "../../components/feed/sidebar/student";
import MainRoom from "../../components/room/main";
import Chat from "../../components/room/sidebar/chat";
// firesore
import getRoomData from "../../../utils/firebase/firestore/get/roomData";
import allUserData from "../../../utils/firebase/firestore/get/allUserData";

export default async function Page({ params }) {
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
  const chatData = [
    {
      time: "8:20",
      username: "Caleb",
      message: "Hello EveryOne",
    },
    {
      time: "8:20",
      username: "Caleb",
      message: "Hello Guysssssssssss",
    },
    {
      time: "8:20",
      username: "Caleb",
      message: "Hello Guysssssssssss",
    },
    {
      time: "8:20",
      username: "Caleb",
      message: "Hello Guysssssssssss",
    },
    {
      time: "8:20",
      username: "Caleb",
      message: "Hello Guysssssssssss",
    },
    {
      time: "8:20",
      username: "Caleb",
      message: "Hello Guysssssssssss",
    },
    {
      time: "8:22",
      username: "John Doe",
      message: "STOP SPAMMING CALEB! ⚠️",
    },
  ];

  const { result, error } = await getRoomData(params.id);
  let data;
  if (result !== null) {
    data = result.data();
  } else {
    data = [];
  }
  // student data
  const { result: studentResult, error: studentError } = await allUserData();
  const studentData = [];
  studentResult.forEach((doc) => {
    // if (doc.data().active !== false) {
    studentData.push(doc.data());
    // }
  });
  // console.log("studentData:", studentData);

  return (
    <div className="md:flex space-x-2 mt-4">
      <section className="sticky top-1 hidden xl:flex flex-col space-y-4 xl:w-1/4">
        <Student className="w-full" data={studentData} slice={20} />
      </section>
      <section className="md:w-2/3 xl:w-2/4 rounded-lg">
        Room id: {params.id}
        {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
        {data && <MainRoom className="w-full" data={data} roomId={params.id} />}
      </section>
      <section className="sticky top-1 rounded-lg md:w-1/3 xl:w-1/4">
        <Chat
          className="w-full  hidden md:block"
          data={chatData}
          isMobile={false}
          opened={false}
          roomId={params.id}
        />
      </section>
    </div>
  );
}
