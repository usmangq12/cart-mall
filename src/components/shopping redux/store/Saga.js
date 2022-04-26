import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  ServiceApi,
  GetProducts,
  GetProductsItalian,
  GetProductsIRISH,
  GetProductsAnimal,
  GetProductsFlower,
  GetProductsChristmas,
  GetProductsValentines,
} from "../ServiceApi";

import {
  GET_PRODUCTS_LIST,
  SET_PRODUCTS_LIST,
  GET_PRODUCTS_LIST_ITALIAN,
  SET_PRODUCTS_LIST_ITALIAN,
  GET_PRODUCTS_LIST_IRISH,
  SET_PRODUCTS_LIST_IRISH,
  GET_PRODUCTS_LIST_ANIMAL,
  SET_PRODUCTS_LIST_ANIMAL,
  GET_PRODUCTS_LIST_FLOWER,
  SET_PRODUCTS_LIST_FLOWER,
  GET_PRODUCTS_LIST_CHRISTMAS,
  SET_PRODUCTS_LIST_CHRISTMAS,
  GET_PRODUCTS_LIST_VALENTINES,
  SET_PRODUCTS_LIST_VALENTINES,
} from "../Actions";

function* fetchProducts(action) {
  const products = yield call(GetProducts);
  yield put({ type: SET_PRODUCTS_LIST, payload: products });
}

export function* fetchProductsSaga() {
  yield takeEvery(GET_PRODUCTS_LIST, fetchProducts);
}

function* fetchProductsItalian(action) {
  const products = yield call(GetProductsItalian);
  yield put({ type: SET_PRODUCTS_LIST_ITALIAN, payload: products });
}

export function* fetchProductsItalianSaga() {
  yield takeEvery(GET_PRODUCTS_LIST_ITALIAN, fetchProductsItalian);
}

function* fetchProductsIrish(action) {
  const products = yield call(GetProductsIRISH);
  yield put({ type: SET_PRODUCTS_LIST_IRISH, payload: products });
}

export function* fetchProductsIrishSaga() {
  yield takeEvery(GET_PRODUCTS_LIST_IRISH, fetchProductsIrish);
}

function* fetchProductsAnimal(action) {
  const products = yield call(GetProductsAnimal);
  yield put({ type: SET_PRODUCTS_LIST_ANIMAL, payload: products });
}

export function* fetchProductsAnimalSaga() {
  yield takeEvery(GET_PRODUCTS_LIST_ANIMAL, fetchProductsAnimal);
}

function* fetchProductsFlower(action) {
  const products = yield call(GetProductsFlower);
  yield put({ type: SET_PRODUCTS_LIST_FLOWER, payload: products });
}

export function* fetchProductsFlowerSaga() {
  yield takeEvery(GET_PRODUCTS_LIST_FLOWER, fetchProductsFlower);
}

function* fetchProductsChristmas(action) {
  const products = yield call(GetProductsChristmas);
  yield put({ type: SET_PRODUCTS_LIST_CHRISTMAS, payload: products });
}

export function* fetchProductsChristmasSaga() {
  yield takeEvery(GET_PRODUCTS_LIST_CHRISTMAS, fetchProductsChristmas);
}

function* fetchProductsValentines(action) {
  const products = yield call(GetProductsValentines);
  yield put({ type: SET_PRODUCTS_LIST_VALENTINES, payload: products });
}

export function* fetchProductsValentinesSaga() {
  yield takeEvery(GET_PRODUCTS_LIST_VALENTINES, fetchProductsValentines);
}
