import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddCommonApi,
  AddProjectApi,
  ContributeApi,
  GetAllCommonApi,
  GetAllProjectsApi,
  GetProjectByIdApi,
} from "../Services/Service";
import { setLoading } from "./CommonSlice";

const initialState = {
  projects: [],
  projectDetails: {},
  tags: [],
  technologies: [],
};

export const AddProject = createAsyncThunk(
  "AddProject",
  async (values, { dispatch }) => {
    try {
      // dispatch(setLoading(true));
      const result = await AddProjectApi(values);
      //   dispatch(setLoading(false));
      if (result) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      //   dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      throw error;
    }
  }
);

export const GetAllProject = createAsyncThunk(
  "GetAllProject",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await GetAllProjectsApi(values);
      dispatch(setLoading(false));
      if (result) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      //   dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      throw error;
    }
  }
);
export const GetProjectById = createAsyncThunk(
  "GetProjectById",
  async (values, { dispatch }) => {
    try {
      // dispatch(setLoading(true));
      const result = await GetProjectByIdApi(values);
      //   dispatch(setLoading(false));
      if (result) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      //   dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      throw error;
    }
  }
);

export const ContributeToProject = createAsyncThunk(
  "ContributeToProject",
  async (values, { dispatch }) => {
    try {
      // dispatch(setLoading(true));
      const result = await ContributeApi(values);
      //   dispatch(setLoading(false));
      if (result) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      //   dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      throw error;
    }
  }
);

export const AddCommon = createAsyncThunk(
  "AddCommon",
  async (values, { dispatch }) => {
    try {
      // dispatch(setLoading(true));
      const result = await AddCommonApi(values);
      //   dispatch(setLoading(false));
      if (result) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      //   dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      throw error;
    }
  }
);

export const GetAllCommon = createAsyncThunk(
  "GetAllCommon",
  async (values, { dispatch }) => {
    try {
      // dispatch(setLoading(true));
      const result = await GetAllCommonApi(values);
      //   dispatch(setLoading(false));
      if (result) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      //   dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      throw error;
    }
  }
);
export const ProjectSlice = createSlice({
  name: "ProjectSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetAllProject.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(GetProjectById.fulfilled, (state, action) => {
      state.projectDetails = action.payload.data;
    });
    builder.addCase(GetAllCommon.fulfilled, (state, action) => {
      if (action.payload.data) {
        if (action.payload.data.type === "tags") {
          state.tags = action.payload.data.data;
        } else {
          state.technologies = action.payload.data.data;
        }
      }
    });
  },
});

export default ProjectSlice.reducer;
