import { all } from "redux-saga/effects";
import articlesSaga from "./articlesSaga";

export default function* rootSaga() {
  yield all([articlesSaga()]);
}
