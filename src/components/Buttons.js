import React, { Component } from 'react'
import { ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap'
import PropTypes from 'prop-types'

class Buttons extends Component {
  handleSelect = (evt) => {
    this.props.gridSize(evt)
  }

  render () {
    return (
      <div className="center">
        <ButtonToolbar>
          <button className="btn btn-success" onClick={this.props.playButton}>
              Play
          </button>
          <button className="btn btn-primary" onClick={this.props.pauseButton}>
              Pause
          </button>
          <button className="btn btn-danger" onClick={this.props.clear}>
              Clear
          </button>
          <button className="btn btn-info" onClick={this.props.slow}>
              Slow
          </button>
          <button className="btn btn-info" onClick={this.props.fast}>
              Fast
          </button>
          <button className="btn btn-secondary" onClick={this.props.seed}>
              Seed
          </button>
          <DropdownButton
            title='Grid size'
            id='size-menu'
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey='1'>20x10</Dropdown.Item>
            <Dropdown.Item eventKey='2'>50x30</Dropdown.Item>
            <Dropdown.Item eventKey='3'>70x50</Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    )
  }
}

Buttons.propTypes = {
  gridSize: PropTypes.func.isRequired,
  playButton: PropTypes.func.isRequired,
  pauseButton: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  slow: PropTypes.func.isRequired,
  fast: PropTypes.func.isRequired,
  seed: PropTypes.func.isRequired
}

export default Buttons
