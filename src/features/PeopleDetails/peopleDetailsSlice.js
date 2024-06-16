import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    details: [],
    movieCredits: [],
    genres: [],
    fetchDataStatus: undefined,
  },
  reducers: {
    fetchPeopleDetails: (state) => {
      state.fetchDataStatus = "loading";
    },
    fetchPeopleDetailsSuccess: (
      state,
      { payload: personDetails, personMovieCredits, genreList }
    ) => {
      state.details = personDetails;
      state.movieCredits = personMovieCredits;
      state.genres = genreList;
      state.fetchDataStatus = "success";
    },
    fetchPeopleDetailsError: (state) => {
      state.fetchDataStatus = "error";
    },
  },
});

export const {
  fetchPeopleDetails,
  fetchPeopleDetailsSuccess,
  fetchPeopleDetailsError,
} = peopleDetailsSlice.actions;

export const selectPeopleDetailsState = (state) => state.peopleDetails;
export const selectFetchDataStatus = (state) =>
  selectPeopleDetailsState(state)?.fetchDataStatus;

export default peopleDetailsSlice.reducer;
