import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/MovieList/moviesSaga";
import { watchFetchMovieSaga } from "./features/MoviePage/movieSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), watchFetchMovieSaga()]);
}
