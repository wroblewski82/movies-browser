import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], fetchMoviesStatus: "" },
  reducers: {
    fetchMovies: () => {},

    fetchMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.fetchMoviesStatus = "success";
    },

    fetchMoviesError: (state) => (state.fetchMoviesStatus = "error"),
  },
});

export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  movieSlice.actions;

export default movieSlice.reducer;
