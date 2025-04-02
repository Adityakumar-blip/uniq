import Comment from "@/components/Discussion/Comment";
import Downvote from "@/components/Discussion/Downvote";
import Share from "@/components/Discussion/Share";
import Upvote from "@/components/Discussion/Upvote";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UseNavigateToRoute from "../../../utils/navigtion";
import { useDispatch, useSelector } from "react-redux";
import {
  AddDownvote,
  AddUpvote,
  GetAllDiscussionCategory,
  GetAllDiscussions,
  GetDiscussionByCategory,
} from "@/Store/Reducers/ForumSlice";

const Discussion = () => {
  const NavigateToRoute = UseNavigateToRoute();
  const { categories } = useSelector(({ ForumSlice }) => ForumSlice);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([
        dispatch(GetAllDiscussions()),
        dispatch(GetAllDiscussionCategory()),
      ]);
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const { discussions } = useSelector(({ ForumSlice }) => ForumSlice);

  const handleOpenDiscussion = (id) => {
    router.push({
      pathname: "/discussion/details",
      query: { forumId: id },
    });
  };

  const handleUpvote = (forumId, e) => {
    e.stopPropagation();
    dispatch(AddUpvote({ forumId }));
  };

  const handleDownvote = (forumId, e) => {
    e.stopPropagation();
    dispatch(AddDownvote({ forumId }));
  };

  const handleCategoryNavigate = (categoryId, title) => {
    setActiveCategory(categoryId);
    router.push({
      pathname: "discussion/by-category",
      query: { categoryId, title },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 px-4 md:px-8 lg:px-12 py-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Welcome to Second Family
            </h1>
            <p className="text-lg mt-3 font-normal text-gray-600 max-w-xl">
              Connect with brilliant developers, explore innovative ideas, and
              grow together through meaningful discussions.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300 ease-in-out"
              onClick={() => NavigateToRoute("/discussion/new")}
            >
              Start a New Discussion
            </button>
          </div>
          <div className="w-48 h-48 flex-shrink-0 hidden md:block">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-500"
            >
              <path
                fill="currentColor"
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.4C64.8,55.5,53.7,67.3,40.3,74.3C26.9,81.3,11.4,83.4,-2.5,87.1C-16.5,90.8,-33,96.2,-46.5,91.6C-60.1,87,-70.8,72.5,-77.3,57.2C-83.8,41.8,-86.1,25.6,-87.3,9.8C-88.5,-6,-88.7,-21.4,-83.9,-35.2C-79.1,-48.9,-69.4,-61,-56.5,-68.2C-43.6,-75.4,-27.5,-77.8,-12.1,-78.7C3.2,-79.6,30.5,-83.6,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-6xl mx-auto mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All Discussions
          </button>
          {categories?.slice(0, 5).map((category) => (
            <button
              key={category._id}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category._id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() =>
                handleCategoryNavigate(category._id, category.title)
              }
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column - Discussions */}
        <div className="lg:w-2/3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Recent Discussions
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search discussions..."
                className="pl-10 pr-4 py-2 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white p-6 rounded-xl shadow-sm animate-pulse"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="flex-1">
                      <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>
                      <div className="h-4 w-1/4 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 w-full bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {discussions?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-100"
                  onClick={() => handleOpenDiscussion(item?._id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={item?.author?.img}
                        width={48}
                        height={48}
                        alt={item?.author?.name || "User"}
                        className="h-12 w-12 object-cover rounded-full border-2 border-indigo-50"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-500 mr-2">
                          {item.author?.name || "Anonymous"}
                        </span>
                        <span className="text-xs text-gray-400">
                          • {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {item.content?.substring(0, 150)}...
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Upvote
                            upvote={item?.upvotes}
                            handleUpvote={(e) => handleUpvote(item?._id, e)}
                          />
                          <Downvote
                            downvote={item?.downvotes}
                            handleDownvote={(e) => handleDownvote(item?._id, e)}
                          />
                          <div className="flex items-center space-x-1 text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                              />
                            </svg>
                            <span className="text-sm">
                              {item.comments?.length || 0}
                            </span>
                          </div>
                          <Share />
                        </div>

                        {item.category && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {item.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && discussions?.length === 0 && (
            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900">
                No discussions yet
              </h3>
              <p className="text-gray-500 mt-2">
                Be the first to start a conversation!
              </p>
              <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                onClick={() => NavigateToRoute("/discussion/new")}
              >
                Start Discussion
              </button>
            </div>
          )}
        </div>

        {/* Right Column - Categories & Trending */}
        <div className="lg:w-1/3">
          <div className="sticky top-4">
            {/* Categories Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                Trending Topics
              </h2>

              <div className="space-y-3">
                {categories?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                    onClick={() =>
                      handleCategoryNavigate(item?._id, item?.title)
                    }
                  >
                    <div className="mr-3 bg-gradient-to-br from-indigo-500 to-blue-600 p-2.5 flex items-center justify-center rounded-md w-10 h-10 text-white font-bold shadow-sm">
                      {item?.title.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base font-semibold text-gray-800">
                        {item?.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item?.discussions > 0
                          ? `${item?.discussions} Discussions`
                          : "No discussions yet"}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Community Stats
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-indigo-700">
                    {discussions?.length || 0}
                  </div>
                  <div className="text-sm text-indigo-600">Discussions</div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-700">
                    {categories?.length || 0}
                  </div>
                  <div className="text-sm text-blue-600">Categories</div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-700">
                    {discussions?.reduce(
                      (acc, discussion) => acc + discussion.comments.length,
                      0
                    ) || 0}
                  </div>
                  <div className="text-sm text-green-600">Comments</div>
                </div>

                {/* <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-700">
                    {discussions?.reduce(
                      (acc, discussion) => acc + discussion.upvotes,
                      0
                    ) || 0}
                  </div>
                  <div className="text-sm text-purple-600">Upvotes</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
