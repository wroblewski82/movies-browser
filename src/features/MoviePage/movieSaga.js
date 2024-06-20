import { takeEvery, call, put } from "redux-saga/effects";

import {
  fetchMovieDataFromApi,
  fetchMovieSuccess,
  fetchMovieError,
} from "./movieSlice";
import { getDataFromApi } from "../MovieList/getDataFromApi";

function* watchFetchMovieHandler(action) {
  try {
    const movieId = action.payload;
    const movieApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ac5371c0e378529d6face3e2fab3b7c1`;
    const creditsApiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ac5371c0e378529d6face3e2fab3b7c1`;
    const movieData = yield call(getDataFromApi, movieApiUrl);
    const creditsData = yield call(getDataFromApi, creditsApiUrl);
    yield put(fetchMovieSuccess({ movieData, creditsData }));
  } catch (error) {
    yield put(fetchMovieError());
  }
}

export function* watchFetchMovieSaga() {
  yield takeEvery(fetchMovieDataFromApi.type, watchFetchMovieHandler);
}
