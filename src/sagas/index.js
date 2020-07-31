import { call, put,all, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_MEDIA_FILES, GET_MEDIA_FILES_SUCCESS} from "../actions/constants";
import {getMediaFilesService} from "../services";

function* getMediaFiles(action) {
    try {
        const response = yield call (getMediaFilesService,action.payload);
        if(!action.payload.query){
            yield put({type: GET_MEDIA_FILES_SUCCESS, mediaFiles:response.data,currentPage:action.payload.currentPage,queryText:action.payload.queryText});
        }
        else{
            yield put({type: GET_MEDIA_FILES_SUCCESS, mediaFiles:response.data.results,currentPage:action.payload.currentPage,queryText:action.payload.queryText});

        }
    } catch (e) {
        yield put({type: GET_MEDIA_FILES_SUCCESS, mediaFiles: []});
    }
}

function* getMediaFilesWatcher() {
    yield takeLatest(GET_MEDIA_FILES, getMediaFiles)
}

export default function* rootSaga() {
    yield all([
        getMediaFilesWatcher(),
    ]);
}
