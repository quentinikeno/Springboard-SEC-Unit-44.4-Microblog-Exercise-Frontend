import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiPostURL =
	process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";
// posts: {postId: {title, description, body, votes, comments: [ { id, text }, ... ]}, ...}
const initialState = { posts: {}, isLoading: false, error: null };

export const getPostFromAPI = createAsyncThunk(
	"posts/getPostFromAPI",
	async (postId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${apiPostURL}/${postId}`);
			// Throw an error if the post is not found.
			if (!response.data) throw new Error("not found");
			// { id, title, description, body, votes, comments: [ { id, text }, ... ], }
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const sendPostToAPI = createAsyncThunk(
	"posts/sendPostToAPI",
	async ({ title, description, body }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${apiPostURL}`, {
				title,
				description,
				body,
			});
			// { id, title, description, body, votes }
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const updatePostFromAPI = createAsyncThunk(
	"posts/updatePostFromAPI",
	async ({ title, description, body, id }, { rejectWithValue }) => {
		try {
			const response = await axios.put(`${apiPostURL}/${id}`, {
				title,
				description,
				body,
			});
			// { id, title, description, body, votes }
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deletePostFromAPI = createAsyncThunk(
	"posts/deletePostFromAPI",
	async (id, { rejectWithValue }) => {
		try {
			await axios.delete(`${apiPostURL}/${id}`);
			return id;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const sendCommentToAPI = createAsyncThunk(
	"posts/sendCommentToAPI",
	async ({ text, postId }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${apiPostURL}/${postId}/comments`,
				{
					text,
				}
			);
			// { text, id }
			const { text: commentText, id } = response.data;
			return { text: commentText, postId, commentId: id };
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteCommentFromAPI = createAsyncThunk(
	"posts/deleteCommentFromAPI",
	async ({ postId, commentId }, { rejectWithValue }) => {
		try {
			await axios.delete(`${apiPostURL}/${postId}/comments/${commentId}`);
			return { postId, commentId };
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const updateVoteToAPIPost = createAsyncThunk(
	"posts/updateVoteToAPIPost",
	async ({ postId, direction }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${apiPostURL}/${postId}/vote/${direction}`
			);
			return { postId, votes: response.data.votes };
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const reducers = {
	addPost: (state, action) => {
		const {
			id,
			title,
			description,
			body,
			comments = [],
			votes,
		} = action.payload;
		state.posts[id] = { title, description, body, comments, votes };
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
	updateVotes: (state, action) => {
		const { postId, votes } = action.payload;
		state.posts[postId].votes = votes;
	},
	incDecVotes: (state, action) => {
		const { postId, direction } = action.payload;
		const delta = direction === "up" ? 1 : -1;
		state.posts[postId].votes = state.posts[postId].votes + delta;
	},
	unsetError: (state) => {
		state.error = null;
	},
};

const extraReducers = (builder) => {
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
			state.error = action.payload;
		})
		.addCase(sendPostToAPI.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(sendPostToAPI.fulfilled, (state, action) => {
			reducers.addPost(state, action);
			state.isLoading = false;
		})
		.addCase(sendPostToAPI.rejected, (state) => {
			state.isLoading = false;
		})
		.addCase(updatePostFromAPI.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(updatePostFromAPI.fulfilled, (state, action) => {
			reducers.editPost(state, action);
			state.isLoading = false;
		})
		.addCase(updatePostFromAPI.rejected, (state) => {
			state.isLoading = false;
		})
		.addCase(deletePostFromAPI.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(deletePostFromAPI.fulfilled, (state, action) => {
			reducers.deletePost(state, action);
			state.isLoading = false;
		})
		.addCase(deletePostFromAPI.rejected, (state) => {
			state.isLoading = false;
		})
		.addCase(sendCommentToAPI.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(sendCommentToAPI.fulfilled, (state, action) => {
			reducers.addComment(state, action);
			state.isLoading = false;
		})
		.addCase(sendCommentToAPI.rejected, (state) => {
			state.isLoading = false;
		})
		.addCase(deleteCommentFromAPI.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(deleteCommentFromAPI.fulfilled, (state, action) => {
			reducers.deleteComment(state, action);
			state.isLoading = false;
		})
		.addCase(deleteCommentFromAPI.rejected, (state) => {
			state.isLoading = false;
		})
		.addCase(updateVoteToAPIPost.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(updateVoteToAPIPost.fulfilled, (state, action) => {
			reducers.updateVotes(state, action);
			state.isLoading = false;
		})
		.addCase(updateVoteToAPIPost.rejected, (state) => {
			state.isLoading = false;
		});
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers,
	extraReducers,
});

export const {
	addPost,
	editPost,
	deletePost,
	addComment,
	deleteComment,
	incDecVotes,
	unsetError,
} = postsSlice.actions;

export default postsSlice.reducer;
