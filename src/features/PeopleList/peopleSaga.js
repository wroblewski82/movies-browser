import { takeEvery, delay, put, call } from "redux-saga/effects";
import {
  fetchPeopleList,
  fetchPeopleListSuccess,
  fetchPeopleListError,
} from "./peopleSlice";
import { getPeopleListFromApi } from "./getPeopleListFromApi";

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
