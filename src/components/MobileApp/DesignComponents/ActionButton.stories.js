import { action } from '@storybook/addon-actions'
import React from 'react'
import ActionButton from './ActionButton'

export default {
  title: 'MobileApp/DesignComponents/Action Button',
  component: ActionButton
}

export const actionButton = ({ onClick }) => {
  return (
    <>
      <div className="my-3">
        <ActionButton onClick={onClick}>Click me</ActionButton>
        <ActionButton onClick={onClick}>Another button</ActionButton>
      </div>
    </>
  )
}

actionButton.args = {
  onClick: action('click')
}
