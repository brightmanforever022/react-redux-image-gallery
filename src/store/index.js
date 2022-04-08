import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import createRootReducer from '../reducers'
import sagas from '../sagas'

let middlewares = []

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const store = createStore(
    createRootReducer(),
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(sagas)

  return store
}

export default configureStore
