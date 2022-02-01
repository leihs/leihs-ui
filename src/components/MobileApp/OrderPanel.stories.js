import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { FAKE_STYLEGUIDE_TIME } from '../../../.storybook/fake-time'
import { locale as fakeLocale, orderPanelTexts as fakeTxt } from './StoryUtils/fake-localization'

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

export const withAllArguments = () => {
  const now = new Date(FAKE_STYLEGUIDE_TIME)
  const [isValid, setIsValid] = useState()
  const {
    modelData,
    inventoryPools,
    initialInventoryPoolId,
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
          onSubmit={action('submit')}
          onValidate={setIsValid}
          locale={fakeLocale}
          txt={fakeTxt}
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
        <button type="submit" className="btn btn-primary" form="order-dialog-form" disabled={!isValid}>
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
          locale={fakeLocale}
          txt={fakeTxt}
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
