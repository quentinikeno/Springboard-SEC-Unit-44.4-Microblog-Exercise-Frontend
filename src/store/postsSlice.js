import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postURL = "http://localhost:5000/api/posts";
// posts: {postId: {title, description, body}, ...}
const initialState = { posts: {}, isLoading: false };

export const getPost = createAsyncThunk("posts/getPosts", async (postId) => {
	try {
		const response = await axios.get(`${postURL}/${postId}`);
		// { id, title, description, body, votes, comments: [ { id, text }, ... ], }
		return response.data;
	} catch (error) {
		return error.message;
	}
});

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPost: (state, action) => {
			const { id, title, description, body } = action.payload;
			state.posts[id] = { title, description, body };
		},

		editPost: (state, action) => {
			const { id, title, description, body } = action.payload;
			state.posts[id] = { title, description, body };
		},
		deletePost: (state, action) => {
			delete state.posts[action.payload];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPost.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPost.fulfilled, (state, action) => {
				state.isLoading = false;
				const { id, title, description, body, votes, comments } =
					action.payload;
				state.posts[id] = { title, description, body, votes, comments };
			})
			.addCase(getPost.rejected, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
			});
	},
});

export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
