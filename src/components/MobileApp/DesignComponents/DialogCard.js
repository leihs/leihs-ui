import React from 'react'
import cx from 'classnames'

export default function DialogCard({ children, title, className, ...restProps }) {
  return (
    <div {...restProps} className={cx('dialog-card h-100', className)}>
      <div>
        <h1 className="dialog-card__title text-center text-uppercase text-lg pt-5 m-0">{title}</h1>
        {children}
      </div>
    </div>
  )
}

DialogCard.Body = function DialogCardBody({ className, children, ...restProps }) {
  return (
    <div {...restProps} className={cx('dialog-card__body px-3 py-3', className)}>
      {children}
    </div>
  )
}

DialogCard.Foot = function DialogCardFoot({ className, children, ...restProps }) {
  return (
    <div {...restProps} className={cx('px-3 py-3 dialog-card__foot', className)}>
      {children}
    </div>
  )
}
