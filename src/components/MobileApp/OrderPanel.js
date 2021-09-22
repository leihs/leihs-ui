import React, { useState } from 'react'
import PropTypes from 'prop-types'
import f from 'lodash'
import {
  startOfDay,
  addMonths,
  min,
  endOfMonth,
  isAfter,
  parseISO,
  format,
  isSameDay,
  isValid,
  isBefore,
  eachDayOfInterval
} from 'date-fns'
import { de } from 'date-fns/locale'
import Section from './DesignComponents/Section'
import MinusPlusControl from './DesignComponents/MinusPlusControl'
import DateRangePicker from './DesignComponents/DateRangePicker'
import Stack from './DesignComponents/Stack'
import Warning from './DesignComponents/Warning'

const noop = () => {}

const OrderPanel = ({
  modelData,
  //
  minDateTotal,
  minDateLoaded,
  maxDateTotal,
  maxDateLoaded,
  onShownDateChange = noop,
  //
  initialStartDate,
  initialEndDate,
  onDatesChange = noop,
  //
  initialQuantity = 1,
  onQuantityChange = noop,
  //
  inventoryPools,
  initialInventoryPoolId,
  onInventoryPoolChange = noop,
  //
  onSubmit = noop
}) => {
  const today = startOfDay(new Date())
  const minDate = minDateTotal ? startOfDay(minDateTotal) : today
  const maxDate = maxDateTotal ? startOfDay(maxDateTotal) : addMonths(minDate, 20 * 12)

  const [quantity, setQuantity] = useState(initialQuantity)
  const [selectedPoolId, setSelectedPoolId] = useState(initialInventoryPoolId || f.get(inventoryPools, '0.id'))

  const [selectedRange, setSelectedRange] = useState({
    startDate: initialStartDate ? startOfDay(initialStartDate) : today,
    endDate: initialEndDate ? startOfDay(initialEndDate) : today
  })

  const availabilityByDateAndPool = getAvailabilityByDateAndPool(modelData)
  const allBlockedDates = calcAllBlockedDates(availabilityByDateAndPool[selectedPoolId], quantity)
  const { blockedDates, blockedStartDates, blockedEndDates } = allBlockedDates

  function validate() {
    return validateSelection(selectedRange, { minDate, maxDate }, allBlockedDates, quantity)
  }

  const validationError = validate()

  function submit(e) {
    e.preventDefault()
    const validationError = validate()
    if (!validationError) {
      onSubmit(stateForCallbacks())
    }
  }

  function changeQuantity(number) {
    setQuantity(number)
    onQuantityChange(stateForCallbacks())
  }

  function changeInventoryPool(e) {
    const id = e.target.value
    setSelectedPoolId(id)
    onInventoryPoolChange(stateForCallbacks())
  }

  function changeDateRange(range) {
    setSelectedRange(range)
    onDatesChange(stateForCallbacks())
  }

  const stateForCallbacks = () => ({
    startDate: selectedRange.startDate,
    endDate: selectedRange.endDate,
    quantity,
    poolId: selectedPoolId
  })

  function changeShownDate(newDate) {
    const targetDate = min([addMonths(endOfMonth(newDate), 3), maxDate])
    if (isAfter(targetDate, maxDateLoaded)) {
      onShownDateChange({ date: targetDate })
    }
  }
  return (
    <form onSubmit={submit} noValidate className="was-validated" autoComplete="off" id="order-dialog-form">
      <Stack space="4">
        <Section>{modelData.name}</Section>
        <Section title={txt.quantity} collapsible>
          <label htmlFor="quantity" className="visually-hidden">
            {txt.quantity}
          </label>
          <MinusPlusControl name="quantity" id="quantity" value={quantity} onChange={changeQuantity} min={1} />
        </Section>
        <Section title={txt.pool} collapsible>
          <label htmlFor="pool-id" className="visually-hidden">
            {txt.pool}
          </label>
          <select
            name="pool-id"
            id="pool-id"
            value={selectedPoolId}
            onChange={changeInventoryPool}
            className="form-select"
          >
            {f.map(inventoryPools, ({ id, name, totalBorrowableQuantity }) => (
              <option key={id} value={id}>
                {name} ({txt.max} {totalBorrowableQuantity})
              </option>
            ))}
          </select>
        </Section>
        <Section title={txt.timeSpan} collapsible>
          <fieldset>
            <legend className="visually-hidden">{txt.timeSpan}</legend>
            <DateRangePicker
              selectedRange={selectedRange}
              onChange={changeDateRange}
              onShownDateChange={changeShownDate}
              maxDateLoaded={maxDateLoaded}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={blockedDates}
              disabledStartDates={blockedStartDates}
              disabledEndDates={blockedEndDates}
              locale={de}
            />
          </fieldset>
          {validationError && <Warning>{validationError}</Warning>}
        </Section>
      </Stack>
    </form>
  )
}

export default OrderPanel

const modelDataPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  availability: PropTypes.arrayOf(
    PropTypes.shape({
      inventoryPool: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired,
      dates: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          endDateRestriction: PropTypes.any,
          quantity: PropTypes.number.isRequired,
          startDateRestriction: PropTypes.any
        })
      ).isRequired
    })
  ).isRequired
})

