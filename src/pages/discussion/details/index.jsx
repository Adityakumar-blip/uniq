import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Comment from "./Comments";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { GetCommentsByForum, GetForumById, GetRepliesByComment } from "@/Store/Reducers/ForumSlice";
import TextArea from "@/components/Design/TextArea";

const DiscussionDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { forumId } = router.query;

  const { discussion } = useSelector(({ ForumSlice }) => ForumSlice);

  const [comments, setComments] = useState([]);

  // const discussion = {
  //   title: "Can audio storytelling transform the way we travel?",
  //   summary:
  //     "Exploring the potential of audio guides and storytelling to enhance travel experiences and create immersive journeys. This innovative approach could revolutionize how we connect with new places and cultures.",
  //   comments: [
  //     {
  //       id: 1,
  //       userAvatar: "https://i.pravatar.cc/150?img=1",
  //       userName: "TravelEnthusiast",
  //       timestamp: "2 hours ago",
  //       content:
  //         "I've used audio guides in museums and they really do make a difference. I'd love to see this concept expanded to entire cities or regions!",
  //       replies: [
  //         {
  //           id: 2,
  //           userAvatar: "https://i.pravatar.cc/150?img=2",
  //           userName: "HistoryBuff",
  //           timestamp: "1 hour ago",
  //           content:
  //             "Absolutely! Audio storytelling could be a game-changer for historical sites. Imagine walking through ancient ruins while listening to vivid descriptions of what life was like thousands of years ago.",
  //           replies: [
  //             {
  //               id: 4,
  //               userAvatar: "https://i.pravatar.cc/150?img=2",
  //               userName: "AdityaKumar",
  //               timestamp: "1 hour ago",
  //               content:
  //                 "Absolutely! Audio storytelling could be a game-changer for historical sites. Imagine walking through ancient ruins while listening to vivid descriptions of what life was like thousands of years ago.",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       userAvatar: "https://i.pravatar.cc/150?img=3",
  //       userName: "TechNomad",
  //       timestamp: "3 days ago",
  //       content:
  //         "We should integrate AR with audio storytelling. Picture holding up your phone to see historical figures or events overlaid on the current landscape while listening to the narrative. That would be truly immersive!",
  //       replies: [],
  //     },
  //   ],
  // };
  // Sample user data
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
          <TextArea />
          <motion.button
            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
