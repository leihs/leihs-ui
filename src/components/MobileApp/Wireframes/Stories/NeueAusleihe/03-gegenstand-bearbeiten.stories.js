import React from 'react'
import { withLinks } from '@storybook/addon-links'

import ModalDialog from '../../../DesignComponents/ModalDialog'
import Stack from '../../../DesignComponents/Stack'
import Section from '../../../DesignComponents/Section'
import ActionButtonGroup from '../../../DesignComponents/ActionButtonGroup'

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
  },
  args: {
    modelData: { name: 'Audio-Mischpult Behringer XENYX Q1204USB' }
  },
  decorators: [withLinks]
}

export const gegenstandBearbeiten = ({ modelData, onSubmit, onCancel, onRemoveClick }) => {
  return (
    <ModalDialog title="Gegenstand bearbeiten" shown>
      <ModalDialog.Body>
        <form onSubmit={onSubmit} noValidate autoComplete="off" id="the-form">
          <Stack space="4">
            <Section title="Gegenstand" collapsible>
              {modelData.name}
            </Section>
            <Section title="TODO: Form" collapsible className="text-muted mb-5">
              <div className="border p-3">
                Not yet integrated in this wireframe, but already implemented
                <br />
                <br />
                <button data-sb-kind="MobileApp/Integrated Components/OrderPanel" className="btn btn-secondary btn-sm">
                  See Integrated Components/OrderPanel
                </button>
              </div>
            </Section>
          </Stack>
          <ActionButtonGroup>
            <button type="button" className="btn btn-secondary" onClick={onRemoveClick}>
              Gegenstand entfernen
            </button>
          </ActionButtonGroup>
        </form>
      </ModalDialog.Body>
      <ModalDialog.Footer>
        <button type="button" className="btn btn-secondary" onClick={onCancel} form="the-form">
          Abbrechen
        </button>
        <button type="submit" className="btn btn-primary" form="the-form">
          Bestätigen
        </button>
      </ModalDialog.Footer>
    </ModalDialog>
  )
}

gegenstandBearbeiten.storyName = 'Gegenstand bearbeiten'
