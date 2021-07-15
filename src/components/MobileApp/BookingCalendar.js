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
import DialogCard from './DesignComponents/DialogCard'
import Section from './DesignComponents/Section'
import MinusPlusControl from './DesignComponents/MinusPlusControl'
import DateRangePicker from './DesignComponents/DateRangePicker'

const noop = () => {}

// FIXME: rename to OrderPanel
export const BookingCalendar = ({
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
  onSubmit,
  onCancel
}) => {
  const today = startOfDay(new Date())
  const minDate = minDateTotal ? startOfDay(minDateTotal) : today
  const maxDate = maxDateTotal ? startOfDay(maxDateTotal) : addMonths(minDate, 20 * 12)

  const [quantity, setQuantity] = useState(initialQuantity)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [selectedPoolId, setSelectedPoolId] = useState(initialInventoryPoolId || f.get(inventoryPools, '0.id'))

  const [selectedRange, setSelectedRange] = useState({
    startDate: initialStartDate ? startOfDay(initialStartDate) : today,
    endDate: initialEndDate ? startOfDay(initialEndDate) : today
  })

  const availabilityByDateAndPool = getAvailabilityByDateAndPool(modelData)
  const allBlockedDates = calcAllBlockedDates(availabilityByDateAndPool[selectedPoolId], quantity)
  const { blockedDates, blockedStartDates, blockedEndDates } = allBlockedDates

  const validationError = validateSelection(selectedRange, { minDate, maxDate }, allBlockedDates, quantity)
  const isValidForm = !validationError

  function submit(e) {
    e.preventDefault()
    onSubmit(stateForCallbacks())
  }

  function cancel() {
    onCancel()
  }

  function changeQuantity(number) {
    setQuantity(number)
    setHasUserInteracted(true)
    onQuantityChange(stateForCallbacks())
  }

  function changeInventoryPool(e) {
    const id = e.target.value
    setSelectedPoolId(id)
    onInventoryPoolChange(stateForCallbacks())
  }

  function changeDateRange(range) {
    setSelectedRange(range)
    setHasUserInteracted(true)
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
    <DialogCard title="Gegenstand hinzufügen" className="ui-booking-calendar">
      <DialogCard.Body>
        <Section title="Gegenstand" collapsible={true}>
          {modelData.name}
        </Section>
        <Section title="Anzahl" collapsible={true}>
          <MinusPlusControl number={quantity} onChange={changeQuantity} />
        </Section>
        <Section title="Gerätepark" collapsible={true}>
          <select className="form-control custom-select" value={selectedPoolId} onChange={changeInventoryPool}>
            {f.map(inventoryPools, ({ id, name, totalBorrowableQuantity }) => (
              <option key={id} value={id}>
                {name} (max. {totalBorrowableQuantity})
              </option>
            ))}
          </select>
        </Section>
        <Section title="Zeitraum" collapsible={true}>
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
        </Section>
        {hasUserInteracted && validationError && (
          <div>
            {/* (Bootstrap expects an invalid input before an invalid-feedback, we don't have it here, so we fake it) */}
            <i className="is-invalid"></i>
            <div className="invalid-feedback">{validationError}</div>
          </div>
        )}
      </DialogCard.Body>
      <DialogCard.Foot>
        <div className="row">
          <div className="col pr-2">
            <button type="button" href="#" className="btn btn-outline-danger" onClick={cancel}>
              Abbrechen
            </button>
          </div>
          <div className="col pl-2 text-right">
            <button type="submit" href="#" className="btn btn-primary" disabled={!isValidForm} onClick={submit}>
              Hinzufügen
            </button>
          </div>
        </div>
      </DialogCard.Foot>
    </DialogCard>
  )
}

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

BookingCalendar.propTypes = {
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
  onSubmit: PropTypes.func.isRequired,
  /** callback when user clicked the cancel button */
  onCancel: PropTypes.func.isRequired
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
  if (!wantedQuantity) {
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
