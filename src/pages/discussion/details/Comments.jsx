import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCommentsByForum,
  GetRepliesByComment,
} from "@/Store/Reducers/ForumSlice";
import { formatDate } from "../../../../utils/Functions";

const Comment = ({
  comment,
  isReply = false,
  expandedComments,
  toggleReplies,
}) => {
  const dispatch = useDispatch();
  const [isReplying, setIsReply] = useState(false);

  const { replies } = useSelector(({ ForumSlice }) => ForumSlice);

  return (
    <motion.div
      className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
        isReply ? "ml-8 mt-4 border-l-4 border-blue-200" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <img
          src={comment?.author?.img}
          alt={comment?.author?.fullName}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold text-gray-800">
            {comment?.author?.fullName}
          </p>
          <p className="text-xs text-gray-500">
            {formatDate(comment?.createdAt)}
          </p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{comment.text}</p>
      <div className="flex items-center space-x-4 text-sm">
        <motion.button
          className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Upvote</span>
        </motion.button>
        <motion.button
          className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reply
        </motion.button>
        {comment?.replies?.length > 0 && (
          <motion.button
            className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleReplies(comment._id)}
          >
            {expandedComments?.[comment?._id]
              ? "Hide Replies"
              : `Show Replies (${comment.replies.length})`}
          </motion.button>
        )}
      </div>
      <AnimatePresence>
        {expandedComments?.[comment._id] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {replies[comment._id]?.map((reply) => (
              <Comment
                key={reply.id}
                comment={reply}
                isReply={true}
                toggleReplies={toggleReplies}
                expandedComments={expandedComments}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Comment;
