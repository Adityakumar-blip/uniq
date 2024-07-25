import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCommentsByForum,
  GetRepliesByComment,
} from "@/Store/Reducers/ForumSlice";
import { formatDate } from "../../../../utils/Functions";
import { TbSend2 } from "react-icons/tb";

const Comment = ({
  comment,
  isReply = false,
  expandedComments,
  toggleReplies,
}) => {
  const dispatch = useDispatch();
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const { replies } = useSelector(({ ForumSlice }) => ForumSlice);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    console.log("Submitting reply:", replyText);
    setIsReplying(false);
    setReplyText("");
  };

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
          onClick={() => setIsReplying(!isReplying)}
        >
          {isReplying ? "Cancel" : "Reply"}
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
        {isReplying && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleReplySubmit}
            className="mt-4"
          >
            <div className="flex flex-col bg-gray-100 rounded-lg p-2">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write your message.."
                className="flex-grow bg-transparent text-black text-sm placeholder-primary focus:outline-none h-[100px] resize-none pt-1"
              />
              <div className="flex justify-between space-x-2 text-gray-400">
                <div>
                  <button type="button" className="hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button type="button" className="hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  type="submit"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                  <TbSend2 className="text-primary" size="20px" />
                </button>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
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
