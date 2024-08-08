import {
  GetCommentsByForumAPI,
  GetDiscussionByIdAPI,
  GetDiscussionsAPI,
} from "@/Store/ServicesFile/Service";

export async function fetchForumById(forumId) {
  try {
    const response = await GetDiscussionByIdAPI(forumId);
    if (!response.ok) {
      throw new Error("Failed to fetch forum data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching forum data:", error);
    return null;
  }
}

export async function fetchCommentsByForum(forumId) {
  try {
    const response = await GetCommentsByForumAPI(forumId);
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}

export async function fetchAllDiscussionPaths() {
  try {
    const response = await GetDiscussionsAPI();
    if (!response.ok) {
      throw new Error("Failed to fetch forum paths");
    }
    const data = await response.json();
    return data.map((forum) => ({
      params: { forumId: forum?._id.toString() },
    }));
  } catch (error) {
    console.error("Error fetching forum paths:", error);
    return [];
  }
}
