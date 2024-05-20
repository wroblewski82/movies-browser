import { all, fork } from "redux-saga/effects";

import { watchFetchMovies } from "./watchFetchMoviesSaga";

export function* rootSaga() {
  yield all([fork(watchFetchMovies)]);
}
