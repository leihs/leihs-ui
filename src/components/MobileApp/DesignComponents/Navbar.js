import React from 'react'
import Icon, { iconMenu, iconMenuClose, iconBag } from './Icons'
import cx from 'classnames'
import isNumber from 'lodash.isnumber'

export default function Navbar({
  brandName,
  brandItem,
  cartItemCount,
  className,
  menuIsOpen = false,
  menuItem,
  cartItem,
  ...restProps
}) {
  const showCartCounter = isNumber(cartItemCount)
  return (
    <nav
      className={cx('ui-main-nav navbar navbar-light bg-light-shade border-bottom sticky-top', className)}
      {...restProps}
    >
      <div className="navbar-nav">
        <a className="nav-item nav-link" {...menuItem}>
          <span className="ui-icon ui-menu-icon">
            <Icon icon={menuIsOpen ? iconMenuClose : iconMenu} />
          </span>
        </a>
      </div>
      <a className="navbar-brand me-0 fw-bold" {...brandItem}>
        {brandName}
      </a>
      <div className="navbar-nav">
        <a href="/app/borrow/order" className="nav-item nav-link position-relative">
          {showCartCounter && (
            <div className="cart-badge position-absolute small" style={{ top: '8%', right: '-30%' }}>
              {cartItemCount || '0'}
            </div>
          )}
          <Icon icon={iconBag} />
        </a>
      </div>
    </nav>
  )
}
