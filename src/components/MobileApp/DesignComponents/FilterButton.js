import React from 'react'
import cx from 'classnames'

const BASE_CLASS = 'ui-filter-bubble'

export default function FilterButton({ children, className, style, ...restProps }) {
  return (
    <button
      type="button"
      className={cx(BASE_CLASS, 'btn btn-primary btn-sm rounded-pill px-4 very-small', className)}
      style={{ paddingTop: '7px', paddingBottom: '6px', ...style }}
      {...restProps}
    >
      {children}
    </button>
  )
}
