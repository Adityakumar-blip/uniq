import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  loading: false,
  showLogin: false,
  user: {},
};

const CommonSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    setUser: (state, action) => {
      localStorage.setItem("user", action.payload);
      state.user = action.payload;
    },
    clearUser: (state, action) => {
      localStorage.removeItem("user");
      state.user = {};
    },
    clearToken: (state) => {
      state.token = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLogin: (state, action) => {
      state.showLogin = action.payload;
    },
  },
});

export const {
  setToken,
  clearToken,
  setLoading,
  setUser,
  clearUser,
  setLogin,
} = CommonSlice.actions;

export const loadTokenFromLocalStorage = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(setToken(token));
  }
};

export const loadUserFromLocalStorage = () => (dispatch) => {
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  if (parsedUser) {
    dispatch(setToken(parsedUser));
  }
};

export default CommonSlice.reducer;
