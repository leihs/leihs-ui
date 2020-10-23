// import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import React, { useState } from 'react'
import f from 'lodash'

import { BookingCalendar } from './BookingCalendar'
import { DateRange } from '@leihs/calendar'
// eslint-disable-next-line no-unused-vars
import { FAKE_STYLEGUIDE_TIME } from '../../../.storybook/fake-time'
const df = require('date-fns')
window.f = f

export default {
  title: 'MobileApp/Components/Calendar',
  component: BookingCalendar,
  // decorators: [withInfo],
  parameters: {
    // FIXME: does crash in snapshot test
    storyshots: { disable: true }
  }
}

export const WIP_just_a_datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  //
  const now = new Date()
  //
  const onlyFuture = true
  const onChange = item => setSelectedDate(item)
  //
  return (
    <div className="mx-1 mt-2 d-flex flex-column">
      <p className="d-block m-auto">
        selected date: <samp>{JSON.stringify(selectedDate)}</samp>
      </p>
      <DateRange
        className="m-auto"
        displayMode="date"
        months={1}
        minDate={onlyFuture ? now : null}
        date={selectedDate}
        onChange={onChange}
        // TMP:
        maxDateLoaded={df.parseISO('2020-07-31')}
        loadingIndicator={'cargando…'}
        scroll={{
          enabled: true
          // monthHeight: WIP_LARGE_SIZE ? 278 : undefined
        }}
      />
    </div>
  )
}

WIP_just_a_datepicker.parameters = {
  // info: { inline: true, text: 'testing…' }
}

export const BookingCalendar_with_mock_data = () => {
  const now = new Date()
  const mock = require('../../static/api-examples/features/borrow/calendar.feature/1_1_1_Model_reservation_calendar_.json')
  const apiData = mock.result.data

  // FIXME: pools should come from a seperate query,
  //         and availability data should have several pools!
  //         re-use and tranform example data for now…
  const FAKE_SECOND_POOL_ID = '53f78fc0-2b0b-4f67-a207-b08d2a3c47b2'
  const modelData = f.first(apiData.models.edges.map(edg => edg.node))
  modelData.availability.length < 2 &&
    modelData.availability.push({
      inventoryPool: { id: FAKE_SECOND_POOL_ID, name: 'Fake 2nd Pool' },
      dates: modelData.availability[0].dates
    })
  const inventoryPools = f.map(modelData.availability, 'inventoryPool')

  const exampleProps = {
    modelData,
    inventoryPools,
    initialInventoryPoolId: FAKE_SECOND_POOL_ID,
    //
    minDateTotal: now,
    minDateLoaded: df.parseISO(f.get(f.first(f.get(apiData, 'models.edges.0.node.availability.0.dates')), 'date')),
    // maxDateTotal: ,
    maxDateLoaded: df.parseISO(f.get(f.last(f.get(apiData, 'models.edges.0.node.availability.0.dates')), 'date'))
  }

  return (
    <div>
      <BookingCalendar
        initialOpen={true}
        initialQuantity={1}
        loadingIndicator={'cargando…'}
        onLoadMoreFuture={action('fetch-future-data')}
        onDatesChange={action('dates-changed')}
        onQuantityChange={action('quantity-changed')}
        onInventoryPoolChange={action('pool-changed')}
        onSubmit={action('submit')}
        {...exampleProps}
      />
      <hr />
      <div className="m-4">
        <h3 className="h4 code text-monospace">
          fake timestamp: <small key="small">{JSON.stringify(FAKE_STYLEGUIDE_TIME)}</small>
        </h3>

        <details>
          <summary className="h4 text-monospace">mock data used:</summary>
          <pre>{JSON.stringify(modelData, 0, 2)}</pre>
        </details>
        <details>
          <summary className="h4 text-monospace">mock data from spec:</summary>
          <pre>{JSON.stringify(mock.spec, 0, 2)}</pre>
        </details>
      </div>
    </div>
  )
}

BookingCalendar_with_mock_data.story = {
  component: BookingCalendar,
  parameters: {
    info: {
      // excludedPropTypes: ['_now']
    }
  }
}
