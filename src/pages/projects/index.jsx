import ProjectsCard from "@/components/ProjectsCard";
import SeaarchInput from "@/components/SeaarchInput";
import React, { useEffect, useState } from "react";
import projectData from "../../../utils/projects";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { GetAllProject } from "@/Store/Reducers/ProjectSlice";
import Filters from "@/components/Filters";
import Image from "next/image";

import dog from "@/assets/dog.png";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { filter } = router.query;

  const [projects, setProjects] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(10);

  useEffect(() => {
    setValue(filter);
  }, [filter]);

  useEffect(() => {
    dispatch(GetAllProject({ search: value ? value : "", page, take })).then(
      (result) => {
        console.log(result);
        setProjects(result?.payload?.projects);
      }
    );
  }, [dispatch, value]);

  return (
    <div className="bg-white p-4 px-4 lg:px-16 md:px-16 h-screen">
      <p className="text-5xl font-bold text-black">Explore Projects</p>
      <p className="mt-4 text-gray-700 text-lg text-semibold">
        Discover and contribute to the best projects from engineers across the
        globe
      </p>
      <div className="w-[50%]">
        <SeaarchInput onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className="mt-6">
        <Filters />
      </div>
      <div className="mt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects && projects.length > 0 ? (
          projects?.map((item, index) => (
            <ProjectsCard key={index} props={item} />
          ))
        ) : (
          <div className="w-[90vh] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image src={dog} height={250} alt="No Data" />
              <p className="text-black">No Data Found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
