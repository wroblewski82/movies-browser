import { takeEvery, delay, put, call } from "redux-saga/effects";
import { getMovieList } from "./getMovieList";
import {
  fetchMovieList,
  fetchMovieListSuccess,
  fetchMovieListError,
} from "./moviesSlice";

function* fetchMovieListHandler() {
  try {
    yield delay(1000);
    const movieList = yield call(getMovieList);
    yield put(fetchMovieListSuccess(movieList));
  } catch (error) {
    yield put(fetchMovieListError());
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovieList.type, fetchMovieListHandler);
}
