import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SampleModal.css'

class SampleModal extends Component {
  render() {
    console.log('props', this.props)
    return (
      this.props.show
        ? <div className="backdrop">
          <div className="modalStyle">
              Modal Content
          </div>
        </div>
        : null
    )
  }
}

SampleModal.propTypes = {
  show: PropTypes.bool,
}

export default SampleModal
