import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/PostAction";
import * as constant from "../constants/PostConstants";

function* addPosts(action) {
  try {
    const response = yield axios.post(
      "https://memories-server-1.onrender.com/posts",
      action.payload,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status >= 200 && response.status < 300) {
      yield put(actions.addPostsSuccess(response.data));
      console.log("success", response.data);
    } else {
      yield put(actions.addPostsFailure("Failed to add posts"));
      console.error("fail");
    }
  } catch (error) {
    yield put(actions.addPostsFailure(error));
  }
}

function fetchpostapi() {
  return axios.get("https://memories-server-1.onrender.com/posts");
}

function* fetchPosts() {
  try {
    const response = yield call(fetchpostapi);
    yield put(actions.fetchPostSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchPostFailure(error));
  }
}

function updatepostapi(id, postData) {
  return axios.patch(
    `https://memories-server-1.onrender.com/posts/${id}`,
    postData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function* updatePost(action) {
  const { id, postData } = action.payload;
  try {
    const response = yield call(updatepostapi, id, postData);
    yield put(actions.updatePostsSuccess(response.data));
  } catch (error) {
    yield put(actions.updatePostFailure(error));
  }
}

function* deletePost(action) {
  try {
    const response = yield call(
      axios.delete,
      `https://memories-server-1.onrender.com/posts/${action.payload}`
    );
    if (response.status === 200) {
      yield put(actions.deletePostSuccess(action.payload));
    } else {
      yield put(actions.deletePostFailure("Failed to delete post"));
    }
  } catch (error) {
    yield put(actions.deletePostFailure(error));
  }
}

function* LikePost(action) {
  try {
    const response = yield call(
      axios.patch,
      `https://memories-server-1.onrender.com/posts/${action.payload}/likePost`
    );
    if (response.status === 200) {
      yield put(actions.likePostSuccess(response.data));
    } else {
      yield put(actions.likePostFailure("Failde to like post"));
    }
  } catch (error) {
    yield put(actions.likePostFailure(error));
  }
}

export function* watchFetchPosts() {
  yield takeEvery(constant.ADD_POST_REQUEST, addPosts);
  yield takeLatest(constant.GET_POST_REQUEST, fetchPosts);
  yield takeEvery(constant.UPDATE_POST_REQUEST, updatePost);
  yield takeEvery(constant.DELETE_POST_REQUEST, deletePost);
  yield takeEvery(constant.LIKE_POST_REQUEST, LikePost);
}
