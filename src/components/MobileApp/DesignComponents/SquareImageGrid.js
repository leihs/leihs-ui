import React from 'react'
import SquareImage from './SquareImage'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function SquareImageGrid({ list = [], className, ...restProps }) {
  return (
    <div className={cx('ui-square-image-grid row no-gutters d-flex flex-wrap mx-n2', className)} {...restProps}>
      {list.map(({ id, href, imgSrc, caption, subCaption, isDimmed, isFavorited }) => (
        <div key={id} className="col-6 col-sm-3 min-h-16" style={{ opacity: isDimmed ? 0.35 : 1 }}>
          <div
            className="ui-list-as-grid-square-item max-w-sm rounded-lg overflow-hidden bg-white mx-2 mb-3"
            style={{ opacity: 1 }}
          >
            <div className="border border-gray-200 rounded-lg position-relative">
              {isFavorited && (
                <div
                  className="position-absolute rounded-left-bottom square-image-grid__favorite-marker text-center"
                  title="Favorit"
                  style={{
                    right: '0',
                    top: '0',
                    width: '1.8rem',
                    height: '1.8rem',
                    zIndex: '1',
                    borderBottomLeftRadius: '0.3rem',
                    paddingTop: '0.15rem'
                  }}
                >
                  <FontAwesomeIcon icon={faStar} />
                </div>
              )}
              <SquareImage href={href} imgSrc={imgSrc} />
            </div>
            <div className="pt-2">
              <a className="text-color-content" href={href}>
                <div className="text-sm">{caption}</div>
                <div className="text-sm text-muted">{subCaption}</div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
