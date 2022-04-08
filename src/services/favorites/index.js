const FAVORITES_KEY = '@ALBUM/FAROVIRTES'

export function get () {
  const favorites = window.localStorage.getItem(FAVORITES_KEY) || ''
  return Promise.resolve(favorites.split(',').filter(Boolean))
}

export function set (favorites = []) {
  const value = favorites.join(',')
  window.localStorage.setItem(FAVORITES_KEY, value)
}
