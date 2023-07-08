import Student from "@/app/components/feed/sidebar/student";

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
  ];
    return (
      <div className="md:flex space-x-2 mt-4">
        
        <section className="sticky top-1 hidden xl:flex flex-col space-y-4 xl:w-1/4">
          <Student className="w-full" data={studentData} slice={4}/>
        </section>
        <section className="md:w-2/3 xl:w-2/4 rounded-lg">
        Room id: {params.id}
        </section>
        <section className="sticky top-1 rounded-lg md:w-1/3 xl:w-1/4">
          {/* <Popular className="w-full hidden md:block" data={roomData} /> */}
        </section>
      </div>
    );
  }