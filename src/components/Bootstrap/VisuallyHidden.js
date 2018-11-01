import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const VisuallyHidden = ({ children, ...props }) => {
  const hidden = !!props['if']
  return (
    <div
      className={hidden ? 'sr-only' : ''}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
    >
      {children}
    </div>
  )
}
VisuallyHidden.propTypes = { if: PropTypes.bool.isRequired }

export default VisuallyHidden
