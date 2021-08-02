import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function FormButtonGroup({ children, className, ...restProps }) {
  return (
    <div {...restProps} className={cx('d-flex gap-2 justify-content-between', className)}>
      {children}
    </div>
  )
}

FormButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  restProps: PropTypes.object
}
