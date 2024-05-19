import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchMovieList: (state) => {
      state.loading = true;
    },
    fetchMovieListSuccess: (state, { payload: movieList }) => {
      state.movies = movieList;
      state.loading = false;
    },
    fetchMovieListError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchMovieList, fetchMovieListSuccess, fetchMovieListError } =
  moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoadingStatus = (state) => selectMoviesState(state).loading;
export const selectErrorStatus = (state) => selectMoviesState(state).error;

export default moviesSlice.reducer;
