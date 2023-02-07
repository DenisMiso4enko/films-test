import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../models/types";

export interface ITvState {
  totalPages: number | null;
  tv: IMovie[];
  page?: number;
}

export const fetchTv = createAsyncThunk(
  "movies/fetchTv",
  async (page: number, { dispatch }) => {
    try {
      const response: Response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=30858d9213e167f0f2e99a5cb368a894&page=${page}`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

const initialState: ITvState = {
  totalPages: null,
  tv: [],
};

export const moviesSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTv.pending, (state) => {});
    builder.addCase(fetchTv.fulfilled, (state, action) => {
      const { total_pages, results } = action.payload;
      const tv = state.tv;
      state.totalPages = total_pages;
      state.tv = [...tv, ...results];
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
