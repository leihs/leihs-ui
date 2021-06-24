import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function ActionButton({ children, type = 'button', className, ...restProps }) {
  const buttonProps = {
    type,
    className: cx('btn btn-block action-button', className),
    ...restProps
  }
  return <button {...buttonProps}>{children}</button>
}

ActionButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  restProps: PropTypes.object
}
