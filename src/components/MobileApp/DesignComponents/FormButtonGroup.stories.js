import React from 'react'
import FormButtonGroup from './FormButtonGroup'

export default {
  title: 'MobileApp/Design Components/Form Controls/FormButtonGroup',
  component: FormButtonGroup,
  argTypes: { onClick: { action: 'click' } }
}

export const actionButtonGroup = ({ onClick }) => {
  return (
    <div>
      <h1>FormButtonGroup</h1>
      <p className="text-muted">A container for form buttons (e.g. &quot;Submit&quot; and &quot;Cancel&quot;)</p>
      <p className="text-muted">
        Plain Bootstrap buttons (primary or secondary) can be used. Note that the primary button comes last, as shown in
        the example:
      </p>
      <FormButtonGroup>
        <button type="button" className="btn btn-secondary" onClick={onClick}>
          Secondary button
        </button>
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Primary button
        </button>
      </FormButtonGroup>
    </div>
  )
}
actionButtonGroup.storyName = 'FormButtonGroup'

export const restProps = ({ onClick }) => {
  return (
    <div>
      <h1>FormButtonGroup</h1>
      <p className="text-muted">Set arbitrary attributes with restProps</p>
      <FormButtonGroup className="border border-primary p-1">
        <button type="button" className="btn btn-secondary" onClick={onClick}>
          Secondary button
        </button>
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Primary button
        </button>
      </FormButtonGroup>
    </div>
  )
}
