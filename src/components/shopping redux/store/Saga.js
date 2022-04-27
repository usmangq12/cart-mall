import { call, put, takeEvery } from "redux-saga/effects";
import { GetProducts } from "../ServiceApi";

import { GET_PRODUCTS_LIST, SET_PRODUCTS_LIST } from "../Actions";

function* fetchProducts(action) {
  const products = yield call(GetProducts, action.payload);
  yield put({ type: SET_PRODUCTS_LIST, payload: products });
}

export function* fetchProductsSaga() {
  yield takeEvery(GET_PRODUCTS_LIST, fetchProducts);
}
