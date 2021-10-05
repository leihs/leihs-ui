import React from 'react'
import cx from 'classnames'
import { ErrorBoundary } from '../ErrorBoundary'

export default function PageLayout({ children, navbar, className, ...restProps }) {
  const BASE_CLASS = 'ui-page-layout'
  return (
    <div className={cx('pb-5', className, BASE_CLASS)} {...restProps}>
      <ErrorBoundary>{navbar}</ErrorBoundary>
      <div className="page-inset-x py-4 container-fluid" style={{ maxWidth: '720px' }}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
    </div>
  )
}

PageLayout.Header = function PageLayoutHeader({ preTitle, title, subTitle, children, className, ...restProps }) {
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
      {subTitle && <h2 className="fw-light">{subTitle}</h2>}
      {children}
    </div>
  )
}
PageLayout.Header.displayName = 'PageLayout.Header'

PageLayout.Metadata = function PageLayoutMetadata({ children, className, ...restProps }) {
  return (
    <div className={cx('text-center text-black-50 fw-light mt-5 pt-3', className)} {...restProps}>
      {children}
    </div>
  )
}
PageLayout.Metadata.displayName = 'PageLayout.Metadata'

PageLayout.MetadataWithDetails = function PageLayoutMetadata({ summary, details }) {
  const dataInspect = typeof details === 'string' ? details : JSON.stringify(details, 0, 2)
  return (
    <PageLayout.Metadata>
      <details open={false} className="list-unstyled">
        <summary style={{ display: 'block' }}>{summary}</summary>
        <pre className="fs-5 text-start mt-3">{dataInspect}</pre>
      </details>
    </PageLayout.Metadata>
  )
}
PageLayout.MetadataWithDetails.displayName = 'PageLayout.MetadataWithDetails'
