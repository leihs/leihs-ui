import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

export default function Section({ title, children, collapsible, defaultCollapsed, className, ...restProps }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  const toggle = () => {
    if (collapsible) {
      setCollapsed(x => !x)
    }
  }

  return (
    <section className={cx('pt-4', className)} {...restProps}>
      <h3 className={cx('section-title', 'font-weight-normal')}>
        <span onClick={toggle} className={cx({ 'section-title__collapser': collapsible })}>
          {title}
          {collapsible && (
            <span className="pl-1">
              {' '}
              {collapsed ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </span>
          )}
        </span>
      </h3>
      {collapsed || <div>{children}</div>}
    </section>
  )
}
