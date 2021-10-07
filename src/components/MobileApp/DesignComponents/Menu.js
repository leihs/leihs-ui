import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function Menu({ show = true, children, className, ...restProps }) {
  return (
    <div className={cx('h-100 pb-5 bg-light-shade overflow-scroll', { 'd-none': !show }, className)} {...restProps}>
      <nav
        className="py-5 mb-5 page-inset-x container-fluid d-flex flex-column justify-content-between flex-md-row gap-5"
        style={{ maxWidth: '1440px' }}
      >
        {children}
      </nav>
    </div>
  )
}

Menu.Group = function MenuGroup({ children, title, className, ...restProps }) {
  return (
    <div className={cx('flex-fill text-center', className)} {...restProps}>
      {title && <h2 className="fw-normal">{title}</h2>}
      <div className="d-flex flex-column gap-3">{children}</div>
    </div>
  )
}

Menu.Link = function MenuLink({ children, className, ...restProps }) {
  return (
    <a className={cx('btn btn-secondary rounded-pill', className)} {...restProps}>
      {children}
    </a>
  )
}

Menu.Button = function MenuButton({ children, className, ...restProps }) {
  return (
    <button className={cx('btn btn-secondary rounded-pill', className)} {...restProps}>
      {children}
    </button>
  )
}

Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Menu.Group.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  className: PropTypes.string
}

Menu.Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Menu.Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
