import { takeEvery, delay, put, call } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import {
  fetchMovieList,
  fetchMovieListSuccess,
  fetchMovieListError,
} from "./moviesSlice";
import { getMovieListFromApi } from "./getMovieListFromApi";

const genreListApi =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=5808b0503fd4aaf8a5636df1649fe0dc";

function* fetchMovieListHandler({ payload: page }) {
  try {
    yield delay(1000);
    const movieList = yield call(getMovieListFromApi, page);
    const genreList = yield call(getDataFromApi, genreListApi);
    yield put(fetchMovieListSuccess({ movieList, genreList }));
  } catch (error) {
    yield put(fetchMovieListError());
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovieList.type, fetchMovieListHandler);
}
