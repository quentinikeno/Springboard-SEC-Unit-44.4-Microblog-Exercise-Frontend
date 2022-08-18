import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiPostURL = "http://localhost:5000/api/posts";

const initialState = {
	titles: {},
	isLoading: false,
};

export const getTitles = createAsyncThunk("titles/getTitles", async () => {
	try {
		const response = await axios.get(apiPostURL);
		// Data from API will be in the form of [{ id, title, description, votes, }, ...]
		// Change it to be in the form of {id: {title, description, votes}, ...}
		return response.data.reduce((previous, current) => {
			const { id, title, description, votes } = current;
			return { ...previous, [id]: { title, description, votes } };
		}, {});
	} catch (error) {
		return error.message;
	}
});

export const updateVoteToAPITitle = createAsyncThunk(
	"titles/updateVoteToAPITitle",
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
	updateVotes: (state, action) => {
		const { postId, votes } = action.payload;
		state.titles[postId].votes = votes;
	},
};

const extraReducers = (builder) => {
	builder
		.addCase(getTitles.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(getTitles.fulfilled, (state, action) => {
			state.isLoading = false;
			state.titles = action.payload;
		})
		.addCase(getTitles.rejected, (state, action) => {
			state.isLoading = false;
		})
		.addCase(updateVoteToAPITitle.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(updateVoteToAPITitle.fulfilled, (state, action) => {
			state.isLoading = false;
			reducers.updateVotes(state, action);
		})
		.addCase(updateVoteToAPITitle.rejected, (state, action) => {
			state.isLoading = false;
		});
};

export const titlesSlice = createSlice({
	name: "titles",
	initialState,
	reducers,
	extraReducers,
});

export default titlesSlice.reducer;
