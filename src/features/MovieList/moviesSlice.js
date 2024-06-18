import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    fetchDataStatus: "loading",
  },
  reducers: {
    fetchMovieList: () => {},
    fetchMovieListSuccess: (state, { payload: movieList, genreList }) => {
      state.movies = movieList;
      state.genres = genreList;
      state.fetchDataStatus = "success";
    },
    fetchMovieListError: (state) => {
      state.fetchDataStatus = "error";
    },
  },
});

export const { fetchMovieList, fetchMovieListSuccess, fetchMovieListError } =
  moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMoviesObject = (state) => selectMoviesState(state).movies;
export const selectFetchDataStatus = (state) =>
  selectMoviesState(state).fetchDataStatus;

export const selectMovieList = (state) =>
  selectMoviesObject(state).movieList?.results;
export const selectGenreList = (state) =>
  selectMoviesObject(state).genreList?.genres;

export const selectMovieById = (state, movieId) => {
  if (selectMovieList(state)?.some((movie) => movie.id === movieId)) {
    selectMovieList(state)?.find((movie) => movie.id === movieId);
  }
  return null;
};

export default moviesSlice.reducer;
