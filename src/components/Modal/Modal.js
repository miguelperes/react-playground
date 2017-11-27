import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const Modal = ({ show, onClose, children }) => {
  return (
    <div>
      {
        show
          ? <div
            className="backdrop"
            onClick={onClose}>
            <div
              className="modalStyle"
              onClick={(event) => { event.stopPropagation() }}>
              { children }
            </div>
          </div>
          : null
      }
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.element,
}

export default Modal
