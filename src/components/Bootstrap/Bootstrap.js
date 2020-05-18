import React, { Fragment as F } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/dedupe'
import f from 'lodash'

import BsButton from 'reactstrap/lib/Button'
import BsButtonGroup from 'reactstrap/lib/ButtonGroup'

// import Icon from '../Icons'

const BOOTSTRAP_BREAKPOINTS = ['sm', 'md', 'lg', 'xl']
const BOOTSTRAP_MODIFIERS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

// https://getbootstrap.com/docs/4.0/utilities/spacing/#notation
const bsSizeUtils = ({ m, p, ...props }) => {
  const { cls, className, ...restProps } = props
  function extract(letter, prop) {
    if (f.isArray(prop)) return prop.map(p => extract(letter, p))
    if (!f.isString(prop)) return
    let parts = prop.split(' ')
    if (parts.length > 1) return extract(letter, parts)
    return `${letter}${prop}`
  }
  const margin = extract('m', m)
  const padding = extract('p', p)
  return [cx(margin, padding, cls, className), restProps]
}

const Node = ({ tag = 'div', ...props }) => {
  // eslint-disable-next-line no-debugger
  const Tag = tag
  const [bsClasses, restProps] = bsSizeUtils(props)
  return <Tag {...restProps} className={bsClasses} />
}
Node.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export { Node as __Node } // "internal" usage only

export const Div = props => Node(props)
export const Pre = props => Node({ ...props, tag: 'span' })
export const Span = props => Node({ ...props, tag: 'span' })
export const Code = props => Node({ ...props, tag: 'span' })
export const Hr = props => Node({ ...props, tag: 'span' })
export const Main = props => Node({ ...props, tag: 'main' })
export const Label = props => Node({ ...props, tag: 'label' })
export const Small = props => Node({ ...props, tag: 'small' })

export const Container = ({ fluid, ...props }) =>
  Node({ ...props, cls: [fluid ? 'container-fluid' : 'container', props.cls] })

export const Row = ({ form, ...props }) => Node({ ...props, cls: [form ? 'form-row' : 'row', props.cls] })

export const Col = ({ order, cls, ...props }) => {
  const restProps = f.omit(props, BOOTSTRAP_BREAKPOINTS)
  const breakpoint = f.first(f.intersection(f.keys(props), BOOTSTRAP_BREAKPOINTS))
  const breakpointVal = props[breakpoint]
  const colCls = breakpoint
    ? f.isString(breakpointVal) || f.isNumber(breakpointVal)
      ? `col-${breakpoint}-${breakpointVal}`
      : `col-${breakpoint}`
    : 'col'
  const orderCls = order && (breakpoint ? `order-${breakpoint}-${order}` : `order-${order}`)
  return Node({ ...restProps, cls: cx(colCls, orderCls, cls) })
}

export const Anchor = ({ target, rel, ...p }) => {
  if (!rel && target === '_blank') rel = 'noopener noreferrer'
  return <Node tag="a" target={target} rel={rel} {...p} />
}

export const Button = ({ massive, className, cls, ...props }) => (
  <BsButton
    type="button" // default in case not given, otherwise its 'submit'
    {...props}
    className={cx(className, cls, { 'btn-massive': massive })}
  />
)
Button.propTypes = {
  className: PropTypes.string,
  massive: PropTypes.bool
}

export { BsButtonGroup as ButtonGroup }

export const Badge = props => {
  const restProps = f.omit(props, BOOTSTRAP_MODIFIERS)
  const mod = f.first(f.intersection(f.keys(props), BOOTSTRAP_MODIFIERS)) || BOOTSTRAP_MODIFIERS[0]
  return <Span {...restProps} cls={[props.cls, 'badge', `badge-${mod}`]} />
}
Badge.propTypes = {
  cls: PropTypes.any // todo: classnames.proptypes
}

export const FormGroup = ({
  id,
  label,
  hideLabel,
  labelSmall,
  labelWidth = '4',
  helpText,
  children,
  horizontal,
  ...props
}) => {
  const cls = [{ 'form-row': horizontal }, props.cls, props.className, 'form-group']

  const inputWrapCls = horizontal && 'col-sm'

  const labelContent = !!(label || labelSmall) && (
    <F>
      {label}
      {!!labelSmall && (
        <F>
          {' '}
          <Small>{labelSmall}</Small>
        </F>
      )}
    </F>
  )

  return (
    <Node {...props} cls={cls}>
      {labelContent && (
        <Label
          htmlFor={id}
          cls={{
            'sr-only': hideLabel,
            [`col-form-label col-sm-${labelWidth}`]: horizontal
          }}
        >
          {labelContent}{' '}
        </Label>
      )}
      {!!children && <Div cls={inputWrapCls}>{children} </Div>}
      {helpText && (
        <Small id={`${id}--Help`} cls="form-text text-muted">
          {f.trim(helpText)}{' '}
        </Small>
      )}
    </Node>
  )
}
FormGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  labelSmall: PropTypes.node,
  helpText: PropTypes.node,
  children: PropTypes.node
}
