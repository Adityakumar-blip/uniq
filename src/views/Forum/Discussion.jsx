import Comment from "@/components/Discussion/Comment";
import Downvote from "@/components/Discussion/Downvote";
import Share from "@/components/Discussion/Share";
import Upvote from "@/components/Discussion/Upvote";
import Image from "next/image";
import React from "react";

const Discussion = () => {
  const discussions = [
    {
      title: "What is the best way to learn a new language?",
      comments: "3.2k comments",
      authorImg:
        "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "How do you manage your time effectively?",
      comments: "1.4k comments",
      authorImg:
        "https://images.unsplash.com/photo-1584969405346-5230ae2bc4fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "What are the best resources for learning to code?",
      comments: "5.6k comments",
      authorImg:
        "https://images.unsplash.com/photo-1618375279997-351e32d80a02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "What is the most important skill for a leader?",
      comments: "2.3k comments",
      authorImg:
        "https://images.unsplash.com/photo-1570215778416-399723c225d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "How do you stay motivated when working on a long-term project?",
      comments: "4.1k comments",
      authorImg:
        "https://images.unsplash.com/photo-1569210538317-4d53f92a0e21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const topics = [
    { title: "Productivity", discussions: "12.4k discussions" },
    { title: "Learning", discussions: "9.7k discussions" },
    { title: "Technology", discussions: "15.2k discussions" },
    { title: "Wellness", discussions: "10.5k discussions" },
    { title: "Creativity", discussions: "8.3k discussions" },
    { title: "Career Development", discussions: "13.6k discussions" },
  ];

  return (
    <div className="min-h-screen bg-white text-black bg-gray-50 px-10 p-4">
      <div className="mb-10">
        <p className="text-4xl font-bold ">Welcome to second family</p>
        <p className="text-lg mt-2 font-normal text-gray-500">
          Connect with best developers, ask questions discuss ideas
        </p>
        <button className="btn btn-primary text-white mt-4">
          New Discussion
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        {/* Left Column */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-bold mb-4">Discussions</h1>
          <div className="space-y-4">
            {discussions.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <div className="mr-4 ">
                  <Image
                    src={item?.authorImg}
                    width={100}
                    height={100}
                    alt="author"
                    className="h-[50px] w-[50px] object-cover rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">{item.comments}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Upvote />
                    <Downvote />
                    <Comment />
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
