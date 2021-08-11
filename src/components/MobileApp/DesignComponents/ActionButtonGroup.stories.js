import React from 'react'
import { action } from '@storybook/addon-actions'
import ActionButtonGroup from './ActionButtonGroup'

export default {
  title: 'MobileApp/Design Components/Content/ActionButtonGroup',
  component: ActionButtonGroup,
  args: { onClick: action('click') }
}

export const actionButtonGroup = ({ onClick }) => {
  return (
    <div>
      <h1>ActionButtonGroup</h1>
      <p className="text-muted">
        A container for buttons which trigger an action from a detail view (e.g. &quot;Add to order&quot;)
      </p>
      <p className="text-muted">Plain Bootstrap buttons (primary or secondary) can be used.</p>
      <ActionButtonGroup>
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Primary button
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClick}>
          Secondary button
        </button>
      </ActionButtonGroup>
    </div>
  )
}
actionButtonGroup.storyName = 'ActionButtonGroup'

export const restProps = ({ onClick }) => {
  return (
    <div>
      <h1>ActionButtonGroup</h1>
      <p className="text-muted">Set arbitrary attributes with restProps</p>
      <ActionButtonGroup className="border border-primary p-1">
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Primary button
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClick}>
          Secondary button
        </button>
      </ActionButtonGroup>
    </div>
  )
}