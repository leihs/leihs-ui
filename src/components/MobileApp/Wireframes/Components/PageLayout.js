import React from 'react'
import cx from 'classnames'
import Navbar from './Navbar'

export default function PageLayout({ children, title, preTitle, brandName, cartItemCount }) {
  return (
    <div>
      <Navbar brandName={brandName} cartItemCount={cartItemCount} />
      <div className="px-4 pt-4">
        {preTitle && <h4 className="text-center text-uppercase">{preTitle}</h4>}
        {title && <h3 className="text-center text-uppercase">{title}</h3>}
      </div>
      <div className="px-4">{children}</div>
    </div>
  )
}

export function PageLayoutDivider({ className, style }) {
  return <hr className={cx('mx-n4', className)} style={style} />
}
