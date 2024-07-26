import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Comment from "./Comments";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  AddComment,
  GetCommentsByForum,
  GetForumById,
  GetRepliesByComment,
} from "@/Store/Reducers/ForumSlice";
import TextArea from "@/components/Design/TextArea";
import { useFormik } from "formik";

const DiscussionDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { forumId } = router.query;

  const { discussion } = useSelector(({ ForumSlice }) => ForumSlice);

  const [comments, setComments] = useState([]);

  const user = {
    avatar: "https://i.pravatar.cc/300?img=12",
    name: "AudioExplorer",
    joinDate: "Jan 2022",
    totalPosts: 157,
    reputation: 1250,
    bio: "Passionate about innovative travel experiences and the intersection of technology and exploration. Always seeking new ways to immerse myself in different cultures.",
  };

  useEffect(() => {
    if (forumId) {
      formik.setFieldValue("forumId", forumId);
      dispatch(GetForumById(forumId));
      dispatch(GetCommentsByForum(forumId)).then((results) => {
        setComments(results.payload?.data);
      });
    }
  }, [forumId]);

  const [expandedComments, setExpandedComments] = useState({});

  const toggleReplies = (commentId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
    dispatch(GetRepliesByComment(commentId));
  };

  const formik = useFormik({
    initialValues: { text: "", forumId: "", commentId: "", isReplied: false },
    onSubmit: (values) => {
      handleAddComment(values);
    },
  });

  const handleAddComment = (values) => {
    dispatch(AddComment(values));
  };

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row bg-gray-50">
      {/* Main content */}
      <motion.div
        className="w-full lg:w-2/3 lg:pr-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          {discussion?.title}
        </h1>
        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          {discussion?.description}
        </p>

        {/* Add comment */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TextArea
            label="Comment"
            name="text"
            onChange={(e) => formik.setFieldValue("text", e.target.value)}
            placeholder="Add your views here"
          />
          <motion.button
            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => formik.handleSubmit()}
          >
            Post Comment
          </motion.button>
        </motion.div>

        {/* Comments section */}
        <div className="space-y-8 mt-4">
          {Array.isArray(comments) &&
            comments
              .filter((item) => item?.isReplied !== true)
              ?.map((comment) => (
                <Comment
                  key={comment?._id}
                  comment={comment}
                  expandedComments={expandedComments}
                  toggleReplies={toggleReplies}
                  handleAddComment={handleAddComment}
                  formik={formik}
                />
              ))}
        </div>
      </motion.div>

      {/* User details sidebar */}
      <motion.div
        className="w-full lg:w-1/3 mt-12 lg:mt-0 bg-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          src={discussion?.author?.img}
          alt={discussion?.author?.fullName}
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500"
        />
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          {discussion?.author?.fullName}
        </h2>
        <p className="text-gray-500 text-center mb-6">Joined {user.joinDate}</p>
        <div className="flex justify-center space-x-8 mb-6">
          <div className="text-center">
            <p className="font-semibold text-2xl text-blue-500">
              {user.totalPosts}
            </p>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-2xl text-blue-500">
              {user.reputation}
            </p>
            <p className="text-sm text-gray-500">Reputation</p>
          </div>
        </div>
        <p className="text-gray-700 mb-6 text-center">
          {discussion?.author?.bio}
        </p>
        <motion.button
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Follow User
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DiscussionDetails;
