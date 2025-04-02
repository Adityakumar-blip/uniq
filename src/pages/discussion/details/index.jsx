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
import Head from "next/head";
import {
  fetchAllDiscussionPaths,
  fetchCommentsByForum,
  fetchForumById,
} from "../../../../utils/api";
import { MdKeyboardBackspace, MdShare, MdBookmark } from "react-icons/md";
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";

const DiscussionDetails = ({ discussionProps, commentsProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { forumId } = router.query;

  const { discussion } = useSelector(({ ForumSlice }) => ForumSlice);
  const { token } = useSelector(({ CommonSlice }) => CommonSlice);

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const user = {
    avatar: discussion?.author?.img || "https://i.pravatar.cc/300?img=12",
    name: discussion?.author?.fullName || "Anonymous",
    joinDate: discussion?.author?.joinDate || "Jan 2022",
    totalPosts: discussion?.author?.totalPosts || 157,
    reputation: discussion?.author?.reputation || 1250,
    bio:
      discussion?.author?.bio || "Passionate community member and contributor.",
  };

  useEffect(() => {
    if (forumId) {
      setIsLoading(true);
      formik.setFieldValue("forumId", forumId);

      Promise.all([
        dispatch(GetForumById(forumId)),
        dispatch(GetCommentsByForum(forumId)),
      ])
        .then(([_, commentsResult]) => {
          setComments(commentsResult.payload?.data || []);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
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
    onSubmit: async (values) => {
      if (!values.text.trim()) return;
      await handleAddComment(values);
      formik.resetForm({ ...formik.initialValues, forumId });
    },
  });

  const handleAddComment = async (values) => {
    try {
      await dispatch(AddComment(values));
      await Promise.all([
        dispatch(GetForumById(forumId)),
        dispatch(GetCommentsByForum(forumId)).then((results) => {
          setComments(results.payload?.data || []);
        }),
      ]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const shareUrl = forumId
    ? `${origin}/discussion/details?forumId=${forumId}`
    : "";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: discussion?.title,
        text: discussion?.description?.substring(0, 100) + "...",
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Head>
        <title>{discussion?.title || "Discussion"}</title>
        <meta
          name="description"
          content={
            discussion?.content?.substring(0, 160) || "Join the discussion"
          }
        />
        <meta property="og:title" content={discussion?.title || "Discussion"} />
        <meta
          property="og:description"
          content={
            discussion?.content?.substring(0, 160) || "Join the discussion"
          }
        />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={discussion?.author?.img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={discussion?.title || "Discussion"}
        />
        <meta
          name="twitter:description"
          content={
            discussion?.content?.substring(0, 160) || "Join the discussion"
          }
        />
        <meta name="twitter:image" content={discussion?.author?.img} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Back button and breadcrumb */}
          <div className="mb-6">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <MdKeyboardBackspace size={20} />
              <span>Back to discussions</span>
            </button>
          </div>

          {isLoading ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Skeleton for main content */}
              <div className="w-full lg:w-2/3 animate-pulse">
                <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-12 w-3/4 bg-gray-200 rounded mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>

              {/* Skeleton for sidebar */}
              <div className="w-full lg:w-1/3 bg-white p-8 rounded-xl shadow-sm animate-pulse">
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
                <div className="flex justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="h-8 w-16 bg-gray-200 rounded mx-auto mb-1"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="h-8 w-16 bg-gray-200 rounded mx-auto mb-1"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </div>
                <div className="h-24 bg-gray-200 rounded mb-6"></div>
                <div className="h-12 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main content */}
              <div className="w-full lg:w-2/3">
                <motion.div
                  className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {discussion?.categoryData?.title && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        #{discussion.categoryData.title}
                      </span>
                    </div>
                  )}

                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    {discussion?.title}
                  </h1>

                  <div className="flex items-center mb-6">
                    <img
                      src={
                        discussion?.author?.img ||
                        "https://i.pravatar.cc/300?img=12"
                      }
                      alt={discussion?.author?.fullName || "User"}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {discussion?.author?.fullName || "Anonymous"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatDate(discussion?.createdAt) || "Recently"}
                      </p>
                    </div>
                  </div>

                  <div className="prose max-w-none text-gray-700 mb-8">
                    {discussion?.description ? (
                      <p className="text-lg leading-relaxed whitespace-pre-line">
                        {discussion.description}
                      </p>
                    ) : (
                      <p className="text-gray-500 italic">
                        No description provided
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setLiked(!liked)}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                          liked
                            ? "text-red-600 bg-red-50"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {liked ? <FaHeart /> : <FaRegHeart />}
                        <span>
                          {(discussion?.upvotes || 0) + (liked ? 1 : 0)}
                        </span>
                      </button>

                      <button className="flex items-center gap-2 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100">
                        <FaRegComment />
                        <span>{comments?.length || 0}</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handleShare}
                        className="flex items-center gap-2 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100"
                      >
                        <MdShare />
                        <span className="hidden sm:inline">Share</span>
                      </button>

                      <button
                        onClick={() => setBookmarked(!bookmarked)}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                          bookmarked
                            ? "text-indigo-600 bg-indigo-50"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <MdBookmark />
                        <span className="hidden sm:inline">
                          {bookmarked ? "Saved" : "Save"}
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Comments section */}
                <motion.div
                  className="bg-white rounded-xl shadow-sm p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <FaRegComment className="text-indigo-600" />
                    Comments ({comments?.length || 0})
                  </h2>

                  {/* Add comment */}
                  <div className="mb-8 border-b border-gray-100 pb-8">
                    <TextArea
                      label="Add a comment"
                      name="text"
                      value={formik.values.text}
                      onChange={(e) =>
                        formik.setFieldValue("text", e.target.value)
                      }
                      placeholder="Share your thoughts on this discussion..."
                      className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />

                    <div className="flex items-center justify-between mt-4">
                      <div>
                        {!token && (
                          <p className="text-rose-600 text-sm">
                            Please login to join the conversation
                          </p>
                        )}
                      </div>

                      <motion.button
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${
                          !formik.values.text.trim() || !token
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow"
                        }`}
                        whileHover={
                          formik.values.text.trim() && token
                            ? { scale: 1.02 }
                            : {}
                        }
                        whileTap={
                          formik.values.text.trim() && token
                            ? { scale: 0.98 }
                            : {}
                        }
                        onClick={() => formik.handleSubmit()}
                        disabled={!formik.values.text.trim() || !token}
                      >
                        Post Comment
                      </motion.button>
                    </div>
                  </div>

                  {/* Comments list */}
                  <AnimatePresence>
                    {comments?.length > 0 ? (
                      <div className="space-y-6">
                        {comments
                          .filter((item) => item?.isReplied !== true)
                          ?.map((comment, index) => (
                            <motion.div
                              key={comment?._id || index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <Comment
                                comment={comment}
                                expandedComments={expandedComments}
                                toggleReplies={toggleReplies}
                                handleAddComment={handleAddComment}
                                formik={formik}
                              />
                            </motion.div>
                          ))}
                      </div>
                    ) : (
                      <motion.div
                        className="text-center py-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 mx-auto text-gray-300 mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900">
                          No comments yet
                        </h3>
                        <p className="text-gray-500 mt-2">
                          Be the first to share your thoughts!
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Author sidebar */}
              <div className="w-full lg:w-1/3">
                <motion.div
                  className="sticky top-6 bg-white rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="h-24 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
                  <div className="px-6 pb-6 pt-0 -mt-12">
                    <div className="flex justify-center">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                      />
                    </div>

                    <div className="text-center mt-3">
                      <h2 className="text-xl font-bold text-gray-800">
                        {user.name}
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        Member since {user.joinDate}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-indigo-50 rounded-lg p-4 text-center">
                        <p className="font-semibold text-xl text-indigo-600">
                          {user.totalPosts}
                        </p>
                        <p className="text-xs text-indigo-600">Posts</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <p className="font-semibold text-xl text-blue-600">
                          {user.reputation}
                        </p>
                        <p className="text-xs text-blue-600">Reputation</p>
                      </div>
                    </div>

                    {user.bio && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          About
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {user.bio}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <motion.button
                        className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Follow
                      </motion.button>
                      <motion.button
                        className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Message
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Related discussions */}
                <motion.div
                  className="bg-white rounded-xl shadow-sm p-6 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    More from this category
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                      >
                        <h4 className="font-medium text-gray-800 hover:text-indigo-600 transition-colors cursor-pointer">
                          {discussion?.categoryData?.title === "React" &&
                            [
                              "How to optimize React performance",
                              "Understanding React hooks",
                              "State management solutions",
                            ][item - 1]}
                          {discussion?.categoryData?.title === "NextJS" &&
                            [
                              "NextJS 13 features explained",
                              "Server components in NextJS",
                              "API routes best practices",
                            ][item - 1]}
                          {!discussion?.categoryData?.title &&
                            [
                              "Interesting discussion topic",
                              "Popular community thread",
                              "Hot topic this week",
                            ][item - 1]}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {Math.floor(Math.random() * 20) + 1} comments •{" "}
                          {Math.floor(Math.random() * 100) + 1} upvotes
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscussionDetails;
