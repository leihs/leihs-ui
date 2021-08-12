import React from 'react'
import { withLinks } from '@storybook/addon-links'

import DialogLayout from '../../../DesignComponents/DialogLayout'
import Stack from '../../../DesignComponents/Stack'
import Section from '../../../DesignComponents/Section'
import ActionButtonGroup from '../../../DesignComponents/ActionButtonGroup'
import FormButtonGroup from '../../../DesignComponents/FormButtonGroup'

export default {
  title: 'MobileApp/Wireframes/Neue Ausleihe/Gegenstand bearbeiten',
  parameters: { layout: 'fullscreen' },
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
    <DialogLayout title="Gegenstand bearbeiten">
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <DialogLayout.Body>
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
        </DialogLayout.Body>
        <DialogLayout.Foot>
          <FormButtonGroup>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Abbrechen
            </button>
            <button type="submit" className="btn btn-primary">
              Bestätigen
            </button>
          </FormButtonGroup>
        </DialogLayout.Foot>
      </form>
    </DialogLayout>
  )
}

gegenstandBearbeiten.storyName = 'Gegenstand bearbeiten'
