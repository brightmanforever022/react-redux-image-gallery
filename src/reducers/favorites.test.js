import favoritesReducer from "./favorites"

describe('favoritesReducer', () => {
  it('should return the initial state', () => {
    expect(favoritesReducer(undefined, {})).toEqual({favorites: []})
  })

  it('should handle "FAVORITES/FETCH_COMPLETE" action', () => {
    const mockData = ["1", "2", "3"]
    const result = favoritesReducer({}, {type: 'FAVORITES/FETCH_COMPLETE', payload: {favorites: mockData}})
    expect(result.favorites).toEqual(mockData)
  })

  it('should handle "FAVORITES/LIKE" action', () => {
    const mockData = ["1", "2", "3"]
    const result = favoritesReducer({favorites: mockData}, {type: 'FAVORITES/LIKE', payload: {id: 4}})
    expect(result.favorites).toEqual(["1", "2", "3", "4"])
  })

  it('should handle "FAVORITES/UNLIKE" action', () => {
    const mockData = ["1", "2", "3", "4"]
    const result = favoritesReducer({favorites: mockData}, {type: 'FAVORITES/UNLIKE', payload: {id: 4}})
    expect(result.favorites).toEqual(["1", "2", "3"])
  })
})