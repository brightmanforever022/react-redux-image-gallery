import { connect } from 'react-redux'
import { fetchPhotos } from '../../reducers/photos'
import { fetchFavorites, likeIt, unlikeIt } from '../../reducers/favorites'
import PhotoList from '../../components/photos/PhotoList'

const mapStateToProps = (state) => ({
  fresh: state.photos.fresh,
  loading: state.photos.loading,
  photos: state.photos.photos.slice(state.photos.offset, state.photos.offset + state.photos.limit),
  favorites: state.favorites.favorites,
  error: state.photos.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => {
    dispatch(fetchPhotos())
  },
  fetchFavorites: () => {
    dispatch(fetchFavorites())
  },
  like: (id) => {
    dispatch(likeIt(id))
  },
  unlike: (id) => {
    dispatch(unlikeIt(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)
