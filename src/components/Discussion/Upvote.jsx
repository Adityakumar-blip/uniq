import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Upvote = ({ upvote, handleUpvote }) => {
  return (
    <div className="flex items-center gap-2 rounded-full hover:text-primary border border-gray-200 px-2 py-1">
      <div>
        <FaArrowUp className="hover:text-primary" />
      </div>
      <p>{upvote}</p>
    </div>
  );
};

export default Upvote;
