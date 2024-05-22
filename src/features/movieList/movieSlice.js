import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], fetchMoviesStatus: undefined },
  reducers: {
    fetchMovies: (state) => {
      state.fetchMoviesStatus = "loading";
    },

    fetchMoviesSuccess: (state, action) => {
      state.movies.push(action.payload);
      state.fetchMoviesStatus = "success";
    },

    fetchMoviesError: (state) => {
      state.fetchMoviesStatus = "error";
    },
  },
});

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;

export const selectFetchMoviesStatus = (state) =>
  selectMoviesState(state).fetchMoviesStatus;

export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  movieSlice.actions;

export default movieSlice.reducer;
