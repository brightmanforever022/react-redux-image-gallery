import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeLimit, changeOffset } from '../../../reducers/photos'
import CssBaseline from '@material-ui/core/CssBaseline'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FlatPagination from 'material-ui-flat-pagination'

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0
    }
  }

  render() {
    const {limit, offset, total, onLimitChange, onOffsetChange} = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <FlatPagination
          limit={limit}
          offset={offset}
          total={total}
          size="large"
          currentPageColor="secondary"
          otherPageColor="inherit"
          onClick={(e, offset) => onOffsetChange(offset)}
        />
        <Select
          value={limit}
          onChange={(e) => onLimitChange(e.target.value)}
          autoWidth={false}
          style={{marginLeft: 40}}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  total: state.photos.photos.length,
  limit: state.photos.limit,
  offset: state.photos.offset
})

const mapDispatchToProps = (dispatch) => ({
  onLimitChange: (limit) => {
    dispatch(changeLimit(limit))
  },
  onOffsetChange: (offset) => {
    dispatch(changeOffset(offset))
  }
})

Pagination.propTypes = {
  total: PropTypes.number,
  onOffsetChange: PropTypes.func,
  onLimitChange: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
