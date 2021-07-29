import { action } from '@storybook/addon-actions'
import React from 'react'
import ActionButtonGroup from './ActionButtonGroup'
import PageLayoutMock from '../StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/DesignComponents/Action Button Group',
  component: ActionButtonGroup,
  parameters: { layout: 'fullscreen' }
}

export const actionButtonGroup = ({ onClick }) => {
  return (
    <PageLayoutMock>
      <ActionButtonGroup>
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Primary button
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClick}>
          Secondary button
        </button>
      </ActionButtonGroup>
    </PageLayoutMock>
  )
}

actionButtonGroup.args = {
  onClick: action('click')
}
