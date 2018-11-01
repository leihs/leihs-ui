import React from 'react'
import cx from 'classnames'

const Hr = ({ children, ...p }) =>
  !children ? (
    <hr {...p} />
  ) : (
    <div {...p} className={cx(p.className, 'hr-text')}>
      <hr />
      {children}
    </div>
  )

export default Hr
