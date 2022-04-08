import { call, put, takeLatest } from 'redux-saga/effects'
import * as PhotosService from '../services/photos'
import { fetchPhotosFailure, fetchPhotosSuccess, PhotosActionTypeKeys } from '../reducers/photos'

export function* fetchPhotos() {
  try {
    const photos = yield call(PhotosService.get)
    yield put(fetchPhotosSuccess(photos))
  } catch (error) {
    yield put(fetchPhotosFailure(error))
  }
}

export function* watchListPhotos() {
  yield takeLatest(PhotosActionTypeKeys.FETCH_PHOTOS_REQUEST, fetchPhotos)
}
