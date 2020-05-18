import React from 'react'
import PropTypes from 'prop-types'
// import f from 'lodash'

const VisuallyHidden = ({ children, ...props }) => {
  // hidden by default, only shown if props.if is given AND false
  const hidden = props['if'] !== false

  return (
    <div className={hidden ? 'sr-only' : ''} aria-hidden={hidden} tabIndex={hidden ? -1 : props.tabIndex}>
      {children}
    </div>
  )
}
VisuallyHidden.propTypes = { if: PropTypes.bool }

export default VisuallyHidden
