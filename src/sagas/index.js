import { all, fork } from 'redux-saga/effects'
import * as favoritesSagas from './favorites'
import * as photosSagas from './photos'

const allSagas = {
  ...favoritesSagas,
  ...photosSagas
}

export default function* root() {
  const sagas = []

  for (var name of Object.keys(allSagas)) {
    if (name.startsWith('watch')) {
      sagas.push(
        fork(allSagas[name])
      )
    }
  }

  yield all(sagas)
}
