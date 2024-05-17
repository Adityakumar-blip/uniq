import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./Reducers/ProjectSlice";

export const store = configureStore({
  reducer: {
    ProjectSlice: ProjectSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
