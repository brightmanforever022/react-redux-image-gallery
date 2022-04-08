export const PhotosActionTypeKeys = {
  FETCH_PHOTOS_COMPLETE: 'PHOTOS/FETCH_COMPLETE',
  FETCH_PHOTOS_FAILURE: 'PHOTOS/FETCH_FAILURE',
  FETCH_PHOTOS_REQUEST: 'PHOTOS/FETCH_REQUEST',
  FETCH_PHOTOS_SUCCESS: 'PHOTOS/FETCH_SUCCESS',
  CHANGE_LIMIT: 'PHOTOS/CHANGE_LIMIT',
  CHANGE_OFFSET: 'PHOTOS/CHANGE_OFFSET',
}

export const fetchPhotos = () => ({
  type: PhotosActionTypeKeys.FETCH_PHOTOS_REQUEST
})

export const fetchPhotosSuccess = (photos = []) => ({
  payload: {
    photos
  },
  type: PhotosActionTypeKeys.FETCH_PHOTOS_SUCCESS
})

export const fetchPhotosFailure = (error) => ({
  error: { error },
  type: PhotosActionTypeKeys.FETCH_PHOTOS_FAILURE
})

export const changeOffset = (offset) => ({
  payload: {
    offset
  },
  type: PhotosActionTypeKeys.CHANGE_OFFSET
})

export const changeLimit = (limit) => ({
  payload: {
    limit
  },
  type: PhotosActionTypeKeys.CHANGE_LIMIT
})

const initialState = {
  fresh: false,
  loading: true,
  photos: [],
  offset: 0,
  limit: 25,
  error: null
}

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case PhotosActionTypeKeys.FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case PhotosActionTypeKeys.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        fresh: true,
        loading: false,
        photos: action.payload.photos
      }

    case PhotosActionTypeKeys.FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.error
      }

    case PhotosActionTypeKeys.CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload.limit
      }

    case PhotosActionTypeKeys.CHANGE_OFFSET:
      return {
        ...state,
        offset: action.payload.offset
      }

    default:
      return state
  }
}

export default photosReducer
