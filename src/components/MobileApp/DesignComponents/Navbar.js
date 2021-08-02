import React from 'react'
import Icon, { iconMenu, iconBag } from './Icons'
import cx from 'classnames'

export default function Navbar({ brandName, cartItemCount, className, menuItem, cartItem, ...restProps }) {
  return (
    <nav
      className={cx('ui-main-nav navbar navbar-light bg-light-shade border-bottom sticky-top', className)}
      {...restProps}
    >
      <div className="navbar-nav">
        <a className="nav-item nav-link" {...menuItem}>
          <span className="ui-icon ui-menu-icon">
            <Icon icon={iconMenu} />
          </span>
        </a>
      </div>
      <a href="/app/borrow" className="navbar-brand me-0 fw-bold" {...cartItem}>
        {brandName}
      </a>
      <div className="navbar-nav">
        <a href="/app/borrow/order" className="nav-item nav-link position-relative">
          <div className="cart-badge position-absolute small" style={{ top: '8%', right: '-30%' }}>
            {cartItemCount || '0'}
          </div>
          <Icon icon={iconBag} />
        </a>
      </div>
    </nav>
  )
}
