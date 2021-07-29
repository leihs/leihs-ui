import React from 'react'
import cx from 'classnames'

export default function DialogCard({ children, title, className, ...restProps }) {
  return (
    <div {...restProps} className={cx('bg-light-shade h-100', className)}>
      <div>
        <h2 className="text-center border-bottom m-0 p-3">{title}</h2>
        {children}
      </div>
    </div>
  )
}

DialogCard.Body = function DialogCardBody({ className, children, ...restProps }) {
  return (
    <div {...restProps} className={cx('bg-white page-inset-x py-3', className)} style={{ minHeight: '50vh' }}>
      {children}
    </div>
  )
}

DialogCard.Foot = function DialogCardFoot({ className, children, ...restProps }) {
  return (
    <div {...restProps} className={cx('bg-light-shade page-inset-x py-3', className)}>
      {children}
    </div>
  )
}

DialogCard.ButtonGroup = function DialogCardButtonGroup({ className, children, ...restProps }) {
  return (
    <div {...restProps} className={cx('d-flex gap-2 justify-content-between', className)}>
      {children}
    </div>
  )
}
