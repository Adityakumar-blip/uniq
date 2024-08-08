import React from "react";

const NoDataAvailable = ({ message }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-[500px] bg-transparent rounded-xl ">
      <svg
        className="w-24 h-24 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="mt-6 text-2xl font-semibold text-gray-800">
        No Data Available
      </h2>
      <p className="mt-2 text-gray-600">{message}</p>
    </div>
  );
};

export default NoDataAvailable;
