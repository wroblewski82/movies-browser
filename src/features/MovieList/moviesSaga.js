import { takeEvery, delay, put, call, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../getDataFromApi";
import {
  fetchMovieList,
  fetchMovieListSuccess,
  fetchMovieListError,
} from "./moviesSlice";
import { getGenresFromApi } from "./getGenresFromApi";

const genreListApi =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=5808b0503fd4aaf8a5636df1649fe0dc";

function* fetchMovieListHandler({ payload: page }) {
  try {
    yield delay(600);
    const movieList = yield call(getDataFromApi, page);
    const genreList = yield call(getGenresFromApi, genreListApi);
    yield put(fetchMovieListSuccess({ movieList, genreList }));
  } catch (error) {
    yield put(fetchMovieListError());
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovieList.type, fetchMovieListHandler);
}
