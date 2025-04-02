import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./Reducers/ProjectSlice";
import CommonSlice from "./Reducers/CommonSlice";
import ForumSlice from "./Reducers/ForumSlice";
import QuestionSlice from "./Reducers/QuestionSlice";

export const store = configureStore({
  reducer: {
    ProjectSlice: ProjectSlice,
    CommonSlice: CommonSlice,
    ForumSlice: ForumSlice,
    QuestionSlice: QuestionSlice,
    // AuthSlice: AuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
