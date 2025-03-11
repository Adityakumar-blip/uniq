import ProjectsCard from "@/components/ProjectsCard";
import SeaarchInput from "@/components/SeaarchInput";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { GetAllProject } from "@/Store/Reducers/ProjectSlice";
import Filters from "@/components/Filters";
import Image from "next/image";

import emptyStateIllustration from "@/assets/dog.png";
import AnimatedTransition from "@/components/AnimatedTransition";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { filter } = router.query;

  const [projects, setProjects] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setValue(filter);
  }, [filter]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(GetAllProject({ search: value ? value : "", page, take }))
      .then((result) => {
        setProjects(result?.payload?.projects);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [dispatch, value, page, take]);

  const EmptyState = () => (
    <div className="col-span-full flex items-center justify-center py-16">
      <div className="flex flex-col items-center justify-center max-w-md text-center">
        <div className="relative w-64 h-64 mb-6 transition-transform hover:scale-105">
          <Image
            src={emptyStateIllustration}
            alt="No projects found"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-md"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          No Projects Found
        </h3>
        <p className="text-gray-600 mb-6">
          We couldn't find any projects matching your search criteria. Try
          adjusting your filters or search term.
        </p>
        <button
          onClick={() => {
            setValue("");
            router.push("/projects", undefined, { shallow: true });
          }}
          className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg transition-colors hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
        >
          View All Projects
        </button>
      </div>
    </div>
  );

  return (
    <AnimatedTransition>
      <div className="bg-white p-4 px-4 lg:px-16 md:px-16 min-h-screen">
        <p className="text-5xl font-bold text-black">Explore Projects</p>
        <p className="mt-4 text-gray-700 text-lg text-semibold">
          Discover and contribute to the best projects from engineers across the
          globe
        </p>
        <div className="w-full md:w-[50%] mt-6">
          <SeaarchInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for projects..."
          />
        </div>
        <div className="mt-6">
          <Filters />
        </div>

        {isLoading ? (
          <div className="col-span-full flex justify-center items-center py-20">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 bg-indigo-200 rounded-full mb-4"></div>
              <div className="text-gray-500">Loading projects...</div>
            </div>
          </div>
        ) : (
          <div className="mt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects && projects.length > 0 ? (
              projects?.map((item, index) => (
                <ProjectsCard key={index} props={item} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        )}
      </div>
    </AnimatedTransition>
  );
};

export default Index;
