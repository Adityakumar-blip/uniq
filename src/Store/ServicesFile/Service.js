import { POST, BASE_URL, GET } from "../../../utils/HTTP";

export const LoginApi = (data) => POST(`${BASE_URL}user/signin`, data);
export const SignupApi = (data) => POST(`${BASE_URL}user/signup`, data);
export const UpdateUserApi = (data) => POST(`${BASE_URL}user/updateUser`, data);

export const AddProjectApi = (data) =>
  POST(`${BASE_URL}projects/addProject`, data);
export const GetAllProjectsApi = (data) =>
  GET(
    `${BASE_URL}projects/getAllProject?search=${data.search}&take=${data.take}&page=${data.page}`
  );
export const GetProjectByIdApi = (data) =>
  GET(`${BASE_URL}projects/getProjectById?_id=${data}`);
export const ContributeApi = (data) =>
  POST(`${BASE_URL}projects/contribute`, data);
export const AddCommonApi = (data) => POST(`${BASE_URL}common/addCommon`, data);
export const GetAllCommonApi = (data) =>
  GET(`${BASE_URL}common/getAllCommon?type=${data}`);
export const GetProjectsByAuthorAPI = (data) =>
  GET(`${BASE_URL}projects/getProjectByAuthor?authorId=${data}`);

// discussion APIs
export const AddDiscussionAPI = (data) =>
  POST(`${BASE_URL}forum/addDiscussion`, data);
export const AddForumCategoryAPI = (data) =>
  POST(`${BASE_URL}forum/addCategory`, data);
export const AddCommentAPI = (data) =>
  POST(`${BASE_URL}forum/addComment`, data);
export const AddUpvoteAPI = (data) => POST(`${BASE_URL}forum/addUpvote`, data);
export const AddDownvoteAPI = (data) =>
  POST(`${BASE_URL}forum/addDownvote`, data);

export const GetAllForumCategoryAPI = (data) =>
  GET(`${BASE_URL}forum/getAllCategory`, data);
export const GetDiscussionsAPI = (data) =>
  GET(`${BASE_URL}forum/getAllDiscussion`);
export const GetDiscussionByIdAPI = (data) =>
  GET(`${BASE_URL}forum/getDiscussionById?forumId=${data}`);
export const GetCommentsByForumAPI = (data) =>
  GET(`${BASE_URL}forum/getCommentsByForum?forumId=${data}`);
export const GetRepliesByCommentAPI = (data) =>
  GET(`${BASE_URL}forum/getRepliesById?commentId=${data}`);
export const GetForumByAuthorAPI = (data) =>
  GET(`${BASE_URL}forum/getDiscussionByAuthor?authorId=${data}`);
export const GetDiscussionByCategoryAPI = (data) =>
  GET(`${BASE_URL}forum/getDiscussionByCategory?categoryId=${data}`);

// ** Question APIs
export const GetAllCategoriesAPI = (data) =>
  GET(`${BASE_URL}questionCategory/getAllCategories`, data);
export const GetAllQuestionsByCategoryAPI = (data) =>
  GET(`${BASE_URL}question/getQuestionByCategory?id=${data}`);
export const getQuestionByIdAPI = (data) =>
  GET(`${BASE_URL}question/getQuestionById?id=${data}`);
