import React from 'react'
import cx from 'classnames'
import Icon, { iconItemArrow } from './Icons'
import Stack from './Stack'

const BASE_CLASS = 'ui-list-card'

export default function ListCard({ onClick, href, children, className, style, oneLine, ...restProps }) {
  const clickable = !!(onClick || href)
  // NOTE: .position-relative is needed on outer card so that .streched-link will work correctly
  const wrapperClass = cx('py-3 position-relative', className, BASE_CLASS)
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
          className={cx('float-end text-end ps-5', {
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
    <div className={cx('mb-1 text-truncate', className)} {...restProps}>
      {children}
    </div>
  )
}
ListCard.Body = function ListCardBody({ children, className, ...restProps }) {
  return (
    <div className={cx('small', className)} {...restProps}>
      {children}
    </div>
  )
}
ListCard.Foot = function ListCardFoot({ children, className, ...restProps }) {
  return (
    <div className={cx('pt-3', className)} {...restProps}>
      {children}
    </div>
  )
}
