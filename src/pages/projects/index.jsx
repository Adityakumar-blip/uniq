import ProjectsCard from "@/components/ProjectsCard";
import SeaarchInput from "@/components/SeaarchInput";
import React, { useEffect, useState } from "react";
import projectData from "../../../utils/projects";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { GetAllProject } from "@/Store/Reducers/ProjectSlice";

const Index = () => {
  const dispatch = useDispatch();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    dispatch(GetAllProject()).then((result) => {
      setProjects(result?.payload);
    });
  }, [dispatch]);

  console.log("Projects", projects);
  return (
    <div className="bg-white p-4 px-4 lg:px-16 md:px-16 h-screen">
      <p className="text-5xl font-bold text-black">Explore Projects</p>
      <p className="mt-4 text-gray-700 text-lg text-semibold">
        Discover and contribute to the best projects from engineers across the
        globe
      </p>
      <div className="w-[50%]">
        <SeaarchInput />
      </div>
      <div className="mt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((item, index) => (
          <ProjectsCard key={index} props={item} />
        ))}
      </div>
    </div>
  );
};

export default Index;
