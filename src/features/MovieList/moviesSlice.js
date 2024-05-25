import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchMovieList: (state) => {
      state.loading = true;
    },
    fetchMovieListSuccess: (state, { payload: movieList, genreList }) => {
      state.movies = movieList;
      state.genres = genreList;
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
export const selectMoviesObject = (state) => selectMoviesState(state).movies;
export const selectLoadingStatus = (state) => selectMoviesState(state).loading;
export const selectErrorStatus = (state) => selectMoviesState(state).error;

export const selectMoviesList = (state) =>
  selectMoviesObject(state).movieList?.results;
export const selectMoviesGenres = (state) =>
  selectMoviesObject(state).genreList.genres;

export default moviesSlice.reducer;
