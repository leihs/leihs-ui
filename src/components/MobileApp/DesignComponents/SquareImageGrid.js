import React from 'react'
import cx from 'classnames'
import Icon, { iconStar } from './Icons'
import SquareImage from './SquareImage'

export default function SquareImageGrid({ list = [], className, itemClassName, ...restProps }) {
  return (
    <div className={cx('row g-0 d-flex flex-wrap mx-n2', className)} {...restProps}>
      {list.map(({ id, href, imgSrc, caption, subCaption, isDimmed, isFavorited }) => (
        <div key={id} className="col-6 col-sm-3" style={{ opacity: isDimmed ? 0.35 : 1 }}>
          <div
            className={cx('max-w-sm overflow-hidden bg-white mx-2 mb-3 position-relative', itemClassName)}
            style={{ opacity: 1 }}
          >
            {isFavorited && (
              <div className="position-absolute square-image-grid__favorite-marker" title="Favorit">
                <Icon icon={iconStar} />
              </div>
            )}
            <SquareImage href={href} imgSrc={imgSrc} className="rounded border" />
            <div className="pt-2">
              <a className="stretched-link" href={href}>
                <div className="small">{caption}</div>
                <div className="small text-muted">{subCaption}</div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
