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
    <nav className={cx('ui-main-nav navbar navbar-light bg-light-shade border-bottom', className)} {...restProps}>
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
            <div className="cart-badge position-absolute" style={{ top: '4px', right: '-8px' }}>
              <span>{cartItemCount || '0'}</span>
            </div>
          )}
          <Icon icon={iconBag} />
        </a>
      </div>
    </nav>
  )
}

Navbar.MenuWrapper = ({ menuIsOpen, children }) => (
  <div
    className={cx('ui-main-menu-wrapper', 'sticky-top')}
    style={menuIsOpen ? { height: '100vh', position: 'fixed', width: '100%' } : { height: '100%' }}
  >
    {children}
  </div>
)
Navbar.MenuWrapper.displayName = 'Navbar.MenuWrapper'
