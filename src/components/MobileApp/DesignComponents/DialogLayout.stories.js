import React from 'react'
import { linkTo } from '@storybook/addon-links'
import DialogLayout from './DialogLayout'
import FormButtonGroup from './FormButtonGroup'

export default {
  title: 'MobileApp/Design Components/Layout/DialogLayout',
  component: DialogLayout,
  argTypes: {
    onCancel: { action: 'cancel' },
    onSubmit: { action: 'submit' }
  }
}

export const dialogCard = () => {
  return (
    <div>
      <h1>DialogLayout</h1>
      <p className="text-muted">The layout for filter and edit forms which open in a modal way.</p>
      <p className="text-muted">
        The title is a fixed part of the layout (not like in PageLayout, where PageLayout.Header holds the title)
      </p>
      <p className="text-muted">
        The content goes into two sub-components: <code>DialogLayout.Body</code> and <code>DialogLayout.Foot</code>.
      </p>
      <div className="shadow">
        <DialogLayout title="Title">
          <DialogLayout.Body>Body content</DialogLayout.Body>
          <DialogLayout.Foot>Foot content</DialogLayout.Foot>
        </DialogLayout>
      </div>
    </div>
  )
}
dialogCard.storyName = 'DialogLayout'

export const withFormButtons = ({ onCancel, onSubmit }) => {
  function submit(e) {
    e.preventDefault()
    onSubmit()
  }
  return (
    <div>
      <h1>DialogLayout</h1>
      <p className="text-muted">
        Use <code>FormButtonGroup</code> to layout the buttons
      </p>
      <p className="text-muted">
        <button
          className="btn btn-light btn-sm"
          onClick={linkTo('MobileApp/Design Components/Form Controls/FormButtonGroup')}
        >
          See: FormButtonGroup
        </button>
      </p>
      <div className="shadow">
        <DialogLayout title="Title">
          <form onSubmit={submit}>
            <DialogLayout.Body>Some body content...</DialogLayout.Body>
            <DialogLayout.Foot>
              <FormButtonGroup>
                <button type="button" className="btn btn-secondary" onClick={onCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </FormButtonGroup>
            </DialogLayout.Foot>
          </form>
        </DialogLayout>
      </div>
    </div>
  )
}
