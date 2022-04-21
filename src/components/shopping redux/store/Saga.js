import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ServiceApi } from "../ServiceApi";

import { GET_CATEOGARIES_LIST, SET_CATEOGARIES_LIST } from "../Actions";

function* fetchCateogaries(action) {
  const user = yield call(ServiceApi);
  yield put({ type: SET_CATEOGARIES_LIST, payload: user });
}

export function* fetchCateogariesSaga() {
  yield takeEvery(GET_CATEOGARIES_LIST, fetchCateogaries);
}
