import React from 'react'
import cx from 'classnames'

export default function Stack({ children, divided = false, space = 0, className, ...restProps }) {
  const length = React.Children.count(children)
  return (
    React.Children.map(children, (child, i) => {
      const isLast = i + 1 === length
      return (
        <div key={i} className={cx(isLast ? '' : 'mb-' + space, className)} {...restProps}>
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
