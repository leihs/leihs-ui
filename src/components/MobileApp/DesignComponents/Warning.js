import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/dedupe'

export default function Warning({ children, className, ...restProps }) {
  return (
    <div className={cx('invalid-feedback invalid-feedback-icon d-block w-100 mt-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Warning.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
