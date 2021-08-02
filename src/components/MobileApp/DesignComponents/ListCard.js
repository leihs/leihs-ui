import React from 'react'
import cx from 'classnames'
import Icon, { iconItemArrow } from './Icons'
import Stack from './Stack'

export default function ListCard({ onClick, children, className, style, ...restProps }) {
  const clickable = !!onClick
  const styleAttr = clickable ? { ...style, minHeight: '2.5rem', cursor: 'pointer' } : style
  return (
    <div className={cx(className)} onClick={onClick} style={styleAttr} {...restProps}>
      {clickable && (
        <div className="float-end text-end ps-5" style={{ paddingTop: '0.5rem', paddingBottom: '0.75rem' }}>
          <Icon icon={iconItemArrow} />
        </div>
      )}
      {children}
    </div>
  )
}

ListCard.Stack = function ListCardStack({ children, className, ...restProps }) {
  return (
    <Stack divided space="3" className={className} {...restProps}>
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
