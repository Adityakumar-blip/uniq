import Downvote from "@/components/Discussion/Downvote";
import Upvote from "@/components/Discussion/Upvote";
import NoDataAvailable from "@/components/NoDataAvailable";
import { Share } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const ForumsByCategory = () => {
  const router = useRouter();
  const { discussionByCategory } = useSelector(({ ForumSlice }) => ForumSlice);
  const categoryName = discussionByCategory[0]?.categoryData?.title;
  const { title } = router.query;

  const handleOpenDiscussion = (id) => {
    router.push({
      pathname: "/discussion/details",
      query: { forumId: id },
    });
  };

  console.log("discussion by category", discussionByCategory);

  // if (!discussionByCategory || Object.keys(discussionByCategory).length === 0) {
  //   return <NoDataAvailable />;
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold leading-relaxed text-primary bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            #{categoryName || title}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-gray-700">
              Discussions
            </h2>

            {Object.keys(discussionByCategory).length === 0 ? (
              <div className="w-full">
                <NoDataAvailable message="There are currently no discussions available in this category." />
              </div>
            ) : (
              <div className="space-y-6">
                {Array.isArray(discussionByCategory) &&
                  discussionByCategory?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="mr-4">
                            <Image
                              src={item?.author?.img}
                              width={60}
                              height={60}
                              alt="author"
                              className="h-[60px] w-[60px] object-cover rounded-full border-2 border-purple-200"
                            />
                          </div>
                          <div>
                            <h3
                              className="text-xl font-semibold text-gray-800 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
                              onClick={() => handleOpenDiscussion(item?._id)}
                            >
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              by {item.author.name} •{" "}
                              {new Date(item.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {item.content}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Upvote
                              upvote={item?.upvotes}
                              handleUpvote={() => handleUpvote(item?._id)}
                            />
                            <Downvote
                              downvote={item?.downvotes}
                              handleDownvote={() => handleDownvote(item?._id)}
                            />
                            <span className="text-sm text-gray-500">
                              {item.comments.length} comments
                            </span>
                          </div>
                          <button className="text-purple-600 hover:text-purple-800 transition-colors duration-200">
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          {/* Right Column (you can add content here later) */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            {/* Add content for the right column if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumsByCategory;
