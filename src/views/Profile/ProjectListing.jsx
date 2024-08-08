import NoDataAvailable from "@/components/NoDataAvailable";
import { GetProjectsByAuthor } from "@/Store/Reducers/ProjectSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-64 p-3 flex flex-col ">
    <div className="relative mb-4 flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-xl"></div>
      <img
        src={project?.img}
        alt={project?.name}
        className="w-full h-60 object-cover rounded-xl"
        onError={(e) =>
          (e.target.src =
            "https://cdn.dribbble.com/userupload/15636157/file/original-52213daa4b44875f4447d3aaa785785c.jpg?resize=1024x768&vertical=center")
        }
      />
    </div>
    <div className="px-1 flex-grow flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-800">{project?.name}</h2>
        <div className="flex items-center">
          <span className="text-sm font-bold text-gray-700">
            {project.contributors.length}
          </span>
          <svg
            className="w-4 h-4 ml-1 text-gray-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* <p className="text-sm text-gray-500 mb-4">
        {project.shortIntro.substring(0, 50)}...
      </p> */}

      {/* <div className="flex space-x-2 mb-4">
        {["instagram", "youtube", "tiktok"].map((platform, index) => (
          <span
            key={index}
            className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <span className="text-xs font-bold text-gray-500">
              {platform[0].toUpperCase()}
            </span>
          </span>
        ))}
      </div> */}

      <div className="flex justify-between items-center mb-4">
        <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs font-semibold rounded-full">
          {project.tags[0]?.label}
        </span>
      </div>
    </div>
    <button className="w-full bg-primary text-white py-3 font-bold rounded-xl hover:bg-indigo-500 transition-colors">
      View Project
    </button>
  </div>
);

const ProjectList = ({ userInfo }) => {
  const dispatch = useDispatch();

  const { projectsByAuthor } = useSelector(({ ProjectSlice }) => ProjectSlice);

  return (
    <>
      {projectsByAuthor.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-6 bg-gray-100">
          {Array.isArray(projectsByAuthor) &&
            projectsByAuthor?.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
      ) : (
        <div>
          <NoDataAvailable message="No Projects Available." />
        </div>
      )}
    </>
  );
};

export default ProjectList;
