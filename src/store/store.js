import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";
import titlesReducer from "./titlesSlice";

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		comments: commentsReducer,
		titles: titlesReducer,
	},
});
