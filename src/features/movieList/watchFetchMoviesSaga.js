import { call, delay, put, takeEvery } from "redux-saga/effects";

import { getMoviesApi } from "./getMoviesApi";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./movieSlice";

function* fetchMoviesHandler() {
  const fetchedMovies = yield call(
    getMoviesApi,
    "https://api.themoviedb.org/3/movie/popular?api_key=ac5371c0e378529d6face3e2fab3b7c1"
  );

  if (fetchedMovies) {
    yield delay(3000);
    yield put(fetchMoviesSuccess(fetchedMovies));
    yield console.log(fetchedMovies);
  } else yield put(fetchMoviesError());
}

export function* watchFetchMoviesSaga() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}
