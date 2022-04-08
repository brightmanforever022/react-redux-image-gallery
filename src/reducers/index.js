import { combineReducers } from 'redux'
import photosReducer from './photos'
import favoritesReducer from './favorites'

export const createRootReducer = () => (
  combineReducers({
    photos: photosReducer,
    favorites: favoritesReducer
  })
)

export default createRootReducer
