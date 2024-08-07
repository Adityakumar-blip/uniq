import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Upvote = ({ upvote, handleUpvote }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [localUpvoteCount, setLocalUpvoteCount] = useState(upvote?.length || 0);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  useEffect(() => {
    setLocalUpvoteCount(upvote?.length || 0);
    setHasUpvoted(upvote.includes("currentUserId")); // Replace "currentUserId" with the actual user ID
  }, [upvote]);

  const handleClick = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    try {
      await handleUpvote();
      setLocalUpvoteCount((prev) => (hasUpvoted ? prev - 1 : prev + 1));
      setHasUpvoted(!hasUpvoted);
    } catch (error) {
      console.error("Upvote failed:", error);
    }
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      className="flex items-center gap-2 rounded-full hover:text-primary border border-gray-200 px-2 py-1 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-4 h-4 overflow-hidden">
        <FaArrowUp
          className={`absolute transition-all duration-500 ease-out ${
            isAnimating && !hasUpvoted
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        />
        <FaArrowUp
          className={`absolute transition-all duration-500 ease-out ${
            isAnimating && !hasUpvoted
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        />
      </div>
      <p
        className={`transition-all duration-500 ease-out ${
          isAnimating ? "text-primary" : ""
        }`}
      >
        {localUpvoteCount}
      </p>
    </div>
  );
};

export default Upvote;
