import React from 'react'
import cx from 'classnames'

export default function Stack({ children, divided = false, space = 0, className, ...restProps }) {
  return (
    React.Children.map(children, (child, i) => {
      return (
        <div key={i} className={cx('mb-' + space, className)} {...restProps}>
          {divided && i === 0 && renderDivider(space)}
          {child}
          {divided && renderDivider(space)}
        </div>
      )
    }) || null
  )
}

function renderDivider(space) {
  return <hr className={'page-inset-x-inverse my-' + space} />
}
