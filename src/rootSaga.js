import { all, fork } from "redux-saga/effects";

import { watchFetchMoviesSaga } from "./features/movieList/watchFetchMoviesSaga";

export function* rootSaga() {
  yield all([fork(watchFetchMoviesSaga)]);
}
