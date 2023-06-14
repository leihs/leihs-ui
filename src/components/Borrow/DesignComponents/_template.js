import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function DesignComponent({ className, ...restProps }) {
  return <div className={cx(className)} {...restProps}></div>
}

DesignComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
