import React from 'react'
import DialogLayout from './DialogLayout'

export default {
  title: 'MobileApp/Wireframes2021/Components/DialogLayout',
  parameters: { layout: 'fullscreen' },
  component: DialogLayout
}

export const dialog_layout = () => {
  return (
    <DialogLayout title="Title">
      <div className="w21-bg-light2 p-5">Some dialog content</div>
      <div className="p-5">Buttons and other footer content</div>
    </DialogLayout>
  )
}
