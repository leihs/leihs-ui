import React from 'react'
import cx from 'classnames'

export default function Badge({ children, className = 'bg-secondary text-dark', style, ...restProps }) {
  const styleAttr = { padding: '7px 20px 8px 20px', ...style }
  return (
    <div className={cx('badge rounded-pill fw-light', className)} style={styleAttr} {...restProps}>
      {children}
    </div>
  )
}
