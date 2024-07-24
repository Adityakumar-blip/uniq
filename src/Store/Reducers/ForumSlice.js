import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddDiscussionAPI,
  GetAllForumCategoryAPI,
  GetDiscussionsAPI,
} from "../ServicesFile/Service.js";
import { setLoading } from "./CommonSlice.js";

const initialState = {
  discussions: [],
  categories: [],
};

export const AddDiscussion = createAsyncThunk(
  "AddDiscussion",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await AddDiscussionAPI(values);
      dispatch(setLoading(false));
      if (result) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      //   dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      dispatch(setLoading(false));
      throw error;
    }
  }
);
export const AddCategory = createAsyncThunk(
  "AddCategory",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await AddForumCategoryAPI(values);
      dispatch(setLoading(false));
      if (result) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      //   dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      dispatch(setLoading(false));
      throw error;
    }
  }
);

export const GetAllDiscussions = createAsyncThunk(
  "GetAllDiscussions",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await GetDiscussionsAPI(values);
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
export const GetAllDiscussionCategory = createAsyncThunk(
  "GetAllDiscussionCategory",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await GetAllForumCategoryAPI(values);
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

export const ProjectSlice = createSlice({
  name: "ProjectSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetAllDiscussions.fulfilled, (state, action) => {
      state.discussions = action.payload.data;
    });
    builder.addCase(GetAllDiscussionCategory.fulfilled, (state, action) => {
      state.categories = action.payload.data;
    });
  },
});

export default ProjectSlice.reducer;
