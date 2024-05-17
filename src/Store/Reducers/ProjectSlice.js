import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddProjectApi, GetAllProjectsApi } from "../Services/Service";

const initialState = {
  projects: [],
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
      // dispatch(setLoading(true));
      const result = await GetAllProjectsApi(values);
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
  },
});

export default ProjectSlice.reducer;
