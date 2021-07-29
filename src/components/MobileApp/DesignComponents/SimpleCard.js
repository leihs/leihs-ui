import React from 'react'
import cx from 'classnames'
import Icon, { iconItemArrow } from './Icons'

export default function SimpleCard({ onClick, children, foot, className, ...restProps }) {
  const clickable = !!onClick
  return (
    <div
      className={cx('simple-card', { 'simple-card--clickable': clickable }, className)}
      onClick={onClick}
      {...restProps}
    >
      <div className="row g-0 align-items-center">
        <div className={cx(clickable ? 'col-10' : 'col-12')}>{children}</div>

        {clickable && (
          <div className="col-2 text-end">
            <Icon icon={iconItemArrow} />
          </div>
        )}
      </div>
      {foot && <div className="pt-3">{foot}</div>}
    </div>
  )
}