OrderPanel.propTypes = {
  /** availabilty and visits info from API */
  modelData: modelDataPropType.isRequired,

  /** earliest date that can be selected or navigated to, defaults to today */
  minDateTotal: PropTypes.instanceOf(Date),
  /** earliest date for which data was loaded. NOTE: navigating further into past is NOT supported! */
  minDateLoaded: PropTypes.instanceOf(Date).isRequired,
  /** latest date that can be selected or navigated to, defaults to `minDateTotal` + 20 years */
  maxDateTotal: PropTypes.instanceOf(Date),
  /** Latest date for which data has be loaded. Navigating further will trigger "onShownDateChange" callback */
  maxDateLoaded: PropTypes.instanceOf(Date).isRequired,
  /** callback, when more data needs to be loaded. arguments: `{date}`, defaults to noop */
  onShownDateChange: PropTypes.func,

  /** start date that is initially selected (defaults to today) */
  initialStartDate: PropTypes.instanceOf(Date),
  /** end date that is initially selected (defaults to today) */
  initialEndDate: PropTypes.instanceOf(Date),
  /** callback when the selected date range is changed (defaults to noop) */
  onDatesChange: PropTypes.func,

  /** wanted quantity that is initially selected (defaults to 1) */
  initialQuantity: PropTypes.number,
  /** callback when the wanted quantity is changed (defaults to noop) */
  onQuantityChange: PropTypes.func,

  /** list of inventory pools for selecting */
  inventoryPools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  /** initially selected pool */
  initialPoolId: PropTypes.string,
  /** callback, when selected pool changes, called with `id`, defaults to noop */
  onInventoryPoolChange: PropTypes.func,

  /** callback, submits user selection. arguments: `{startDate, endDate, quantity, poolId}` */
  onSubmit: PropTypes.func.isRequired
}

function getAvailabilityByDateAndPool(modelData) {
  return f.fromPairs(
    f.map(modelData.availability, abp => [abp.inventoryPool.id, f.fromPairs(f.map(abp.dates, i => [i.date, i]))])
  )
}

function calcAllBlockedDates(availabilityByDate = {}, wantedQuantity = 1) {
  const blockedDates = []
  const blockedStartDates = []
  const blockedEndDates = []
  Object.keys(availabilityByDate).forEach(date => {
    const day = parseISO(date)
    const dat = availabilityByDate[date]
    if (!dat || dat.quantity < wantedQuantity) blockedDates.push(day)
    if (dat.startDateRestriction) blockedStartDates.push(day)
    if (dat.endDateRestriction) blockedEndDates.push(day)
  })
  return { blockedDates, blockedStartDates, blockedEndDates }
}

function getByDay(dateList, date) {
  if (f.isArray(dateList)) return f.find(dateList, day => isSameDay(day, date))
  if (f.isObject(dateList)) return dateList[format(date, 'yyyy-MM-dd')]
  throw TypeError
}

function formatDate(date) {
  return format(date, 'P', { locale: de })
}

function validateSelection(
  { startDate, endDate },
  { minDate, maxDate },
  { blockedDates, blockedStartDates, blockedEndDates },
  wantedQuantity
) {
  wantedQuantity = parseInt(wantedQuantity, 10)
  if (Number.isNaN(wantedQuantity) || wantedQuantity < 1) {
    return 'Verfügbarkeit kann nicht geprüft werden, da die Anzahl fehlt'
  }

  if (!isValid(startDate)) {
    return 'Ungültiges Beginndatum'
  }
  if (!isValid(endDate)) {
    return 'Ungültiges Enddatum'
  }
  if (isBefore(endDate, startDate)) {
    return 'Enddatum muss nach Beginndatum sein'
  }

  if (endDate > maxDate) {
    return `Datum darf nicht nach ${formatDate(maxDate)} sein`
  }
  if (startDate < minDate) {
    return `Datum darf nicht vor ${formatDate(minDate)} sein`
  }

  if (getByDay(blockedStartDates, startDate)) {
    return `Gerätepark ist am ${formatDate(startDate)} geschlossen`
  }
  if (getByDay(blockedEndDates, endDate)) {
    return `Gerätepark ist am ${formatDate(endDate)} geschlossen`
  }

  if (!f.isEmpty(blockedDates)) {
    if (isSameDay(startDate, endDate)) {
      if (getByDay(blockedDates, startDate)) {
        return `Gegenstand ist am ${formatDate(startDate)} nicht in der gewünschten Menge verfügbar`
      }
    } else {
      if (eachDayOfInterval({ start: startDate, end: endDate }).some(date => getByDay(blockedDates, date))) {
        return `Gegenstand ist in diesem Zeitraum nicht in der gewünschten Menge verfügbar`
      }
    }
  }
}

// Temporary text dict
const txt = {
  quantity: 'Anzahl',
  pool: 'Gerätepark',
  max: 'max.',
  timeSpan: 'Zeitraum'
}

// TODO: use translation infrastructure for the texts in `txt` and `validateSelection`
