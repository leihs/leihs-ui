import React, { useState } from 'react'
import { parseISO, format, endOfMonth, addMonths } from 'date-fns'
import { de } from 'date-fns/locale'
import { DateRange } from '@leihs/calendar'
import DateRangePicker from './DateRangePicker'

export default {
  title: 'MobileApp/DesignComponents/DateRangePicker',
  component: DateRangePicker
}

function rangeDebugInfo(selectedRange) {
  return (
    <p className="mt-4">
      selected range: <samp>{JSON.stringify(selectedRange)}</samp>
    </p>
  )
}

export function minimalConfiguration() {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({ startDate: now, endDate: now })

  return (
    <div>
      <DateRangePicker selectedRange={selectedRange} onChange={setSelectedRange} />
      {rangeDebugInfo(selectedRange)}
    </div>
  )
}

export function localized() {
  const now = new Date()
  const [selectedRange, setSelectedRange] = useState({ startDate: now, endDate: now })

  return (
    <div>
      <DateRangePicker selectedRange={selectedRange} onChange={setSelectedRange} locale={de} />
      {rangeDebugInfo(selectedRange)}
    </div>
  )
}

export function constraints() {
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date('2021-07-07'),
    endDate: new Date('2021-07-08')
  })

  return (
    <div>
      <p className="text-muted">
        only dates between 7 and 25 can be selected <br />
        14/15 can not be within the range <br />
        10/11 can not be used as start dates <br />
        17/18 can not be used as end dates <br />
        (Use the text inputs to craft invalid selections)
      </p>
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
    </div>
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
    <div>
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
      <p className="text-muted">Original @leihs/calendar DateRange component</p>
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
