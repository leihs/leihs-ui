import React from 'react'

import ModalDialog from '../../../DesignComponents/ModalDialog'
import Stack from '../../../DesignComponents/Stack'
import ActionButtonGroup from '../../../DesignComponents/ActionButtonGroup'
import { BookingCalendar } from '../../../BookingCalendar'
import { getOrderPanelMockData } from '../../../StoryUtils/sample-props'

export default {
  title: 'MobileApp/Wireframes/Neue Ausleihe/Gegenstand bearbeiten',
  parameters: {
    layout: 'fullscreen',
    storyshots: { disable: true } // (related to ModalDialog, see https://github.com/leihs/leihs/issues/1125)
  },
  argTypes: {
    onSubmit: { action: 'submit' },
    onCancel: { action: 'cancel' },
    onRemoveClick: { action: 'remove' }
  }
}

export const gegenstandBearbeiten = ({ onSubmit, onCancel, onRemoveClick }) => {
  const { modelData, inventoryPools, minDateLoaded, maxDateLoaded } = getOrderPanelMockData()
  return (
    <ModalDialog title="Gegenstand bearbeiten" shown>
      <ModalDialog.Body>
        <Stack space="4">
          <BookingCalendar
            modelData={modelData}
            minDateLoaded={minDateLoaded}
            maxDateLoaded={maxDateLoaded}
            inventoryPools={inventoryPools}
            onSubmit={onSubmit}
          />
          <ActionButtonGroup>
            <button type="button" className="btn btn-secondary" onClick={onRemoveClick}>
              Gegenstand entfernen
            </button>
          </ActionButtonGroup>
        </Stack>
      </ModalDialog.Body>
      <ModalDialog.Footer>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Abbrechen
        </button>
        <button type="submit" className="btn btn-primary" form="order-dialog-form">
          Bestätigen
        </button>
      </ModalDialog.Footer>
    </ModalDialog>
  )
}

gegenstandBearbeiten.storyName = 'Gegenstand bearbeiten'
