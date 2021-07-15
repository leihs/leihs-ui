import React from 'react'
import cx from 'classnames'
import Navbar from './Navbar'

export default function PageLayout({ children, title, preTitle, brandName, cartItemCount }) {
  return (
    <div>
      <Navbar brandName={brandName} cartItemCount={cartItemCount} />
      {(title || preTitle) && <PageLayoutHeader title={title} preTitle={preTitle} />}
      <div className="px-3">{children}</div>
    </div>
  )
}

PageLayout.Header = PageLayoutHeader
PageLayout.Divider = PageLayoutDivider
PageLayout.DividedStack = PageLayoutDividedStack

export function PageLayoutHeader({ preTitle, title }) {
  return (
    <div className="px-3 pt-4">
      {preTitle && <h2 className="text-center text-sm">{preTitle}</h2>}
      {title && <h1 className="text-center text-lg">{title}</h1>}
    </div>
  )
}

export function PageLayoutDivider({ className, style }) {
  return <hr className={cx('mx-n3', className)} style={style} />
}

export function PageLayoutDividedStack({ children }) {
  return (children.map ? children : [children]).map((child, i) => {
    return (
      <div key={i}>
        {i === 0 && <PageLayoutDivider className="m-0" />}
        {child}
        <PageLayoutDivider className="m-0" />
      </div>
    )
  })
}
