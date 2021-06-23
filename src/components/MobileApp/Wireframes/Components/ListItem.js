import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import { PageLayoutDivider } from './PageLayout'

export default function ListItem({ onClick, children, foot }) {
  const clickable = !!onClick
  return (
    <div className={cx('w21-list-item pt-3 pb-1', { 'w21-list-item--clickable': clickable })} onClick={onClick}>
      <div className="row no-guttersx align-items-center mb-2">
        <div className={cx(clickable ? 'col-10' : 'col-12')}>{children}</div>

        {clickable && (
          <div className="col-2 text-3xl">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        )}
      </div>
      {foot && <div>{foot}</div>}
      <PageLayoutDivider className="mb-0" />
    </div>
  )
}
