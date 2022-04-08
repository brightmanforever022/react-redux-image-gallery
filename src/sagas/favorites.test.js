import { put, takeLatest } from 'redux-saga/effects';
import { getFavorites, watchListFavorites, watchLike, watchUnlike } from './favorites'
import { fetchFavoritesComplete, likeIt, unlikeIt } from '../reducers/favorites'

describe('Favorites saga', () => {
  it('should dispatch action "FAVORITES/FETCH_REQUEST"', () => {
    const generator = watchListFavorites()
    expect(generator.next().value)
      .toEqual(takeLatest('FAVORITES/FETCH_REQUEST', getFavorites))
    
    expect(generator.next().done).toBeTruthy()
  })

  it('should put "fetchFavoritesComplete" function', () => {
    const mockResponse = ["1", "2", "3"]

    const generator = getFavorites()
    generator.next()

    expect(generator.next(mockResponse).value)
      .toEqual(put(fetchFavoritesComplete(mockResponse)))
    expect(generator.next().done).toBeTruthy()
  })

  it('should put "likeIt" function', () => {
    const mockResponse = {
      payload: {
        id: 4
      },
      type: "FAVORITES/LIKE"
    }
    const generator = watchLike()
    generator.next()

    expect(generator.next(mockResponse).value)
      .toEqual(put(likeIt(4)))
    expect(generator.next().done).toBeTruthy()
  })

  it('should put "unlikeIt" function', () => {
    const mockResponse = {
      payload: {
        id: 4
      },
      type: "FAVORITES/UNLIKE"
    }
    const generator = watchUnlike()
    generator.next()

    expect(generator.next(mockResponse).value)
      .toEqual(put(unlikeIt(4)))
    expect(generator.next().done).toBeTruthy()
  })
})