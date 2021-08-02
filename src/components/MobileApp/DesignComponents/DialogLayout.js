import React from 'react'
import cx from 'classnames'

export default function DialogLayout({ children, title, className, ...restProps }) {
  return (
    <div {...restProps} className={cx('bg-light-shade h-100', className)}>
      <div>
        <h2 className="text-center border-bottom m-0 p-3">{title}</h2>
        {children}
      </div>
    </div>
  )
}

DialogLayout.Body = function DialogCardBody({ className, children, ...restProps }) {
  return (
    <div {...restProps} className={cx('bg-white page-inset-x py-3', className)} style={{ minHeight: '40vh' }}>
      {children}
    </div>
  )
}

DialogLayout.Foot = function DialogCardFoot({ className, children, ...restProps }) {
  return (
    <div {...restProps} className={cx('bg-light-shade page-inset-x py-3', className)}>
      {children}
    </div>
  )
}
