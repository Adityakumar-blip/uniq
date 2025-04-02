import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetAllCategoriesAPI,
  GetAllQuestionsByCategoryAPI,
  getQuestionByIdAPI,
} from "../ServicesFile/Service";
import { setLoading } from "./CommonSlice";

const initialState = {
  allCategories: [],
  allQuestions: [],
  question: {},
};

export const getAllCategories = createAsyncThunk(
  "getAllCategories",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await GetAllCategoriesAPI(values);
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

export const getQuestionsByCategory = createAsyncThunk(
  "getQuestionsByCategory",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await GetAllQuestionsByCategoryAPI(values);
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

export const getQuestionById = createAsyncThunk(
  "getQuestionById",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await getQuestionByIdAPI(values);
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

const QuestionSlice = createSlice({
  name: "QuestionSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload.data;
    });
    builder.addCase(getQuestionsByCategory.fulfilled, (state, action) => {
      state.allQuestions = action.payload.data;
    });
    builder.addCase(getQuestionById.fulfilled, (state, action) => {
      state.question = action.payload.data;
    });
  },
});

export default QuestionSlice.reducer;
