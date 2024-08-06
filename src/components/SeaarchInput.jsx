import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchInput = ({ onChange }) => {
  const router = useRouter();
  const [isRotating, setIsRotating] = useState(false);

  const onRevert = () => {
    router.push({
      pathname: router.pathname,
    });
  };

  const handleRevert = () => {
    setIsRotating(true);
    onRevert();
    setTimeout(() => setIsRotating(false), 10000);
  };

  return (
    <div>
      <form className=" mt-8 rounded-full">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 pe-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 font-semibold leading-3"
            placeholder="Search all projects"
            onChange={onChange}
          />
          <button
            type="button"
            onClick={handleRevert}
            className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className={`w-5 h-5 ${isRotating && "animate-circular-rotation"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
          </button>
        </div>
      </form>
      <style jsx>{`
        @keyframes circular-rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-circular-rotation {
          animation: circular-rotation 1s linear;
        }
      `}</style>
    </div>
  );
};

export default SearchInput;
