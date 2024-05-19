import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const CommonSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = CommonSlice.actions;

export const loadTokenFromLocalStorage = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(setToken(token));
  }
};

export default CommonSlice.reducer;
