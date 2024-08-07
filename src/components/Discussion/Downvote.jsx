import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Downvote = ({ downvote, handleDownvote }) => {
  return (
    <div className="flex items-center gap-2 rounded-full hover:text-red-500 border border-gray-200 px-2 py-1" onClick={() => handleDownvote()}>
      <div>
        <FaArrowDown className="hover:text-red-500" />
      </div>
      <p>{downvote.length || 0}</p>
    </div>
  );
};

export default Downvote;
