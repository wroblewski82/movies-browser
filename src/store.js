import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import moviesReducer from "./features/movieList/movieSlice";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { movies: moviesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
