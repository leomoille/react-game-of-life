import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Box extends Component {
  selectBox = () => {
    this.props.selectBox(this.props.rows, this.props.cols)
  }

  render = () => {
    return (
      <div className={this.props.boxClass} id={this.props.boxId} onClick={this.selectBox}/>
    )
  }
}

Box.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  boxClass: PropTypes.string.isRequired,
  boxId: PropTypes.string.isRequired,
  selectBox: PropTypes.func.isRequired
}

export default Box
