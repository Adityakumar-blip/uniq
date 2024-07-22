import Comment from "@/components/Discussion/Comment";
import Downvote from "@/components/Discussion/Downvote";
import Share from "@/components/Discussion/Share";
import Upvote from "@/components/Discussion/Upvote";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import UseNavigateToRoute from "../../../utils/navigtion";
import { useDispatch, useSelector } from "react-redux";
import { GetAllDiscussions } from "@/Store/Reducers/ForumSlice";

const Discussion = () => {
  const NavigateToRoute = UseNavigateToRoute();

  const topics = [
    { title: "Productivity", discussions: "12.4k discussions" },
    { title: "Learning", discussions: "9.7k discussions" },
    { title: "Technology", discussions: "15.2k discussions" },
    { title: "Wellness", discussions: "10.5k discussions" },
    { title: "Creativity", discussions: "8.3k discussions" },
    { title: "Career Development", discussions: "13.6k discussions" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllDiscussions());
  }, []);

  const { discussions } = useSelector(({ ForumSlice }) => ForumSlice);

  return (
    <div className="min-h-screen bg-white text-black bg-gray-50 px-10 p-4">
      <div className="mb-10">
        <p className="text-4xl font-bold ">Welcome to second family</p>
        <p className="text-lg mt-2 font-normal text-gray-500">
          Connect with best developers, ask questions discuss ideas
        </p>
        <button
          className="btn btn-primary text-white mt-4"
          onClick={() => NavigateToRoute("/discussion/new")}
        >
          New Discussion
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        {/* Left Column */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-bold mb-4">Discussions</h1>
          <div className="space-y-4">
            {discussions?.data?.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <div className="mr-4 ">
                  <Image
                    src={item?.author?.img}
                    width={100}
                    height={100}
                    alt="author"
                    className="h-[50px] w-[50px] object-cover rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">
                    {item.comments.length > 0 && item?.comments?.length}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Upvote upvote={item?.upvotes} />
                    <Downvote downvote={item?.downvotes} />
                    <Comment comments={item?.comments} />
                    <Share />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <h1 className="text-2xl font-bold mb-4">Trending Topics</h1>
          <div className="space-y-4">
            {topics.map((item, index) => (
              <div key={index} className="flex items-center  p-4 rounded-lg ">
                <div className="mr-4">
                  <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12h18M3 12l6-6m-6 6l6 6"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">{item.discussions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
