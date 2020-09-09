import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

class Grid extends Component {
  render () {
    const width = this.props.cols * 14
    const rowsArray = []

    let boxClass = ''
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        const boxId = i + '_' + j
        boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off'
        rowsArray.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            rows={i}
            cols={j}
            selectBox={this.props.selectBox}
          />
        )
      }
    }

    return (
      <div className='grid' style={{ width: width }}>
        { rowsArray }
      </div>
    )
  }
}
Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  gridFull: PropTypes.array.isRequired,
  selectBox: PropTypes.func.isRequired
}
export default Grid
