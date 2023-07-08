import Student from "@/app/components/feed/sidebar/student";
import MainRoom from "@/app/components/room/main";
import Chat from "@/app/components/room/sidebar/chat";

export default function Page({ params }) {
  const studentData = [
    {
      number: "13",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "17",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "12",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "28",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "21",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "20",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "29",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "13",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "17",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "12",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "28",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "21",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "20",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "29",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "13",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "17",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "12",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "28",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "21",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "20",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "29",
      title: "John Doe",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
  ];
  const roomData = 
    {
      title: "Exponential and logarithms revision",
      tags: ["#maths", "#exponentials", "#logarithms"],
      listeners: {
        profiles: [
          {
            name: "John Doe",
            age: 18,
            photoURL: "/images/room_card_avatar_2.jpg",
            school: "Wellington College",
            id: "123454321",
          },
          {
            name: "John Doe",
            age: 17,
            photoURL: "/images/room_card_avatar_4.jpg",
            school: "Wellington College",
            id: "123454321",
          },
          {
            name: "John Doe",
            age: 15,
            photoURL: "/images/room_card_avatar_5.jpg",
            school: "Wellington College",
            id: "123454321",
          },
        ],
        noOfListeners: "13",
      },
      speakers: {
        profiles: [
          {
            name: "John Doe",
            age: 18,
            photoURL: "/images/room_card_avatar_2.jpg",
            school: "Wellington College",
            id: "123454321",
          },
          {
            name: "John Doe",
            age: 17,
            photoURL: "/images/room_card_avatar_4.jpg",
            school: "Wellington College",
            id: "123454321",
          },
          {
            name: "John Doe",
            age: 15,
            photoURL: "/images/room_card_avatar_5.jpg",
            school: "Wellington College",
            id: "123454321",
          },
        ],
        noOfSpeakers: "13",
      },
      createdAt: "2018-04-23T10:26:00.996Z",
      createdBy: {
        name: "John Doe",
        age: 10,
        photoURL: "/images/room_card_avatar_2.jpg",
        school: "Wellington College",
        id: "123454321",
      },
      id: 134567892,
      description:
        "Revision room for student struggling with Advanced Exponential and logarithms",
    }
  
    return (
      <div className="md:flex space-x-2 mt-4">
        
        <section className="sticky top-1 hidden xl:flex flex-col space-y-4 xl:w-1/4">
          <Student className="w-full" data={studentData} slice={20}/>
        </section>
        <section className="w-full md:w-2/3 xl:w-2/4 rounded-lg">
        Room id: {params.id}
        <MainRoom className="w-full" data={roomData} />
        </section>
        <section className="sticky top-1 rounded-lg md:w-1/3 xl:w-1/4">
        <Chat className="w-full" data={studentData} slice={6} />
        </section>
      </div>
    );
  }