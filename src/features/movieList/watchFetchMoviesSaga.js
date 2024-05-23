import { call, all, delay, put, takeEvery } from "redux-saga/effects";

import { getMoviesApi } from "./getMoviesApi";
import { getGenresApi } from "./getGenresApi";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenresSuccess,
} from "./movieSlice";

function* getGenres() {
  const fetchedGenres = yield call(
    getGenresApi,
    "https://api.themoviedb.org/3/genre/movie/list?api_key=ac5371c0e378529d6face3e2fab3b7c1"
  );
  if (fetchedGenres) {
    yield put(fetchGenresSuccess(fetchedGenres));
    yield console.log(fetchedGenres);
  } else return;
}

function* getMovies() {
  const fetchedMovies = yield call(
    getMoviesApi,
    "https://api.themoviedb.org/3/movie/popular?api_key=ac5371c0e378529d6face3e2fab3b7c1"
  );

  if (fetchedMovies) {
    yield put(fetchMoviesSuccess(fetchedMovies));
    yield console.log(fetchedMovies);
  } else yield put(fetchMoviesError());
}

function* fetchMoviesHandler() {
  yield delay(3000);
  yield all([call(getMovies), call(getGenres)]);
}

export function* watchFetchMoviesSaga() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}
