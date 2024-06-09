import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/MovieList/moviesSaga";
import { peopleSaga } from "./features/PeopleList/peopleSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    peopleSaga(),
  ]);
}
