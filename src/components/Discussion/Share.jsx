import React from "react";
import { FaShare } from "react-icons/fa";

const Share = () => {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1">
      <div>
        <FaShare />
      </div>
      <p>Share</p>
    </div>
  );
};

export default Share;
