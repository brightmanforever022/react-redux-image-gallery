import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import GridList from '@material-ui/core/GridList'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import PhotoItem from '../PhotoItem'

import './styles.css'

const styles = {
  gridList: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'start',
    transform: 'translateZ(0)',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

class PhotoList extends Component {
  componentDidMount() {
    this.props.fetchPhotos()
    this.props.fetchFavorites()
  }

  render() {
    const { fresh, loading, photos = [], favorites = [], error, classes } = this.props
    const errorText = error ? JSON.stringify(error) : ''
    return (
      <div className={'photo-list-container'}>
        <h2>The number of Favorites: { favorites.length }</h2>
        {loading ? (
          <div className={classes.spinner}>
            <CircularProgress/>
          </div>
        ) : fresh ? (
          <GridList className={classes.gridList}>
            {Array.isArray(photos) && photos.map(photo => (
              <PhotoItem
                key={photo.id}
                {...photo}
                favorite={this.isFavorite(photo.id)}
                onLike={this.handleLike(photo.id)}
              />
            ))}
          </GridList>
        ) : (
          <Typography variant="h6">
            {errorText}
          </Typography>
        )}
      </div>
    )
  }

  isFavorite = (id) => {
    return this.props.favorites.indexOf(`${id}`) > -1
  }

  handleLike = (id) => () => {
    if (this.isFavorite(id)) {
      this.props.unlike(id)
    } else {
      this.props.like(id)
    }
  }
}

PhotoList.propTypes = {
  fresh: PropTypes.bool,
  loading: PropTypes.bool,
  photos: PropTypes.array,
  favorites: PropTypes.array,
  error: PropTypes.any,
  fetchPhotos: PropTypes.func,
  fetchFavorites: PropTypes.func,
  like: PropTypes.func,
  unlike: PropTypes.func
}

export default withStyles(styles)(PhotoList)
