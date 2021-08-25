import React, { useState } from 'react'
import { parseISO, format, endOfMonth } from 'date-fns'
import { de } from 'date-fns/locale'
import { DateRange } from '@leihs/calendar'
import DateRangePicker from './DateRangePicker'
import Section from './Section'

export default {
  title: 'MobileApp/Design Components/Form Controls/DateRangePicker',
  component: DateRangePicker
}

function rangeDebugInfo(selectedRange) {
  return (
    <Section title="selected range" collapsible className="text-muted pt-4">
      <small className="fw-light">
        <samp>{JSON.stringify(selectedRange)}</samp>
      </small>
    </Section>
  )
}

export function dateRangePicker() {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({ startDate: now, endDate: now })

  return (
    <div>
      <h1>DateRangePicker</h1>
      <p className="text-muted">Example with minimal configuration:</p>
      <DateRangePicker selectedRange={selectedRange} onChange={setSelectedRange} />
      {rangeDebugInfo(selectedRange)}
    </div>
  )
}
dateRangePicker.storyName = 'DateRangePicker'

export function localized() {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({ startDate: now, endDate: now })

  return (
    <div>
      <h1>DateRangePicker - Localized</h1>
      <DateRangePicker selectedRange={selectedRange} onChange={setSelectedRange} locale={de} />
      {rangeDebugInfo(selectedRange)}
    </div>
  )
}

export function constraints() {
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date('2021-07-11'),
    endDate: new Date('2021-07-17')
  })

  return (
    <div>
      <h1>DateRangePicker - Constraints</h1>
      <p className="text-muted">In this example the following constraints are in place:</p>
      <ul className="text-muted">
        <li>only dates between 5 and 25</li>
        <li>14/15 can not be within the range </li>
        <li>10/11 can not be used as start dates </li>
        <li>17/18 can not be used as end dates </li>
        <li>21 can not be in the range and also not be the startDate or endDate</li>
      </ul>
      <p className="text-muted">
        If you enter invalid dates using the text inputs, the conflicts will be highlighted in the calendar (red)
      </p>
      <DateRangePicker
        selectedRange={selectedRange}
        onChange={setSelectedRange}
        locale={de}
        minDate={new Date('2021-07-05')}
        maxDate={new Date('2021-07-25')}
        disabledDates={[new Date('2021-07-14'), new Date('2021-07-15'), new Date('2021-07-21')]}
        disabledStartDates={[new Date('2021-07-10'), new Date('2021-07-11'), new Date('2021-07-21')]}
        disabledEndDates={[new Date('2021-07-17'), new Date('2021-07-18'), new Date('2021-07-21')]}
      />
      {rangeDebugInfo(selectedRange)}
    </div>
  )
}

export function lazyLoading() {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({ startDate: now, endDate: now })
  const [shownDate, setShownDate] = useState(now)
  const [maxDateLoaded, setMaxDateLoaded] = useState(endOfMonth(now))
  const [loading, setLoading] = useState(false)

  async function handleShownDateChange(date) {
    const newMax = endOfMonth(date)
    if (newMax > maxDateLoaded) {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setShownDate(date)
      setMaxDateLoaded(newMax)
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>DateRangePicker - Lazy Loading</h1>
      <p className="text-muted">
        maxDateLoaded = {format(maxDateLoaded, 'P', { locale: de })} {loading && <span>...loading...</span>}
      </p>
      <DateRangePicker
        selectedRange={selectedRange}
        onChange={setSelectedRange}
        locale={de}
        shownDate={shownDate}
        onShownDateChange={handleShownDateChange}
        maxDateLoaded={maxDateLoaded}
      />
      {rangeDebugInfo(selectedRange)}
    </div>
  )
}

export const underlyingDateRangeComponent = () => {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({
    startDate: now,
    endDate: now,
    key: 'selection' // (required by DateRange component)
  })

  const onChange = item => setSelectedRange(item.selection)

  return (
    <div>
      <h1>DateRangePicker</h1>
      <p className="text-muted">
        For reference: an example of @leihs/calendar DateRange component on top of which DateRangePicker is built
      </p>
      <DateRange
        editableDateInputs={true}
        locale={de}
        dateDisplayFormat={'P'}
        months={1}
        minDate={now}
        ranges={[selectedRange]}
        onChange={onChange}
        maxDateLoaded={parseISO('2020-07-31')}
        loadingIndicator={'cargando…'}
        scroll={{ enabled: true }}
      />
      {rangeDebugInfo(selectedRange)}
    </div>
  )
}

underlyingDateRangeComponent.parameters = {
  // FIXME: does crash in snapshot test
  storyshots: { disable: true }
}
