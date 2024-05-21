import { all, fork } from "redux-saga/effects";

import { watchFetchMoviesSaga } from "./watchFetchMoviesSaga";

export function* rootSaga() {
  yield all([fork(watchFetchMoviesSaga)]);
}
