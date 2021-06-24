import React from 'react'
import cx from 'classnames'

export default function SquareImage({ href, imgSrc, className, ...restProps }) {
  return (
    <div {...restProps} className={cx(className, 'square-container position-relative rounded-lg overflow-hidden')}>
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
}

function ImgPlaceholder({ className }) {
  return <div className={cx(className, 'ui-img-placeholder d-block position-absolute h-100 w-100 bg-content-muted')} />
}
