import React from "react";
import { FaComment } from "react-icons/fa";

const Comment = () => {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1">
      <div>
        <FaComment />
      </div>
      <p>22k</p>
    </div>
  );
};

export default Comment;
