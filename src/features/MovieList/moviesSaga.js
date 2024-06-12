import { takeEvery, delay, put, call } from "redux-saga/effects";
import { getDataFromApi } from "../getDataFromApi";
import {
  fetchMovieList,
  fetchMovieListSuccess,
  fetchMovieListError,
} from "./moviesSlice";

const movieListApi =
  "https://api.themoviedb.org/3/movie/popular?api_key=5808b0503fd4aaf8a5636df1649fe0dc";
const genreListApi =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=5808b0503fd4aaf8a5636df1649fe0dc";

function* fetchMovieListHandler() {
  try {
    yield delay(1000);
    const movieList = yield call(getDataFromApi, movieListApi);
    const genreList = yield call(getDataFromApi, genreListApi);
    yield put(fetchMovieListSuccess({ movieList, genreList }));
  } catch (error) {
    yield put(fetchMovieListError());
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovieList.type, fetchMovieListHandler);
}
