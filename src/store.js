import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import moviesReducer from "./features/MovieList/moviesSlice";
import movieReducer from "./features/MoviePage/movieSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
