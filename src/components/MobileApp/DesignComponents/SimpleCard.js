import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

export default function SimpleCard({ onClick, children, foot, className, ...restProps }) {
  const clickable = !!onClick
  return (
    <div
      className={cx('simple-card py-3', { 'simple-card--clickable': clickable }, className)}
      onClick={onClick}
      {...restProps}
    >
      <div className="row no-gutters align-items-center">
        <div className={cx(clickable ? 'col-10' : 'col-12')}>{children}</div>

        {clickable && (
          <div className="col-2 text-2xl text-right">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        )}
      </div>
      {foot && <div className="pt-3">{foot}</div>}
    </div>
  )
}
