import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    fetchMovieList: (state) => {
      state.isLoading = true;
    },
    fetchMovieListSuccess: (state, { payload: movieList, genreList }) => {
      state.movies = movieList;
      state.genres = genreList;
      state.isLoading = false;
    },
    fetchMovieListError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { fetchMovieList, fetchMovieListSuccess, fetchMovieListError } =
  moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMoviesObject = (state) => selectMoviesState(state).movies;
export const selectLoadingStatus = (state) =>
  selectMoviesState(state).isLoading;
export const selectErrorStatus = (state) => selectMoviesState(state).isError;

export const selectMoviesList = (state) =>
  selectMoviesObject(state).movieList?.results;
export const selectMoviesGenres = (state) =>
  selectMoviesObject(state).genreList.genres;

export default moviesSlice.reducer;
