import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/MovieList/moviesSaga";
import { peopleSaga } from "./features/PeopleList/peopleSaga";
import { watchFetchMovieSaga } from "./features/MoviePage/movieSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), peopleSaga(), watchFetchMovieSaga()]);
}
