import React from 'react'
import cx from 'classnames'

export default function PageLayout({ children, navbar, className, ...restProps }) {
  return (
    <div className={className} {...restProps}>
      {navbar}
      <div className="page-inset-x py-4 container-fluid" style={{ maxWidth: '720px' }}>
        {children}
      </div>
    </div>
  )
}

PageLayout.Header = function PageLayoutHeader({ preTitle, title, children, className, ...restProps }) {
  return (
    <div className={cx('text-center mb-4', className)} {...restProps}>
      <h1>
        {preTitle && (
          <>
            <span className="d-inline-block fs-2 mb-1">{preTitle}</span>
            <br />
          </>
        )}
        {title}
      </h1>
      {children}
    </div>
  )
}
PageLayout.Header.displayName = 'PageLayout.Header'

PageLayout.Metadata = function PageLayoutMetadata({ children, className, ...restProps }) {
  return (
    <div className={cx('text-center text-black-50 fw-light pt-4', className)} {...restProps}>
      {children}
    </div>
  )
}
PageLayout.Metadata.displayName = 'PageLayout.Metadata'
