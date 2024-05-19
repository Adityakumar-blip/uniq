import { POST, BASE_URL, GET } from "../../../utils/HTTP";

export const LoginApi = (data) => POST(`${BASE_URL}user/signin`, data);
export const SignupApi = (data) => POST(`${BASE_URL}user/signup`, data);
export const UpdateUserApi = (data) => POST(`${BASE_URL}user/updateUser`, data);

export const AddProjectApi = (data) =>
  POST(`${BASE_URL}projects/addProject`, data);
export const GetAllProjectsApi = (data) =>
  GET(`${BASE_URL}projects/getAllProject`, data);
