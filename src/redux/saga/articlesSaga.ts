import { all, call, put, takeEvery } from "redux-saga/effects";
import * as type from "../type";

const getApiArticles = async (page: any) => {
  const res = await fetch(
    `https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs?p=${page}&limit=10`
  );
  const json = await res.json();
  return json;
};

const getApiSortArticles = async (payload: any) => {
  const { order, name, page } = payload;
  const s = name ? `sortBy=${name}` : "";
  const o = order ? `&order=${order}` : "";
  const p = `&page=${page}&l=10`;
  const query = s + o + p;
  const res = await fetch(
    `https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs?${query}`
  );
  const json = await res.json();
  return json;
};

function* fetchArticles(action: any) {
  const { page } = action.payload;

  try {
    const data: Array<any> = yield call(getApiArticles, page);

    yield put({
      type: type.GET_ARTICLES_SUCCESS,
      article: data,
    });
  } catch (error: any) {
    yield put({
      type: type.GET_ARTICLES_FAIL,
      message: error?.message,
    });
  }
}

function* sortArticles(action: any) {
  try {
    const data: Array<any> = yield call(getApiSortArticles, action.payload);
    yield put({
      type: type.GET_ARTICLES_SORT_SUCCESS,
      article: data,
    });
  } catch (error) {
    yield put({
      type: type.GET_ARTICLES_SORT_FAIL,
    });
  }
}

function* articlesSaga() {
  yield all([
    takeEvery(type.GET_ARTICLES_REQUESTED, fetchArticles),
    takeEvery(type.GET_ARTICLES_SORT_REQUESTED, sortArticles),
  ]);
}

export default articlesSaga;
