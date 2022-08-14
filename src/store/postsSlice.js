import { createSlice } from "@reduxjs/toolkit";

// {postId: {title, description, body}, ...}
const initialState = {};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPost: (state, action) => {
			const { id, title, description, body } = action.payload;
			return { ...state, [id]: { title, description, body } };
		},

		editPost: (state, action) => {
			const { id, title, description, body } = action.payload;
			const posts = { ...state };
			posts[id] = { title, description, body };
			return posts;
		},
		deletePost: (state, action) => {
			const posts = { ...state };
			delete posts[action.payload];
			return posts;
		},
	},
});

export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
