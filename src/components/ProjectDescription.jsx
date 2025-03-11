import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import CopyButton from "./Clipboard";
import { useDispatch, useSelector } from "react-redux";
import { GetProjectById } from "@/Store/Reducers/ProjectSlice";
import { imgUrl } from "../../utils/HTTP";
import nocontri from "@/assets/nocontri.gif";
import Image from "next/image";

const ProjectDescription = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const { id } = router.query;
  const [isOpen, setIsOpen] = useState(false);

  const { projectDetails } = useSelector(({ ProjectSlice }) => ProjectSlice);
  const { token } = useSelector(({ CommonSlice }) => CommonSlice);

  console.log("Project Details", projectDetails);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (id) {
      dispatch(GetProjectById(id));
    }
  }, [id]);

  const handleConnect = () => {
    if (token) {
    } else {
      alert("Please login to connect with developer");
    }
  };

  const formatDate = (isoDate) => {
    let date = new Date(isoDate);

    let options = { year: "numeric", month: "long", day: "numeric" };

    let formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex gap-6 py-16 px-16 h-max  bg-white">
      <div className="w-8/12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl text-black font-bold">
              {projectDetails?.name}
            </p>
            <p className="mt-2 text-gray-400">
              Launched on {formatDate(projectDetails?.createdAt)}
            </p>
          </div>
          <div className="relative">
            <button
              onClick={handleToggle}
              className="btn btn-primary text-white m-1"
            >
              Start Contribute
            </button>

            {isOpen && (
              <div
                ref={buttonRef}
                className="absolute  right-0 mt-2 z-[1] shadow bg-base-100 rounded-box w-[500px]"
              >
                <div className="p-4">
                  <p className="text-xl font-semibold">Clone</p>
                  <CopyButton url={projectDetails?.githubUrl || ""} />
                  <p className="mt-4 font-semibold">
                    Clone project using web url
                  </p>
                </div>
                <div className="divider">OR</div>
                <div className="p-4">
                  <button
                    onClick={handleConnect}
                    className="btn btn-primary text-white w-[8rem]"
                  >
                    Connect
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* project description section */}
        <div className="mt-4 text-black">
          <p className="text-xl font-semibold">Description</p>
          <p className="mt-2"></p>
          <div
            dangerouslySetInnerHTML={{ __html: projectDetails?.description }}
          ></div>
        </div>

        {/* contributos section  */}
        <div className="mt-4 text-black">
          <p className="text-xl font-semibold">Contributors</p>
          {projectDetails && projectDetails?.contributors?.length > 0 ? (
            <div class="flex mb-3 mt-3 gap-1">
              <img
                class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <img
                class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                src="https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <img
                class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fHww"
                alt=""
              />
              <img
                class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
                alt=""
              />
              <img
                class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhlYWRzaG90fGVufDB8fDB8fHww"
                alt=""
              />
              <a
                class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
                href="#"
              >
                +3
              </a>
            </div>
          ) : (
            <div className="w-full flex item-center flex-col justify-center">
              <Image
                src={nocontri}
                height={200}
                width={200}
                alt="contribution"
              />
              <p>No Contributors availabel. Start Contributing</p>
            </div>
          )}
        </div>

        {/* project progress section  */}
        {/* <div className="mt-4">
          <p className="text-xl text-black font-semibold">Progress</p>
          <div class="w-[80%] bg-gray-200 mt-4 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div> */}

        {/* project links section */}
        <div className="w-[80%] text-black mt-6">
          <p className="text-xl font-semibold">Project Links</p>
          <div className="flex mt-4 items-center justify-between">
            <div>
              <p className="text-md font-semibold">Figma Design Files</p>
              <p className="text-xs text-gray-400">
                View and comment on the latest designs
              </p>
            </div>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="invert-1 cursor-pointer"
            >
              <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
            </svg>
          </div>
          <div className="flex mt-4 items-center justify-between">
            <div>
              <p className="text-md font-semibold">Insipiration Sources</p>
              <p className="text-xs text-gray-400">
                Explore the sources of our design insipiration
              </p>
            </div>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="invert-1 cursor-pointer"
            >
              <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
            </svg>
          </div>
          <div className="flex mt-4 items-center justify-between">
            <div>
              <p className="text-md font-semibold">Project Resources</p>
              <p className="text-xs text-gray-400">
                Access all the project-related documents and assets
              </p>
            </div>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="invert-1 cursor-pointer"
            >
              <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-4/12 text-black">
        <div className="flex items-center gap-2  font-semibold">
          <img
            class="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800"
            src={`${imgUrl}${projectDetails?.author?.img}`}
            alt=""
          />
          <div>
            <p className="text-xl">{projectDetails?.author?.fullName}</p>
            <p className="text-sm text-gray-500">Software Developer</p>
          </div>
        </div>
        <p className="mt-6 text-gray-500">{projectDetails?.author?.bio}</p>
        <div className="divider"></div>
        <div>
          <p className="text-2xl font-semibold">Project Tags</p>
          <div className="flex gap-2 flex-wrap mt-4">
            {projectDetails?.tags?.map((item, index) => (
              <div className="badge badge-primary px-3 py-4  text-white">
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <p className="text-2xl font-semibold">Languages</p>
          <div className="flex gap-2 flex-wrap mt-4">
            {projectDetails?.techstack?.map((item, index) => (
              <div className="badge badge-primary px-3 py-4  text-white">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
