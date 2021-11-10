import React from 'react'
import cx from 'classnames'

export default function Badge({ children, as: Elm = 'div', className, colorClassName, style, ...restProps }) {
  const styleAttr = { padding: '7px 20px 8px 20px', ...style }
  return (
    <Elm
      className={cx(
        'badge rounded-pill fw-light border-0',
        colorClassName ? colorClassName : 'bg-secondary text-dark',
        className,
        'ui-badge'
      )}
      style={styleAttr}
      {...restProps}
    >
      {children}
    </Elm>
  )
}
