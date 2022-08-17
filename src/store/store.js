import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import titlesReducer from "./titlesSlice";

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		titles: titlesReducer,
	},
});
