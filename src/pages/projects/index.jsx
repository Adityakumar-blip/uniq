import ProjectsCard from "@/components/ProjectsCard";
import SeaarchInput from "@/components/SeaarchInput";
import React from "react";
import projectData from "../../../utils/projects";
import { useRouter } from "next/router";

const Index = () => {
  return (
    <div className="bg-white p-4 px-4 lg:px-16 md:px-16 h-screen">
      <p className="text-5xl font-bold text-black">Explore Projects</p>
      <p className="mt-4 text-gray-700 text-lg text-semibold">
        Discover and contribute to the best projects from engineers across the
        globe
      </p>
      <SeaarchInput />
      <div className="mt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projectData.map((item, index) => (
          <ProjectsCard key={index} props={item} />
        ))}
      </div>
    </div>
  );
};

export default Index;
