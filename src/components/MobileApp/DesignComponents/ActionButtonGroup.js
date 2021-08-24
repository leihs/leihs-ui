import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function ActionButtonGroup({ children, className, ...restProps }) {
  return (
    <div
      className={cx('d-flex flex-column flex-wrap gap-2 flex-md-row text-center text-md-start', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

ActionButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
