import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const titlesURL = "http://localhost:5000/api/posts";

const initialState = {
	titles: {},
	isLoading: false,
};

export const getTitles = createAsyncThunk("titles/getTitles", async () => {
	try {
		const response = await axios.get(titlesURL);
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

export const titlesSlice = createSlice({
	name: "titles",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
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
				state.titles = action.payload;
			});
	},
});

export default titlesSlice.reducer;
