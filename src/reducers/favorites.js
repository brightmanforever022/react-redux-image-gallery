import * as FavoritesService from '../services/favorites'
export const FavoritesActionTypeKeys = {
  FETCH_FAVORITES_COMPLETE: 'FAVORITES/FETCH_COMPLETE',
  FETCH_FAVORITES_REQUEST: 'FAVORITES/FETCH_REQUEST',
  LIKE: 'FAVORITES/LIKE',
  UNLIKE: 'FAVORITES/UNLIKE',
}

export const fetchFavorites = () => ({
  type: FavoritesActionTypeKeys.FETCH_FAVORITES_REQUEST
})

export const fetchFavoritesComplete = (favorites = []) => ({
  payload: {
    favorites
  },
  type: FavoritesActionTypeKeys.FETCH_FAVORITES_COMPLETE
})

export const likeIt = (id) => ({
  payload: {
    id
  },
  type: FavoritesActionTypeKeys.LIKE
})

export const unlikeIt = (id) => ({
  payload: {
    id
  },
  type: FavoritesActionTypeKeys.UNLIKE
})

const initialState = {
  favorites: []
}

export const favoritesReducer = (state = initialState, action) => {
  let favorites

  switch (action.type) {
    case FavoritesActionTypeKeys.FETCH_FAVORITES_COMPLETE:
      return {
        ...state,
        favorites: action.payload.favorites
      }

    case FavoritesActionTypeKeys.LIKE:
      if (state.favorites.includes(`${action.payload.id}`)) {
        return state
      }
      favorites = state.favorites.concat(`${action.payload.id}`)
      FavoritesService.set(favorites)
      return {
        ...state,
        favorites
      }

    case FavoritesActionTypeKeys.UNLIKE:
      if (!state.favorites.includes(`${action.payload.id}`)) {
        return state
      }
      const index = state.favorites.indexOf(`${action.payload.id}`)
      favorites = state.favorites.slice()
      favorites.splice(index, 1)
      // stores the changed favorites in storage
      FavoritesService.set(favorites)
      return {
        ...state,
        favorites
      }

    default:
      return state
  }
}

export default favoritesReducer
