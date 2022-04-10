import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Tooltip from '@material-ui/core/Tooltip'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Modal from '@material-ui/core/Modal'

import './styles.css'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
  }
}))

const PhotoItem = (props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <GridListTile key={props.id} className={'tileContainer'}>
        <img src={props.thumbnailUrl} alt={props.title} onClick={handleOpen} className={'photo-body'} />
        <GridListTileBar
          title={
            <Tooltip title={props.title} aria-label={props.title}>
              <span>{props.title}</span>
            </Tooltip>
          }
          titlePosition="top"
          actionIcon={
            <IconButton
              aria-label={`Favorite ${props.title}`}
              className={classes.icon}
              onClick={props.onLike}
            >
              <FavoriteIcon color={props.favorite ? 'secondary' : 'inherit'}/>
            </IconButton>
          }
          actionPosition="left"
          className={classes.titleBar}
        />
      </GridListTile>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={'paper'}>
            <img src={props.url} alt={props.title} />
            <IconButton
              className={classes.closeIcon}
              onClick={handleClose}
            >
              <CloseIcon size="small" color="inherit" />
            </IconButton>
          </div>
        </Fade>

      </Modal>
    </React.Fragment>
  )
}

export default PhotoItem