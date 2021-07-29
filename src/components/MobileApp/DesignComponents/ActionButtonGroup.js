import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function ActionButtonGroup({ children, className, ...restProps }) {
  return (
    <div className={cx('d-grid d-md-flex gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

ActionButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  restProps: PropTypes.object
}
