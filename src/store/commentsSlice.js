import { createSlice } from "@reduxjs/toolkit";

// {postId: {commentId: text, ...}}
const initialState = {};

export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		initComment: (state, action) => {
			// action.payload is the postId
			state[action.payload] = {};
		},
		addComment: (state, action) => {
			const { postId, commentId, text } = action.payload;
			state[postId][commentId] = text;
		},
		deleteComment: (state, action) => {
			const { postId, commentId } = action.payload;
			delete state[postId][commentId];
		},
	},
});

export const { initComment, addComment, deleteComment } = commentsSlice.actions;

export default commentsSlice.reducer;
