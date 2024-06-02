import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/MovieList/moviesSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga()
  ]);
}
