import { call, put, takeEvery } from "redux-saga/effects";
import { GetProducts, GetDefaultProducts } from "../ServiceApi";

import {
  GET_PRODUCTS_LIST,
  SET_PRODUCTS_LIST,
  GET_DEFAULT_PRODUCTS_LIST,
  SET_DEFAULT_PRODUCTS_LIST,
} from "../Actions";

function* fetchDefaultProducts(action) {
  const products = yield call(GetDefaultProducts);
  yield put({ type: SET_DEFAULT_PRODUCTS_LIST, payload: products });
}

export function* fetchDefaultProductsSaga() {
  yield takeEvery(GET_DEFAULT_PRODUCTS_LIST, fetchDefaultProducts);
}

function* fetchProducts(action) {
  const products = yield call(GetProducts, action.payload);
  yield put({ type: SET_PRODUCTS_LIST, payload: products });
}

export function* fetchProductsSaga() {
  yield takeEvery(GET_PRODUCTS_LIST, fetchProducts);
}
