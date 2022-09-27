import React from 'react'
import PropTypes from 'prop-types'
import Icon, { iconMenu, iconMenuClose, iconBag } from './Icons'
import cx from 'classnames'

export default function Navbar({
  brandName = 'Leihs',
  brandLinkProps = {},

  cartItemCount,
  invalidCartItemCount = 0,
  cartItemLinkProps = {},

  mainMenuIsOpen = false,
  mainMenuLinkProps = {},

  userMenuIsOpen = false,
  userProfileShort,
  userMenuLinkProps,

  appMenuIsOpen = false,
  appMenuLinkLabel,
  appMenuLinkProps,

  className,
  ...restProps
}) {
  const showCartCounter = !!cartItemCount || cartItemCount === 0
  return (
    <nav
      className={cx('ui-main-nav navbar navbar-light bg-light-shade border-bottom px-lg-4', className)}
      {...restProps}
    >
      {/* Burger */}
      <div className="navbar-nav d-lg-none" style={{ width: '74px' }}>
        <a role="button" className="nav-item nav-link" aria-expanded={mainMenuIsOpen} {...mainMenuLinkProps}>
          <span className="ui-icon ui-menu-icon">
            <Icon icon={mainMenuIsOpen ? iconMenuClose : iconMenu} />
          </span>
        </a>
      </div>

      {/* Title ("Brand") */}
      <a className="navbar-brand me-0 fw-bold" {...brandLinkProps}>
        {brandName}
      </a>

      {/* Icon Buttons */}
      <div className="navbar-nav flex-row-reverse gap-2 gap-lg-3 align-items-center" style={{ width: '74px' }}>
        {/* Cart */}
        <a role="button" className="nav-item nav-link position-relative" style={{ top: '1px' }} {...cartItemLinkProps}>
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

        {/* User and Profile */}
        {userProfileShort && (
          <div className="nav-item" style={{ width: '48px' }}>
            <a
              role="button"
              className={cx(
                'ui-user-profile-button d-inline-block text-center fw-normal border border-dark rounded-1',
                userMenuIsOpen ? 'bg-secondary' : 'bg-light-shade'
              )}
              style={{ minWidth: '36px', height: '24px', padding: '1px 4px 0 4px', marginTop: '3px' }}
              aria-expanded={userMenuIsOpen}
              {...userMenuLinkProps}
            >
              {userProfileShort}
            </a>
          </div>
        )}

        {/* Sub App */}
        <div className="nav-item d-none d-md-block">
          <a
            role="button"
            className={cx(
              'd-inline-block text-center fw-normal border border-dark rounded-1',
              appMenuIsOpen ? 'bg-secondary' : 'bg-light-shade'
            )}
            style={{ minWidth: '36px', height: '24px', padding: '1px 4px 0 4px', marginTop: '3px' }}
            aria-expanded={appMenuIsOpen}
            {...appMenuLinkProps}
          >
            {appMenuLinkLabel}
          </a>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  /** Brand (app) name */
  brandName: PropTypes.node,
  /** Props for the `a` element around the brand name */
  brandLinkProps: PropTypes.shape({}),

  /** Number of items in the cart, shown in a circle beneath the cart icon. Not necessarily a number. Circle will be hidden when value is falsy and not 0. */
  cartItemCount: PropTypes.node,
  /** When a number greater than zero is given, the cart icon is decorated with a warning symbol */
  invalidCartItemCount: PropTypes.number,
  /** Props for the `a` element around the cart icon */
  cartItemLinkProps: PropTypes.object,

  /** Is the main menu open? */
  mainMenuIsOpen: PropTypes.bool,
  /** Props for the `a` element of the main menu */
  mainMenuLinkProps: PropTypes.shape({}),

  /** Is the user/profile menu open? */
  userMenuIsOpen: PropTypes.bool,
  /** Short name of the current profile */
  userProfileShort: PropTypes.node,
  /** Props for the `a` element around the user/profile button */
  userMenuLinkProps: PropTypes.object,

  /** Is the app switcher menu open? */
  appMenuIsOpen: PropTypes.bool,
  /** Label of the app switcher menu link */
  appMenuLinkLabel: PropTypes.node,
  /** Props for the `a` element around the app switch button */
  appMenuLinkProps: PropTypes.object,

  /** CSS class of the wrapping element */
  className: PropTypes.string
}
