import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginApi, SignupApi, UpdateUserApi } from "../ServicesFile/Service";
import { setLoading } from "./CommonSlice";

const initialState = {
  projects: [],
};

export const SignIn = createAsyncThunk(
  "SignIn",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await LoginApi(values);

      if (result) {
        return result;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      const errorMessage = error?.message || "An error occurred.";
      dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
export const SignUp = createAsyncThunk(
  "SignUp",
  async (values, { dispatch }) => {
    try {
      // dispatch(setLoading(true));
      const result = await SignupApi(values);
      //   dispatch(setLoading(false));
      console.log("Result of signup", result);
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

export const UpdateUser = createAsyncThunk(
  "UpdateUser",
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await UpdateUserApi(values);
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

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {},
});

export default AuthSlice.reducer;
