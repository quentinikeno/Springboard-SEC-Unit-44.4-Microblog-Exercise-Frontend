import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiPostURL = "http://localhost:5000/api/posts";
// posts: {postId: {title, description, body, votes, comments: [ { id, text }, ... ]}, ...}
const initialState = { posts: {}, isLoading: false };

export const getPostFromAPI = createAsyncThunk(
	"posts/getPostFromAPI",
	async (postId) => {
		try {
			const response = await axios.get(`${apiPostURL}/${postId}`);
			// { id, title, description, body, votes, comments: [ { id, text }, ... ], }
			return response.data;
		} catch (error) {
			return error.message;
		}
	}
);

export const sendPostToAPI = createAsyncThunk(
	"posts/sendPostToAPI",
	async ({ title, description, body }) => {
		try {
			const response = await axios.post(`${apiPostURL}`, {
				title,
				description,
				body,
			});
			// { id, title, description, body, votes }
			return response.data;
		} catch (error) {
			return error.message;
		}
	}
);

export const updatePostFromAPI = createAsyncThunk(
	"posts/updatePostFromAPI",
	async ({ title, description, body, id }) => {
		try {
			const response = await axios.put(`${apiPostURL}/${id}`, {
				title,
				description,
				body,
			});
			// { id, title, description, body, votes }
			return response.data;
		} catch (error) {
			return error.message;
		}
	}
);

const reducers = {
	addPost: (state, action) => {
		const { id, title, description, body, comments = [] } = action.payload;
		state.posts[id] = { title, description, body, comments };
	},

	editPost: (state, action) => {
		const { id, title, description, body } = action.payload;
		state.posts[id] = { ...state.posts[id], title, description, body };
	},
	deletePost: (state, action) => {
		delete state.posts[action.payload];
	},
	addComment: (state, action) => {
		const { postId, commentId, text } = action.payload;
		state.posts[postId].comments.push({ id: commentId, text });
	},
	deleteComment: (state, action) => {
		const { postId, commentId } = action.payload;
		state.posts[postId].comments = state.posts[postId].comments.filter(
			(comment) => comment.id !== commentId
		);
	},
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers,
	extraReducers: (builder) => {
		builder
			.addCase(getPostFromAPI.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPostFromAPI.fulfilled, (state, action) => {
				reducers.addPost(state, action);
				state.isLoading = false;
			})
			.addCase(getPostFromAPI.rejected, (state, action) => {
				state.isLoading = false;
				state.posts = action;
			})
			.addCase(sendPostToAPI.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(sendPostToAPI.fulfilled, (state, action) => {
				reducers.addPost(state, action);
				state.isLoading = false;
			})
			.addCase(sendPostToAPI.rejected, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
			})
			.addCase(updatePostFromAPI.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updatePostFromAPI.fulfilled, (state, action) => {
				reducers.editPost(state, action);
				state.isLoading = false;
			})
			.addCase(updatePostFromAPI.rejected, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
			});
	},
});

export const { addPost, editPost, deletePost, addComment, deleteComment } =
	postsSlice.actions;

export default postsSlice.reducer;
