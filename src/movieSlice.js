import { createSlice, createSelector } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], fetchMoviesStatus: undefined },
  reducers: {
    fetchMovies: (state) => {
      state.fetchMoviesStatus = "loading";
    },

    fetchMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.fetchMoviesStatus = "success";
    },

    fetchMoviesError: (state) => {
      state.fetchMoviesStatus = "error";
    },
  },
});

export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  movieSlice.actions;

export default movieSlice.reducer;
