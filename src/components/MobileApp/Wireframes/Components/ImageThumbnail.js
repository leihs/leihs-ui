import React from 'react'
import cx from 'classnames'

export const ImageThumbnail = ({ href, imgSrc, className, ...restProps }) => (
  <div
    {...restProps}
    className={cx(className, 'square-container position-relative rounded-lg overflow-hidden border border-gray-200')}
  >
    <a href={href}>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt=""
          className="bg-content position-absolute object-contain object-center img-fluid p-2 h-100 w-100"
        />
      ) : (
        <ImgPlaceholder />
      )}
    </a>
  </div>
)

export const ImgPlaceholder = ({ className }) => (
  <div className={cx(className, 'ui-img-placeholder d-block position-absolute h-100 w-100 bg-content-muted')} />
)
