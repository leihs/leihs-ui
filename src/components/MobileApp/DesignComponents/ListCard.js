import React from 'react'
import cx from 'classnames'
import Icon, { iconItemArrow } from './Icons'
import Stack from './Stack'

const BASE_CLASS = 'ui-list-card'

export default function ListCard({ onClick, href, children, className, style, oneLine, ...restProps }) {
  const clickable = !!(onClick || href)
  // NOTE: .position-relative is needed on outer card so that .streched-link will work correctly
  const wrapperClass = cx('py-3 list-card position-relative', className, BASE_CLASS)
  const styleAttr = clickable
    ? {
        minHeight: oneLine ? '0' : '4.375rem',
        cursor: 'pointer',
        ...style
      }
    : style

  return (
    <div className={wrapperClass} onClick={onClick} style={styleAttr} {...restProps}>
      {clickable && (
        <a
          href={href}
          className={cx('float-end text-end ps-4', {
            'stretched-link': clickable
          })}
          style={
            oneLine
              ? {}
              : {
                  paddingTop: '0.5rem',
                  paddingBottom: '0.75rem'
                }
          }
        >
          <Icon icon={iconItemArrow} />
        </a>
      )}
      {children}
    </div>
  )
}

ListCard.Stack = function ListCardStack({ children, className, ...restProps }) {
  return (
    <Stack divided space="0" className={className} {...restProps}>
      {children}
    </Stack>
  )
}

ListCard.Title = function ListCardTitle({ children, className, ...restProps }) {
  return (
    <div className={cx('list-card__title mb-1 fw-bold text-break', className)} data-test-id="title" {...restProps}>
      {children}
    </div>
  )
}
ListCard.Body = function ListCardBody({ children, className, ...restProps }) {
  return (
    <div className={cx('list-card__body small fw-normal', className)} data-test-id="body" {...restProps}>
      {children}
    </div>
  )
}
ListCard.Foot = function ListCardFoot({ children, className, ...restProps }) {
  return (
    <div className={cx('list-card__foot pt-2 fw-normal', className)} data-test-id="foot" {...restProps}>
      {children}
    </div>
  )
}
