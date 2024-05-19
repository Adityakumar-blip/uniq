import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./Reducers/ProjectSlice";
import CommonSlice from "./Reducers/CommonSlice";

export const store = configureStore({
  reducer: {
    ProjectSlice: ProjectSlice,
    CommonSlice: CommonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
