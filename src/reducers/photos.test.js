import photosReducer from './photos'

describe('photosReducer', () => {
  
  const mockState = {
    fresh: false,
    loading: true,
    photos: [],
    offset: 0,
    limit: 25,
    error: null
  }

  const mockPhotoData = [
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

  it('should return initial state', () => {
    expect(photosReducer(undefined, {})).toEqual(mockState)
  })

  it('should handle "PHOTOS/FETCH_REQUEST" action', () => {
    expect(photosReducer(mockState, {type: 'PHOTOS/FETCH_REQUEST'})).toEqual(mockState)
  })

  it('should handle "PHOTOS/FETCH_SUCCESS" action', () => {
    const result = photosReducer({}, {type: 'PHOTOS/FETCH_SUCCESS', payload: {photos: mockPhotoData}})
    expect(result.fresh).toEqual(true)
    expect(result.loading).toEqual(false)
    expect(result.photos.length).toEqual(2)
  })

  it('should handle "PHOTOS/FETCH_FAILURE" action', () => {
    const result = photosReducer({}, {type: 'PHOTOS/FETCH_FAILURE', error: {error: 'error text'}})
    expect(result.loading).toEqual(false)
    expect(result.error).toEqual('error text')
  })

  it('should handle "PHOTOS/CHANGE_LIMIT" action', () => {
    const result = photosReducer({}, {type: 'PHOTOS/CHANGE_LIMIT', payload: {limit: 50}})
    expect(result.limit).toEqual(50)
  })

  it('should handle "PHOTOS/CHANGE_OFFSET" action', () => {
    const result = photosReducer({}, {type: 'PHOTOS/CHANGE_OFFSET', payload: {offset: 100}})
    expect(result.offset).toEqual(100)
  })
})