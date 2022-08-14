import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

// {postId: {title, description, body}, ...}
const initialState = {};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPost: (state, action) => {
			const id = uuid();
			return { ...state, [id]: action.payload };
		},

		editPost: (state, action) => {
			const { id, title, description, body } = action.payload;
			const posts = { ...state };
			posts[id] = { title, description, body };
			return posts;
		},
		deletePost: (state, action) => {
			const { id } = action.payload;
			const posts = { ...state };
			delete posts[id];
			return posts;
		},
	},
});

export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
