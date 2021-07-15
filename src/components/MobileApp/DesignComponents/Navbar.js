import React from 'react'

export default function Navbar({ brandName, cartItemCount }) {
  return (
    <nav className="app-navbar ui-main-nav navbar navbar-light text-xl py-0 px-3 sticky-top flex-nowrap justify-content-between">
      <div className="navbar-nav w-100">
        <div className="mr-auto">
          <a href="/app/borrow" className="nav-item nav-link px-0">
            <span className="ui-icon ui-menu-icon app-navbar__burger">☰</span>
          </a>
        </div>
      </div>
      <div className="mx-auto">
        {!!brandName && (
          <a href="/app/borrow" className="navbar-brand m-0 font-bold text-l">
            {brandName}
          </a>
        )}
      </div>
      <div className="navbar-nav w-100">
        <div className="ml-auto d-flex align-items-center">
          <div className="mx-auto px-2 text-xs">
            <span className="text-color-info" />
          </div>{' '}
          <a href="/app/borrow/order" className="nav-item nav-link px-0 app-navbar__cart">
            <CartBadge count={cartItemCount} />
          </a>
        </div>
      </div>
    </nav>
  )
}

function CartBadge({ count }) {
  return <div className="cart-badge">{count}</div>
}
