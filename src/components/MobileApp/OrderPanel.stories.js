import React from 'react'
import { action } from '@storybook/addon-actions'
import { FAKE_STYLEGUIDE_TIME } from '../../../.storybook/fake-time'

import { getOrderPanelMockData } from './StoryUtils/sample-props'
import OrderPanel from './OrderPanel'
import ModalDialog from './DesignComponents/ModalDialog'

export default {
  title: 'MobileApp/Integrated Components/OrderPanel',
  component: OrderPanel,
  parameters: {
    layout: 'fullscreen',
    storyshots: { disable: true } // (related to ModalDialog, see https://github.com/leihs/leihs/issues/1125)
  }
}

const fake_locale = 'de-CH'
const fake_txt = {
  label: {
    quantity: { 'de-CH': 'Anzahl' },
    minus: { 'de-CH': 'Minus' },
    plus: { 'de-CH': 'Plus' },
    pool: { 'de-CH': 'Gerätepark' },
    'pool-max-amount': { 'de-CH': '{pool} (max. {amount, number})' },
    'user-delegation': { 'de-CH': 'Delegation' },
    timespan: { 'de-CH': 'Zeitraum' },
    from: { 'de-CH': 'Von' },
    until: { 'de-CH': 'Bis' }
  },
  'user-delegation-cant-be-changed-active-cart': {
    'de-CH': 'Delegation kann nicht gewechselt werden, weil schon andere Reservationen vorhanden sind.'
  },
  validate: {
    'missing-quantity': { 'de-CH': 'Verfügbarkeit kann nicht geprüft werden, da die Anzahl fehlt' },
    'invalid-start-date': { 'de-CH': 'Ungültiges Beginndatum' },
    'invalid-end-date': { 'de-CH': 'Ungültiges Enddatum' },
    'start-after-end': { 'de-CH': 'Enddatum muss nach Beginndatum sein' },
    'end-date-to-late': { 'de-CH': 'Datum darf nicht nach {maxDate, date, small} sein' },
    'start-date-to-early': { 'de-CH': 'Datum darf nicht vor {minDate, date, small} sein' },
    'pool-closed-at-start-date': { 'de-CH': 'Gerätepark ist am {startDate, date, small} geschlossen' },
    'pool-closed-at-end-date': { 'de-CH': 'Gerätepark ist am {endDate, date, small} geschlossen' },
    'quantity-to-large-at-day': {
      'de-CH': 'Gegenstand ist am {startDate, date, small} nicht in der gewünschten Menge verfügbar'
    },
    'quantity-to-large-in-range': {
      'de-CH': 'Gegenstand ist in diesem Zeitraum nicht in der gewünschten Menge verfügbar'
    }
  }
}

export const withAllArguments = () => {
  const now = new Date(FAKE_STYLEGUIDE_TIME)
  const {
    modelData,
    inventoryPools,
    initialInventoryPoolId,
    userDelegations,
    initialUserDelegation,
    minDateLoaded,
    maxDateLoaded,
    spec
  } = getOrderPanelMockData()
  return (
    <ModalDialog title="Gegenstand hinzufügen" className="ui-booking-calendar" shown>
      <ModalDialog.Body>
        <OrderPanel
          modelData={modelData}
          //
          minDateTotal={now}
          minDateLoaded={minDateLoaded}
          maxDateTotal={new Date('2030-01-01')}
          maxDateLoaded={maxDateLoaded}
          onShownDateChange={action('shown-date-change')}
          //
          initialStartDate={now}
          initialEndDate={now}
          onDatesChange={action('dates-change')}
          //
          initialQuantity={2}
          onQuantityChange={action('quantity-change')}
          //
          inventoryPools={inventoryPools}
          initialInventoryPoolId={initialInventoryPoolId}
          onInventoryPoolChange={action('pool-change')}
          //
          userDelegations={userDelegations}
          initialUserDelegation={initialUserDelegation}
          userDelegationCanBeChanged={false}
          onUserDelegationChange={action('user-delegation-change')}
          //
          onSubmit={action('submit')}
          locale={fake_locale}
          txt={fake_txt}
        />
        <div className="m-4 text-muted">
          <h4>Debugging Info</h4>
          <details>
            <summary className="code text-monospace">fake timestamp</summary>
            <pre>{JSON.stringify(FAKE_STYLEGUIDE_TIME)}</pre>
          </details>
          <details>
            <summary className="text-monospace">mock data used</summary>
            <pre>{JSON.stringify(modelData, 0, 2)}</pre>
          </details>
          <details>
            <summary className="text-monospace">mock data from spec</summary>
            <pre>{JSON.stringify(spec, 0, 2)}</pre>
          </details>
        </div>
      </ModalDialog.Body>
      <ModalDialog.Footer>
        <button type="submit" className="btn btn-primary" form="order-dialog-form">
          Hinzufügen
        </button>
        <button type="button" className="btn btn-secondary" onClick={action('cancel')}>
          Abbrechen
        </button>
      </ModalDialog.Footer>
    </ModalDialog>
  )
}
export const withMinimalArguments = () => {
  const { modelData, inventoryPools, minDateLoaded, maxDateLoaded } = getOrderPanelMockData()
  return (
    <ModalDialog title="Gegenstand hinzufügen" className="ui-booking-calendar" shown>
      <ModalDialog.Body>
        <OrderPanel
          modelData={modelData}
          minDateLoaded={minDateLoaded}
          maxDateLoaded={maxDateLoaded}
          inventoryPools={inventoryPools}
          onSubmit={action('submit')}
          locale={fake_locale}
          txt={fake_txt}
        />
      </ModalDialog.Body>
      <ModalDialog.Footer>
        <button type="submit" className="btn btn-primary" form="order-dialog-form">
          Hinzufügen
        </button>
        <button type="button" className="btn btn-secondary" onClick={action('cancel')}>
          Abbrechen
        </button>
      </ModalDialog.Footer>
    </ModalDialog>
  )
}
