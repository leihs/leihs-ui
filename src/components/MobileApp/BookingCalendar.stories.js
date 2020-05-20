import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import React, { useState } from 'react'
import f from 'lodash'

import { BookingCalendar } from './BookingCalendar'
import { Calendar } from '@leihs/calendar'
// eslint-disable-next-line no-unused-vars
import { FAKE_STYLEGUIDE_TIME } from '../../../.storybook/fake-time'
const df = require('date-fns')
window.f = f

export default {
  title: 'MobileApp/Components/Calendar',
  component: BookingCalendar,
  decorators: [withInfo],
  parameters: {
    info: { inline: true, header: false, source: false }
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
      <Calendar
        className="m-auto"
        displayMode="date"
        months={1}
        minDate={onlyFuture ? now : null}
        date={selectedDate}
        onChange={onChange}
      />
    </div>
  )
}

WIP_just_a_datepicker.story = {
  parameters: {
    info: { inline: true, text: 'Hi!!!' }
  }
}

export const BookingCalendar_with_mock_data = () => {
  const now = new Date()
  const mock = require('../../static/api-examples/features/borrow/calendar.feature/1_1_1_Model_reservation_calendar_.json')
  const apiData = mock.result.data

  const exampleProps = {
    modelData: f.first(apiData.models.edges.map(edg => edg.node)),
    minDateTotal: now,
    minDateLoaded: df.parseISO(f.get(f.first(f.get(apiData, 'models.edges.0.node.availability.0.dates')), 'date')),
    // maxDateTotal: ,
    maxDateLoaded: df.parseISO(f.get(f.last(f.get(apiData, 'models.edges.0.node.availability.0.dates')), 'date')),
    isLoadingFuture: true // static example can not really finish loading anyways
  }

  return (
    <div>
      <BookingCalendar
        initialOpen={true}
        initialQuantity={1}
        loadingIndicator={<span>Loading…</span>}
        onLoadMoreFuture={action('fetch-future-data')}
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
          <pre>{JSON.stringify(apiData, 0, 2)}</pre>
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
      excludedPropTypes: ['_now']
    }
  }
}