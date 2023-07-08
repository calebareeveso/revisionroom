import React from "react";
// components
import School from "../components/feed/sidebar/school";
import Student from "../components/feed/sidebar/student";
import Popular from "../components/feed/sidebar/popular";
import Feed from "../components/feed/sidebar/feed";

export default function page() {
  const schoolData = [
    {
      number: "13",
      title: "Wellington College",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "17",
      title: "Wellington College",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "12",
      title: "Wellington College",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "28",
      title: "Wellington College",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "21",
      title: "Wellington College",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "20",
      title: "Wellington College",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
    {
      number: "29",
      title: "Wellington College",
      image: "https://i.ibb.co/5hp4Rb5/image.jpg",
    },
  ];
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
  ];
  const roomData = [
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
    },
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
        noOfListeners: "17",
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
    },
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
        noOfListeners: "12",
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
    },
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
        noOfListeners: "28",
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
    },
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
        noOfListeners: "21",
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
    },
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
        noOfListeners: "20",
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
    },
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
        noOfListeners: "29",
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
    },
  ];

  return (
    <div className="md:flex space-x-2 mt-4">
      <section className="sticky top-1 hidden xl:flex flex-col space-y-4 xl:w-1/4">
        <School className="w-full" data={schoolData} slice={6} />
        <Student className="w-full" data={studentData} slice={6} />
      </section>
      <section className="md:w-2/3 xl:w-2/4 rounded-lg">
        <Popular className="w-full block md:hidden" data={roomData} slice={6} />
        <Feed className="w-full" data={roomData} />
      </section>
      <section className="sticky top-1 rounded-lg md:w-1/3 xl:w-1/4">
        <Popular className="w-full hidden md:block" data={roomData} slice={6} />
      </section>
    </div>
  );
}
