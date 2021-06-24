import React from 'react'
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
