import React, { useState } from 'react'
import { parseISO, format, endOfMonth, addMonths } from 'date-fns'
import { de } from 'date-fns/locale'
import { DateRange } from '@leihs/calendar'
import DateRangePicker from './DateRangePicker'
import PageLayoutMock from './../StoryUtils/PageLayoutMock'
import Section from './Section'

export default {
  title: 'MobileApp/DesignComponents/DateRangePicker',
  component: DateRangePicker,
  parameters: { layout: 'fullscreen' }
}

function rangeDebugInfo(selectedRange) {
  return (
    <Section title="selected range" collapsible={true}>
      <small className="text-muted">
        <samp>{JSON.stringify(selectedRange)}</samp>
      </small>
    </Section>
  )
}

export function minimalConfiguration() {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({ startDate: now, endDate: now })

  return (
    <PageLayoutMock>
      <DateRangePicker selectedRange={selectedRange} onChange={setSelectedRange} />
      {rangeDebugInfo(selectedRange)}
    </PageLayoutMock>
  )
}

export function localized() {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({ startDate: now, endDate: now })

  return (
    <PageLayoutMock>
      <DateRangePicker selectedRange={selectedRange} onChange={setSelectedRange} locale={de} />
      {rangeDebugInfo(selectedRange)}
    </PageLayoutMock>
  )
}

export function constraints() {
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date('2021-07-07'),
    endDate: new Date('2021-07-08')
  })

  return (
    <PageLayoutMock>
      <h1>Example with constraints</h1>
      <ul className="small">
        <li>only dates between 7 and 25 can be selected </li>
        <li>14/15 can not be within the range </li>
        <li>10/11 can not be used as start dates </li>
        <li>17/18 can not be used as end dates </li>
        <li>Use the text inputs to craft invalid selections</li>
      </ul>
      <DateRangePicker
        selectedRange={selectedRange}
        onChange={setSelectedRange}
        locale={de}
        minDate={new Date('2021-07-05')}
        maxDate={new Date('2021-07-25')}
        disabledDates={[new Date('2021-07-14'), new Date('2021-07-15')]}
        disabledStartDates={[new Date('2021-07-10'), new Date('2021-07-11')]}
        disabledEndDates={[new Date('2021-07-17'), new Date('2021-07-18')]}
      />
      {rangeDebugInfo(selectedRange)}
    </PageLayoutMock>
  )
}

export function lazyLoading() {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({ startDate: now, endDate: now })
  const [maxDateLoaded, setMaxDateLoaded] = useState(endOfMonth(now))

  function getMaxDate(date) {
    return endOfMonth(addMonths(date, 1))
  }

  async function simulateLoading(date) {
    const newMax = getMaxDate(date)
    if (newMax > maxDateLoaded) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMaxDateLoaded(newMax)
    }
  }

  return (
    <PageLayoutMock>
      <p className="text-muted">maxDateLoaded = {format(maxDateLoaded, 'P', { locale: de })}</p>
      <DateRangePicker
        selectedRange={selectedRange}
        onChange={setSelectedRange}
        locale={de}
        onShownDateChange={simulateLoading}
        maxDateLoaded={maxDateLoaded}
        minDate={now}
      />
      {rangeDebugInfo(selectedRange)}
    </PageLayoutMock>
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
    <PageLayoutMock>
      <h1>Original @leihs/calendar DateRange component</h1>
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
    </PageLayoutMock>
  )
}

underlyingDateRangeComponent.parameters = {
  // FIXME: does crash in snapshot test
  storyshots: { disable: true }
}
