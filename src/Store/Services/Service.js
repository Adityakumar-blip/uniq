import { POST, BASE_URL, GET } from "../../../utils/HTTP";

export const AddProjectApi = (data) =>
  POST(`${BASE_URL}projects/addProject`, data);
export const GetAllProjectsApi = (data) =>
  GET(`${BASE_URL}projects/getAllProject`, data);
