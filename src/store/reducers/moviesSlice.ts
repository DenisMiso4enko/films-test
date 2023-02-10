import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../models/types";
import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers";

export interface CounterState {
  totalPages: number | null;
  movies: IMovie[];
  currentPage?: number;
}

// первая загрузка фильмов
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response: Response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=30858d9213e167f0f2e99a5cb368a894&page=1`
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
});

// больше фильмов
export const fetchMoreMovies = createAsyncThunk(
  "movies/fetchMoreMovies",
  async (page: number) => {
    try {
      const response: Response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=30858d9213e167f0f2e99a5cb368a894&page=${page}`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

const initialState: CounterState = {
  totalPages: null,
  movies: [],
  currentPage: 1,
};

export const tvSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    // movie
    builder.addCase(fetchMovies.pending, (state) => {});
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      const { total_pages, results } = action.payload;
      state.totalPages = total_pages;
      state.movies = results;
    });
    builder.addCase(fetchMoreMovies.pending, (state) => {});
    builder.addCase(fetchMoreMovies.fulfilled, (state, action) => {
      const { total_pages, results } = action.payload;
      const movies = state.movies;
      state.totalPages = total_pages;
      state.movies = [...movies, ...results];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setPage } = tvSlice.actions;

export default tvSlice.reducer;
