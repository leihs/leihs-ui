import React, { useState } from 'react'
import cx from 'classnames'
import Icon, { iconSectionArrow } from './Icons'

export default function Section({ title, children, collapsible, defaultCollapsed, className, ...restProps }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  const toggle = () => {
    if (collapsible) {
      setCollapsed(x => !x)
    }
  }

  return (
    <section className={cx(className)} {...restProps}>
      {(title || collapsed) && (
        <h2 className={cx('section-title', 'fw-normal')}>
          <span
            onClick={toggle}
            className={cx({ 'section-title__collapser': collapsible })}
            role={collapsible ? 'button' : ''}
          >
            {title}
            {collapsible && (
              <Icon
                icon={iconSectionArrow}
                className={cx('section-title__arrow-icon', {
                  'section-title__arrow-icon--collapsed': collapsed
                })}
              />
            )}
          </span>
        </h2>
      )}

      {collapsed || <div>{children}</div>}
    </section>
  )
}
