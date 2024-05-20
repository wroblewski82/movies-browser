import { call, delay, put, takeEvery } from "redux-saga/effects";

import { getMoviesApi } from "./getMoviesApi";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./movieSlice";

function* fetchMoviesHandler() {
  const fetchedMovies = yield call(getMoviesApi, "/moviesPopular.json");

  if (fetchedMovies) {
    yield delay(3000);
    yield put(fetchMoviesSuccess(fetchedMovies));
    yield console.log(fetchedMovies);
  } else yield put(fetchMoviesError());
}

export function* watchFetchMovies() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}
