import { all } from "redux-saga/effects";
import { watchFetchPosts } from "./PostSaga";

export default function* rootSaga() {
  yield all([watchFetchPosts()]);
}
