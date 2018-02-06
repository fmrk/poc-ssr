import { call, put, takeLatest, select } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { fetchData } from "./api";

function*  getApiData(action) {
  try {
    const { id } = yield select(state => state.data);
    const payload = yield call(fetchData, id+1);
    yield put(receiveApiData(payload));
  } catch (e) {
    console.log(e);
  }
}
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
