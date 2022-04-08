import { put, takeLatest } from 'redux-saga/effects';
import { fetchPhotos, watchListPhotos } from './photos'
import { fetchPhotosSuccess } from '../reducers/photos'

describe('Photo saga', () => {
  it('should dispatch action "PHOTOS/FETCH_REQUEST"', () => {
    const generator = watchListPhotos()
    expect(generator.next().value)
      .toEqual(takeLatest('PHOTOS/FETCH_REQUEST', fetchPhotos))
    
    expect(generator.next().done).toBeTruthy()
  })

  it('should put "fetchPhotoSuccess" function', () => {
    const mockResponse = [
      {
        albumId: 1,
        id: 1,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
      },
      {
        albumId: 1,
        id: 2,
        thumbnailUrl: "https://via.placeholder.com/150/771796",
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
      }
    ]

    const generator = fetchPhotos()
    generator.next()

    expect(generator.next(mockResponse).value)
      .toEqual(put(fetchPhotosSuccess(mockResponse)))
    expect(generator.next().done).toBeTruthy()
  })
})