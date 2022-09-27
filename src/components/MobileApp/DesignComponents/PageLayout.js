import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { ErrorBoundary } from '../ErrorBoundary'

export default function PageLayout({
  children,
  topBar,
  nav,
  navShown,
  flyout,
  flyoutShown,
  onContentClick,
  className,
  errorBoundaryTxt,
  ...restProps
}) {
  errorBoundaryTxt = {
    title: 'Error displaying this content',
    reload: 'Reload current page',
    goToStart: 'Go to start page',
    ...errorBoundaryTxt
  }
  return (
    <div className={cx('ui-page-layout', 'page-layout', className)} {...restProps}>
      <div className="page-layout__top-bar">
        <ErrorBoundary txt={errorBoundaryTxt}>{topBar}</ErrorBoundary>
      </div>
      <div className="page-layout__main">
        <div className={cx('page-layout__nav page-inset-x', navShown && !flyoutShown ? '' : 'd-none', 'd-lg-block')}>
          <div className="page-layout__nav-container">
            <ErrorBoundary txt={errorBoundaryTxt}>{nav}</ErrorBoundary>
          </div>
        </div>
        <div className="ui-page-content page-layout__content page-inset-x" onClick={onContentClick}>
          <ErrorBoundary txt={errorBoundaryTxt}>{children}</ErrorBoundary>
        </div>
        {flyoutShown && (
          <div className={cx('page-layout__flyout page-inset-x', flyoutShown ? '' : 'd-none', '')}>
            <div className="page-layout__nav-container">
              <ErrorBoundary txt={errorBoundaryTxt}>{flyout}</ErrorBoundary>
            </div>
          </div>
        )}
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

PageLayout.propTypes = {
  /** Element to show in content zone */
  children: PropTypes.node,
  /** Element to show in the top bar zone */
  topBar: PropTypes.node,
  /** Element to show in nav zone (mobile: hideable full screen overlay, desktop: static left side bar) */
  nav: PropTypes.node,
  /** Show nav overlay (relevant for mobile mode only) */
  navShown: PropTypes.bool,
  /** Show nav flyout (mobile: hideable full screen overlay, desktop: hideable right side bar) */
  flyout: PropTypes.node,
  /** Show nav flayout */
  flyoutShown: PropTypes.bool,
  /** Emitted on click in content zone (so the controlling component can hide the overlay)  */
  onContentClick: PropTypes.func,
  /** CSS class of the wrapping element */
  className: PropTypes.string,
  /** Localized texts for the error screen */
  errorBoundaryTxt: PropTypes.shape({
    title: PropTypes.string,
    reload: PropTypes.string,
    goToStart: PropTypes.string
  })
}
