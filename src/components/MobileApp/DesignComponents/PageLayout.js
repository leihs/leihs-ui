import React from 'react'
import cx from 'classnames'

export default function PageLayout({ children, navbar }) {
  return (
    <div>
      {navbar}
      <div className="page-inset-x py-4">{children}</div>
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

PageLayout.Divider = function PageLayoutDivider({ className, style }) {
  return renderDivider({ className, style })
}

PageLayout.DividedStack = function PageLayoutDividedStack({ children }) {
  return (
    React.Children.map(children, (child, i) => {
      return (
        <div key={i}>
          {i === 0 && renderDivider({})}
          {child}
          {renderDivider({})}
        </div>
      )
    }) || null
  )
}

PageLayout.Stack1 = function PageLayoutStack1({ children }) {
  return renderList({ children, itemClassName: 'mb-5' })
}

PageLayout.Stack2 = function PageLayoutStack2({ children }) {
  return renderList({ children, itemClassName: 'mb-4' })
}

function renderDivider({ className, style }) {
  return <hr className={cx('page-inset-x-inverse', className)} style={style} />
}

function renderList({ children, itemClassName }) {
  return (
    React.Children.map(children, (child, i) => {
      return (
        <div key={i} className={itemClassName}>
          {child}
        </div>
      )
    }) || null
  )
}
