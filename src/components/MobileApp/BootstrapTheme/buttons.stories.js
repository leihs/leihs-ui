import React from 'react'
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'MobileApp/Bootstrap Theme/Buttons'
}

export const buttons = () => {
  return (
    <>
      <h1>Buttons</h1>
      <p className="text-muted">Primary button</p>
      <p>
        <button type="submit" className="btn btn-primary">
          Primary
        </button>
      </p>
      <p className="text-muted">Secondary button</p>
      <p>
        <button type="submit" className="btn btn-secondary">
          Secondary
        </button>
      </p>
      <p className="text-muted">See also: Design components to arrange buttons:</p>
      <p className="text-muted">
        <button
          className="btn btn-light btn-sm"
          onClick={linkTo('MobileApp/Design Components/Content/ActionButtonGroup')}
        >
          ActionButtonGroup
        </button>{' '}
        <button
          className="btn btn-light btn-sm"
          onClick={linkTo('MobileApp/Design Components/Form Controls/FormButtonGroup')}
        >
          FormButtonGroup
        </button>
      </p>
    </>
  )
}
