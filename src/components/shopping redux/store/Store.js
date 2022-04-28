import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "../shopping reducers/Index.js";

import { fetchProductsSaga, fetchDefaultProductsSaga } from "../store/Saga.js";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(fetchProductsSaga);
sagaMiddleware.run(fetchDefaultProductsSaga);

export default store;
