import Filters from "@/components/Filters";
import SeaarchInput from "@/components/SeaarchInput";
import DevelopersCard from "@/views/Developers/Developers";
import React from "react";

const index = () => {
  const developers = [
    {
      name: "Alice Johnson",
      age: 28,
      skills: ["JavaScript", "React", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1555320818-21ebf0faf145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      company: {
        name: "Tech Solutions Inc.",
        location: "San Francisco, CA",
        industry: "Software Development",
      },
    },
    {
      name: "Bob Smith",
      age: 35,
      image:
        "https://images.unsplash.com/photo-1525393839361-867d646aea41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      skills: ["Python", "Django", "Machine Learning"],
      company: {
        name: "Innovative Apps",
        location: "New York, NY",
        industry: "Artificial Intelligence",
      },
    },
    {
      name: "Carol White",
      age: 30,
      image:
        "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      skills: ["Java", "Spring", "Microservices"],
      company: {
        name: "Enterprise Systems",
        location: "Austin, TX",
        industry: "Enterprise Software",
      },
    },
    {
      name: "David Brown",
      age: 42,
      image:
        "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
      skills: ["C#", ".NET", "Azure"],
      company: {
        name: "Cloud Services Ltd.",
        location: "Seattle, WA",
        industry: "Cloud Computing",
      },
    },
  ];
  return (
    <div className="bg-white p-4 px-4 lg:px-16 md:px-16 h-screen">
      <p className="text-5xl font-bold text-black">Explore Developers</p>
      <p className="mt-4 text-gray-700 text-lg text-semibold">
        Connect with developers accross the world and learn.
      </p>
      <div className="w-[50%]">
        <SeaarchInput onChange={(e) => setValue(e.target.value)} />
      </div>
      {/* <div className="mt-6">
        <Filters />
      </div> */}
      <div className="mt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {developers.length > 0 &&
          developers?.map((item, index) => (
            <DevelopersCard key={index} props={item} />
          ))}
      </div>
    </div>
  );
};

export default index;
