import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import moviesReducer from "./features/MovieList/moviesSlice";
import peopleSlice from "./features/PeopleList/peopleSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
