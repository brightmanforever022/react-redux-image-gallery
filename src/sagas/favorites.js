import { call, put, take, takeLatest } from 'redux-saga/effects'
import * as FavoritesService from '../services/favorites'
import { fetchFavoritesComplete, FavoritesActionTypeKeys, likeIt, unlikeIt } from '../reducers/favorites'

export function* getFavorites() {
  const favorites = yield call(FavoritesService.get)
  yield put(fetchFavoritesComplete(favorites))
}

export function* watchListFavorites() {
  yield takeLatest(FavoritesActionTypeKeys.FETCH_FAVORITES_REQUEST, getFavorites)
}

export function* watchLike() {
  const action = yield take(FavoritesActionTypeKeys.LIKE)
  yield put(likeIt(action.payload.id))
}

export function* watchUnlike() {
  const action = yield take(FavoritesActionTypeKeys.UNLIKE)
  yield put(unlikeIt(action.payload.id))
}
