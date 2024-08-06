import React from "react";
import { useSelector } from "react-redux";

const ForumListing = () => {
  const { forumsByAuthor } = useSelector(({ ForumSlice }) => ForumSlice);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {Object.keys(forumsByAuthor)?.map((year) => (
        <div key={year} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-300 pb-2">
            {year}
          </h2>
          {Object.keys(forumsByAuthor[year])?.map((month) => (
            <div key={month} className="mb-8">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                {month}
              </h3>
              <ul className="space-y-4">
                {forumsByAuthor[year][month]?.map((forum) => (
                  <li
                    key={forum.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center p-4 gap-6">
                      <div className="flex flex-col items-center justify-center bg-indigo-600 text-white rounded-full w-16 h-16 shadow-md">
                        <p className="text-xs font-medium">
                          {new Date(forum.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "short",
                            }
                          )}
                        </p>
                        <h3 className="text-2xl font-bold">
                          {new Date(forum.createdAt).getDate()}
                        </h3>
                      </div>
                      <div className="flex-grow">
                        <p className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                          {forum?.title}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ForumListing;
