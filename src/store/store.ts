import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./reducers/moviesSlice";
import tvSlice from "./reducers/tvSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    tv: tvSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
