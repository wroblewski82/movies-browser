import { takeEvery, delay, put, call } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import {
  fetchPeopleList,
  fetchPeopleListSuccess,
  fetchPeopleListError,
} from "./peopleSlice";
import { getPeopleListFromApi } from "./getPeopleListFromApi";

const peopleListApi =
  "https://api.themoviedb.org/3/person/popular?api_key=5808b0503fd4aaf8a5636df1649fe0dc";

function* fetchMovieListHandler({ payload: page }) {
  try {
    yield delay(1000);
    const peopleList = yield call(getPeopleListFromApi, page);
    yield put(fetchPeopleListSuccess(peopleList));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPeopleList.type, fetchMovieListHandler);
}
