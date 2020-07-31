import { call, put, all, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_MEDIA_FILES,
  GET_MEDIA_FILES_FAILURE,
  GET_MEDIA_FILES_SUCCESS,
  MEDIA_FILES_LOADING
} from "../actions/constants";
import { getMediaFilesService } from "../services";

function* getMediaFiles(action) {
  try {
    yield put({type:MEDIA_FILES_LOADING});
    const response = yield call(getMediaFilesService, action.payload);
    if (!action.payload.query) {
      yield put({
        type: GET_MEDIA_FILES_SUCCESS,
        mediaFiles: response.data,
        currentPage: action.payload.currentPage,
        queryText: action.payload.queryText,
      });
    } else {
      yield put({
        type: GET_MEDIA_FILES_SUCCESS,
        mediaFiles: response.data.results,
        currentPage: action.payload.currentPage,
        queryText: action.payload.queryText,
      });
    }
  } catch (error) {
    yield put({ type: GET_MEDIA_FILES_FAILURE, errorMessage:error});
  }
}

function* getMediaFilesWatcher() {
  yield takeLatest(GET_MEDIA_FILES, getMediaFiles);
}

export default function* rootSaga() {
  yield all([getMediaFilesWatcher()]);
}
