import React from 'react'
import cx from 'classnames'

export default function SquareImage({ href, imgSrc, placeholder, className, ...restProps }) {
  return (
    <div {...restProps} className={cx(className, 'square-container position-relative overflow-hidden')}>
      <a href={href}>
        {imgSrc ? (
          <img
            src={imgSrc}
            alt=""
            className="bg-body position-absolute object-contain object-center img-fluid p-2 h-100 w-100"
          />
        ) : placeholder ? (
          <div className="position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
            <div>{placeholder}</div>
          </div>
        ) : (
          <ImgPlaceholder />
        )}
      </a>
    </div>
  )
}

function ImgPlaceholder() {
  return <div className={cx('ui-img-placeholder d-block position-absolute h-100 w-100 bg-light-shade')} />
}
