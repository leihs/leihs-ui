import React from 'react'
import { action } from '@storybook/addon-actions'
import DialogCard from './DialogCard'

export default {
  title: 'MobileApp/DesignComponents/Dialog Card',
  parameters: { layout: 'fullscreen' },
  component: DialogCard
}

export const dialogCard = () => {
  return (
    <DialogCard title="Title">
      <DialogCard.Body>Some dialog content</DialogCard.Body>
      <DialogCard.Foot>Buttons and other footer content</DialogCard.Foot>
    </DialogCard>
  )
}

export const dialogCardWithButtons = ({ onCancel, onSubmit }) => {
  return (
    <DialogCard title="Title">
      <DialogCard.Body>Some dialog content</DialogCard.Body>
      <DialogCard.Foot>
        <DialogCard.ButtonGroup>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </DialogCard.ButtonGroup>
      </DialogCard.Foot>
    </DialogCard>
  )
}

dialogCardWithButtons.args = {
  onCancel: action('cancel'),
  onSubmit: action('submit')
}
