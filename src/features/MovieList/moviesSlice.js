import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    loadingStatus: "loading",
  },
  reducers: {
    fetchMovieList: () => {},
    fetchMovieListSuccess: (state, { payload: movieList, genreList }) => {
      state.movies = movieList;
      state.genres = genreList;
      state.loadingStatus = "success";
    },
    fetchMovieListError: (state) => {
      state.loadingStatus = "error";
    },
  },
});

export const { fetchMovieList, fetchMovieListSuccess, fetchMovieListError } =
  moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMoviesObject = (state) => selectMoviesState(state).movies;
export const selectLoadingStatus = (state) =>
  selectMoviesState(state).loadingStatus;

export const selectMovieList = (state) =>
  selectMoviesObject(state).movieList?.results;
export const selectGenreList = (state) =>
  selectMoviesObject(state).genreList?.genres;

export default moviesSlice.reducer;
