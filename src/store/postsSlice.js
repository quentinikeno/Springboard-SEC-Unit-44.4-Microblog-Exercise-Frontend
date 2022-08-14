import { createSlice } from "@reduxjs/toolkit";

// {postId: {title, description, body}, ...}
const initialState = {};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPost: (state, action) => {
			const { id, title, description, body } = action.payload;
			state[id] = { title, description, body };
		},

		editPost: (state, action) => {
			const { id, title, description, body } = action.payload;
			state[id] = { title, description, body };
		},
		deletePost: (state, action) => {
			delete state[action.payload];
		},
	},
});

export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
