import React from 'react'

import ModalDialog from '../../../DesignComponents/ModalDialog'
import Stack from '../../../DesignComponents/Stack'
import ActionButtonGroup from '../../../DesignComponents/ActionButtonGroup'
import OrderPanel from '../../../OrderPanel'
import { getOrderPanelMockData } from '../../../StoryUtils/sample-props'
import { locale, orderPanelTexts } from '../../../StoryUtils/fake-localization'

export default {
  title: 'MobileApp/Wireframes/Warenkorb/Gegenstand bearbeiten',
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
  const { modelData, inventoryPools, maxDateLoaded } = getOrderPanelMockData()
  return (
    <ModalDialog title="Gegenstand bearbeiten" shown>
      <ModalDialog.Body>
        <Stack space="4">
          <OrderPanel
            modelData={modelData}
            maxDateLoaded={maxDateLoaded}
            inventoryPools={inventoryPools}
            onSubmit={onSubmit}
            locale={locale}
            txt={orderPanelTexts}
          />
          <ActionButtonGroup>
            <button type="button" className="btn btn-secondary" onClick={onRemoveClick}>
              Gegenstand entfernen
            </button>
          </ActionButtonGroup>
        </Stack>
      </ModalDialog.Body>
      <ModalDialog.Footer>
        <button type="submit" className="btn btn-primary" form="order-dialog-form">
          Bestätigen
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Abbrechen
        </button>
      </ModalDialog.Footer>
    </ModalDialog>
  )
}

gegenstandBearbeiten.storyName = 'Gegenstand bearbeiten'
