import React from 'react'
import { action } from '@storybook/addon-actions'
import f from 'lodash'
import { FAKE_STYLEGUIDE_TIME } from '../../../.storybook/fake-time'
import { parseISO } from 'date-fns'
import { BookingCalendar } from './BookingCalendar'

export default {
  title: 'MobileApp/Components/Order Panel',
  component: BookingCalendar,
  parameters: { layout: 'fullscreen' }
}

function getMockData() {
  const mock = require('../../static/api-examples/features/borrow/calendar.feature/1_1_1_Model_reservation_calendar_.json')
  const spec = mock.spec
  const apiData = mock.result.data
  const modelData = f.first(apiData.models.edges.map(edg => edg.node))
  modelData.name = 'Audio-Mischpult Behringer XENYX Q1204USB'

  // FIXME: pools should come from a seperate query,
  //         and availability data should have several pools!
  //         re-use and tranform example data for now…
  const FAKE_SECOND_POOL_ID = '53f78fc0-2b0b-4f67-a207-b08d2a3c47b2'
  modelData.availability.length < 2 &&
    modelData.availability.push({
      inventoryPool: { id: FAKE_SECOND_POOL_ID, name: 'Ein anderer Gerätepark', totalBorrowableQuantity: 5 },
      dates: modelData.availability[0].dates
    })
  const inventoryPools = f.map(modelData.availability, 'inventoryPool')

  return {
    modelData,
    inventoryPools,
    initialInventoryPoolId: inventoryPools[0].id,
    minDateLoaded: parseISO(f.get(f.first(f.get(apiData, 'models.edges.0.node.availability.0.dates')), 'date')),
    maxDateLoaded: parseISO(f.get(f.last(f.get(apiData, 'models.edges.0.node.availability.0.dates')), 'date')),
    spec
  }
}

export const withAllArguments = () => {
  const now = new Date(FAKE_STYLEGUIDE_TIME)
  const { modelData, inventoryPools, initialInventoryPoolId, minDateLoaded, maxDateLoaded, spec } = getMockData()
  return (
    <div>
      <BookingCalendar
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
        onCancel={action('cancel')}
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
    </div>
  )
}
export const withMinimalArguments = () => {
  const { modelData, inventoryPools, minDateLoaded, maxDateLoaded } = getMockData()
  return (
    <div>
      <BookingCalendar
        modelData={modelData}
        minDateLoaded={minDateLoaded}
        maxDateLoaded={maxDateLoaded}
        inventoryPools={inventoryPools}
        onSubmit={action('submit')}
        onCancel={action('cancel')}
      />
    </div>
  )
}
