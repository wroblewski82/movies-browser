import { takeEvery, delay, put, call } from "redux-saga/effects";
import { getMovieList } from "./getMovieList";
import { getGenreList } from "./getGenreList";
import {
  fetchMovieList,
  fetchMovieListSuccess,
  fetchMovieListError,
} from "./moviesSlice";

function* fetchMovieListHandler() {
  try {
    yield delay(1000);
    const movieList = yield call(getMovieList);
    const genreList = yield call(getGenreList);
    yield put(fetchMovieListSuccess({ movieList, genreList }));
  } catch (error) {
    yield put(fetchMovieListError());
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovieList.type, fetchMovieListHandler);
}
