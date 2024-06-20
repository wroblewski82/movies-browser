import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movie: null, credits: null },
  reducers: {
    fetchMovieDataFromApi: () => {},

    fetchMovieSuccess: (state, action) => {
      const { movieData, creditsData } = action.payload;
      state.movie = movieData;
      state.credits = creditsData;
    },

    fetchMovieError: (state) => {
      state.movie = null;
    },
  },
});

export const { fetchMovieDataFromApi, fetchMovieSuccess, fetchMovieError } =
  movieSlice.actions;

export const selectMovieState = (state) => state.movie;

export const selectMovie = (state) => selectMovieState(state).movie;

export const selectCredits = (state) => selectMovieState(state).credits;

export default movieSlice.reducer;
