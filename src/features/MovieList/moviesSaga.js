import { takeEvery, delay, put, call } from "redux-saga/effects";
import { getDataFromApi } from "./getDataFromApi";
import {
  fetchMovieList,
  fetchMovieListSuccess,
  fetchMovieListError,
} from "./moviesSlice";

const movieListApi = "/movies-browser/apiResponse/popularMoviesData.json";
const genreListApi = "/movies-browser/apiResponse/genresData.json";

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
