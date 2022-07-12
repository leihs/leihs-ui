import React from 'react'
import Icon, { iconMenu, iconMenuClose, iconBag } from './Icons'
import cx from 'classnames'

export default function Navbar({
  brandName,
  brandItem,
  cartItemCount,
  invalidCartItemCount = 0,
  className,
  menuIsOpen = false,
  menuItem,
  cartItem = { href: '/app/borrow/order' },
  profileButtonProps,
  ...restProps
}) {
  return (
    <nav className={cx('ui-main-nav navbar navbar-light bg-light-shade border-bottom', className)} {...restProps}>
      <div className="navbar-nav" style={{ width: '74px' }}>
        <a className="nav-item nav-link" {...menuItem}>
          <span className="ui-icon ui-menu-icon">
            <Icon icon={menuIsOpen ? iconMenuClose : iconMenu} />
          </span>
        </a>
      </div>
      <a className="navbar-brand me-0 fw-bold" {...brandItem}>
        {brandName}
      </a>
      <div className="navbar-nav flex-row-reverse" style={{ width: '74px' }}>
        {getCartButton({ ...cartItem, cartItemCount, invalidCartItemCount })}

        {profileButtonProps && (
          <div className="nav-item mt-1" style={{ width: '48px' }}>
            {getProfileButton(profileButtonProps)}
          </div>
        )}
      </div>
    </nav>
  )
}

function getProfileButton({ onClick, profileShort, isOpen, ...restProps }) {
  return (
    <a
      role="button"
      className={cx(
        'ui-profile-button d-inline-block text-center fw-normal border border-dark rounded-1',
        isOpen ? 'bg-secondary' : 'bg-light-shade'
      )}
      style={{ minWidth: '36px', height: '24px', padding: '1px 4px 0 4px', marginTop: '3px' }}
      onClick={onClick}
      {...restProps}
    >
      {profileShort}
    </a>
  )
}

function getCartButton({ cartItemCount, invalidCartItemCount, ...restProps }) {
  const showCartCounter = !!cartItemCount || cartItemCount === 0
  return (
    <a role="button" className="nav-item nav-link position-relative" {...restProps}>
      {showCartCounter && (
        <div
          className={cx('cart-badge position-absolute', { 'cart-badge--with-conflict': invalidCartItemCount > 0 })}
          style={{ top: '4px', right: '-8px' }}
        >
          <span>{invalidCartItemCount > 0 ? '!' : cartItemCount}</span>
        </div>
      )}
      <Icon icon={iconBag} />
    </a>
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
