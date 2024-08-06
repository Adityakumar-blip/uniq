import React, { useEffect, useState } from "react";
import { imgUrl } from "../../../utils/HTTP";
import TabComponent from "@/components/TabComponent";
import ContributionHeatmap from "@/components/ContributonGraph";
import ProfileModal from "@/components/ProfileModal";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { GetProjectsByAuthor } from "@/Store/Reducers/ProjectSlice";
import { GetForumsByAuthor } from "@/Store/Reducers/ForumSlice";

const profile = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        try {
          setUserInfo(JSON.parse(user));
        } catch (e) {
          console.error("Failed to parse user info from localStorage:", e);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      dispatch(GetProjectsByAuthor(userInfo?._id));
      dispatch(GetForumsByAuthor(userInfo?._id));
    }
  }, [dispatch, userInfo]);

  return (
    <div className=" ">
      <ProfileModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        id={userInfo?._id}
      />
      <div className="p-6 ">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black">
          {userInfo?.fullName}
        </p>
        <div className="flex items-center justify-between mt-6 px-4">
          <p className="text-black text-xl font-semibold">{userInfo?.email}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 border border-gray-500 rounded-full cursor-pointer"
          >
            <p className="text-black">Edit Profile</p>
          </button>
        </div>
      </div>
      <div className="divider divider-primary" />
      <div className="mx-12 p-10 rounded-md shadow-md">
        <ContributionHeatmap />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 gap-6">
        <div id="div1" className="flex justify-center">
          <img
            src={`${imgUrl}${userInfo?.img}`}
            className="w-[300px] sm:w-[400px] h-[400px] sm:h-[500px] object-cover"
          />
        </div>

        <div
          id="div2"
          className="w-full md:w-[70%] flex flex-col gap-6 md:gap-20"
        >
          <p className="text-base sm:text-lg text-black font-semibold">
            {userInfo?.bio}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 w-full">
            <button className="btn btn-primary w-full md:w-[10rem]">
              Excuse me
            </button>
            <div className="flex gap-4 items-center">
              <a
                href="https://linkedin.com"
                className="linkedin flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://github.com" className="github flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" p-6">
        <TabComponent userInfo={userInfo} />
      </div>
    </div>
  );
};

export default profile;
