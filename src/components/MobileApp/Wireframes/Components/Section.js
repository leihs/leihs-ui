import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import { PageLayoutDivider } from './PageLayout'

export default function Section({ title, children, collapsible, defaultCollapsed, withDivider, ...restProps }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  const toggle = () => {
    if (collapsible) {
      setCollapsed(x => !x)
    }
  }

  const props = { className: 'pt-4', ...restProps }
  return (
    <section {...props}>
      <h4 className={cx('w21-section-title')}>
        <span onClick={toggle} className={cx({ 'w21-section-title__collapser': collapsible })}>
          {title}
          {collapsible && (
            <> {collapsed ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</>
          )}
        </span>
      </h4>
      {withDivider && <PageLayoutDivider className="my-0" />}
      {collapsed || <div>{children}</div>}
    </section>
  )
}
