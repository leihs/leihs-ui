import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import f from 'lodash'

import { DateRange } from '@leihs/calendar'
const df = require('date-fns')

// TODO:
// - reset endDate if new startDate is changed AND endDate is not valid anymore
// - fix in component:
//   - when selecting earlier start date do not reset range!
//   - allow initial selection to be empty!

const WIP_LARGE_SIZE = false
const BASE_CLASS = 'ui-booking-calendar'

const WIP_STYLES = `
  .ui-booking-calendar { margin-left: auto !important; margin-right: auto !important; }
  .rdrCalendarWrapper, .rdrDateRangeWrapper { margin: auto; }

  .rdrMonth, .rdrMonthIsLoading, .rdrMonthName, .rdrWeekDays { padding-left: 0; padding-right: 0; }
  .rdrNextPrevButton { margin-left: 0; margin-right: 0; }

  .rdrMonth, .rdrMonthIsLoading { width: initial }

  // .rdrDayDisabled:not(.rdrDayDisabledStart):not(.rdrDayDisabledEnd) .rdrDayNumber span {
  //   text-decoration: line-through;
  // }
`

// eslint-disable-next-line no-console, no-unused-vars
const WIP_DEBUG_CALLBACK = name => (a, b, c) => console.log(name, { a, b, c })

export const BookingCalendar = ({
  _now = new Date(),
  // minimumNights = 0, // TODO: use this…
  //
  /** availabilty and visits info from API */
  modelData,
  minDateTotal = _now,
  minDateLoaded,
  maxDateTotal = df.parseISO('2999-12-31'),
  maxDateLoaded,
  // TODO: select next possible date (maybe only if next week?)
  initialStartDate = df.max([_now, minDateTotal]),
  initialEndDate = initialStartDate,
  initialQuantity = 1,
  //
  onLoadMoreFuture,
  isLoadingFuture,
  onSubmit,
  //
  showClearDates = true,
  //
  numMonths = 1,
  // styling
  cardClass = 'm-2',
  cardStyle
}) => {
  const today = df.startOfDay(new Date())

  const inventoryPools = f.map(modelData.availability, 'inventoryPool')
  const availabilityByDateAndPool = getAvailabilityByDateAndPool(modelData)

  const initialSelectedRange = {
    startDate: df.startOfDay(initialStartDate),
    endDate: df.startOfDay(initialEndDate),
    key: 'selection',
    autoFocus: true,
    disabled: false,
    showDateDisplay: true
  }

  const [selectedRange, setSelectedRange] = useState(initialSelectedRange)
  // const hasSelectedRange =
  //   df.isValid(selectedRange.startDate) && df.isValid(selectedRange.endDate)

  const [quantity, setQuantity] = useState(initialQuantity)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [selectedPoolId, setSelectedPoolId] = useState(f.first(inventoryPools).id)

  const clearForm = () => {
    setQuantity(initialQuantity)
    setSelectedRange(initialSelectedRange)
    setHasUserInteracted(false)
  }

  const allBlockedDates = calcAllBlockedDates(availabilityByDateAndPool[selectedPoolId], quantity)
  const { blockedDates, blockedStartDates, blockedEndDates } = allBlockedDates

  const isValidForm = isValidSelection(selectedRange, allBlockedDates, quantity)

  const errorMessage = hasUserInteracted &&
    !isValidForm && (
      <div className="alert alert-danger p-2 mb-3 mt-1 text-center" role="alert">
        Something is wrong!
      </div>
    )

  return (
    <div
      className={cx('card', cardClass, BASE_CLASS)}
      style={{
        minWidth: '340px',
        ...(!WIP_LARGE_SIZE && { maxWidth: '340px' }),
        ...cardStyle
      }}
    >
      <style>{WIP_STYLES}</style>

      {!!WIP_LARGE_SIZE && (
        <style>{`
        .rdrCalendarWrapper, .rdrDateRangeWrapper {font-size: 14px; }
      `}</style>
      )}

      <div className="card-header">
        <h5 className="card-title d-inline-flex mr-3 mb-0">Add to order</h5>
        <p className="card-text d-inline-flex">{modelData.name}</p>
      </div>
      <div className="card-body px-2 px-sm-3 py-3 py-sm-4">
        <div className="form-row">
          <div className="form-group form-group-sm col-4">
            <label>
              Quantity{' '}
              <input
                className={cx('form-control', { 'is-invalid': quantity < 1 })}
                type="number"
                required
                min="1"
                value={quantity}
                onChange={e => {
                  setQuantity(e.target.value)
                  setHasUserInteracted(true)
                }}
              />
            </label>
          </div>
          <div className="form-group form-group-sm col-8 ">
            <label className="w-100">
              Inventory Pool
              <select
                className="custom-select custom-select-sm"
                value={selectedPoolId}
                onChange={e => setSelectedPoolId(e.target.value)}
              >
                {inventoryPools.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name} (max. XXX)
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {errorMessage}

        <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
          <DateRange
            editableDateInputs={true}
            onChange={item => {
              setSelectedRange(item.selection)
              setHasUserInteracted(true)
            }}
            moveRangeOnFirstSelection={false}
            direction="vertical"
            months={numMonths}
            className="m-0"
            scroll={{
              enabled: true,
              monthHeight: WIP_LARGE_SIZE ? 278 : undefined
            }}
            //
            ranges={[selectedRange]}
            //
            minDate={today}
            maxDate={df.min([maxDateLoaded, maxDateTotal])}
            disabledDates={blockedDates}
            disabledStartDates={blockedStartDates}
            disabledEndDates={blockedEndDates}
            //
            weekStartsOn={1}
            //
            onShownDateChange={date =>
              handleShownDateChange(date, maxDateLoaded, maxDateTotal, numMonths, onLoadMoreFuture)
            }
            isLoadingFuture={isLoadingFuture}
          />
        </div>
      </div>
      <div className="card-footer">
        <button
          type="submit"
          href="#"
          className="btn btn-primary"
          disabled={!isValidForm}
          onClick={e => {
            e.preventDefault()
            onSubmit({
              startDate: selectedRange.startDate,
              endDate: selectedRange.endDate,
              quantity,
              poolId: selectedPoolId
            })
          }}
        >
          Add
        </button>
        <button type="button" href="#" className="btn btn-link">
          Cancel
        </button>
        {showClearDates && (
          <button type="button" href="#" className="btn btn-link" onClick={clearForm}>
            Clear
          </button>
        )}
      </div>
    </div>
  )
}

const modelDataPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  availability: PropTypes.arrayOf(
    PropTypes.shape({
      inventoryPool: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
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
  // /** minimum rental duration expressed as "nights between pickup and return" */
  // minimumNights: PropTypes.number,
  /** earliest date that can be selected or navigated to */
  minDateTotal: PropTypes.instanceOf(Date).isRequired,
  /** earliest date for which data was loaded. NOTE: navigating further into past is NOT supported! */
  minDateLoaded: PropTypes.instanceOf(Date).isRequired,
  /** latest date that can be selected or navigated to */
  maxDateTotal: PropTypes.instanceOf(Date),
  /** Latest date for which data has be loaded. Navigating further will trigger "onLoadMoreFuture" callback */
  maxDateLoaded: PropTypes.instanceOf(Date).isRequired,
  /** callback, when more data needs to be loaded. arguments: `{date}` */
  onLoadMoreFuture: PropTypes.func.isRequired,
  /** true if data is currently beeing feched for future dates (e.g. after the current `maxDateLoaded`) */
  isLoadingFuture: PropTypes.bool.isRequired,
  /** date that is initially shown */
  initialStartDate: PropTypes.instanceOf(Date),
  /** availabilty and visits info from API */
  modelData: modelDataPropType.isRequired,
  /** callback, submits user selection. arguments: `{startDate, endDate, quantity, poolId}` */
  onSubmit: PropTypes.func.isRequired
}

function handleShownDateChange(newDate, maxDateLoaded, maxDateTotal, numMonths, callback) {
  if (!f.isFunction(callback)) return false
  const targetDate = df.min([df.addMonths(df.endOfMonth(newDate), numMonths * 3), maxDateTotal])
  if (df.isAfter(targetDate, maxDateLoaded)) callback({ date: targetDate })
}

function getAvailabilityByDateAndPool(modelData) {
  if (!modelData) return {}
  return f.fromPairs(
    f.map(modelData.availability, abp => [abp.inventoryPool.id, f.fromPairs(abp.dates.map(i => [i.date, i]))])
  )
}

function getByDay(dateList, date) {
  if (f.isArray(dateList)) return f.find(dateList, day => df.isSameDay(day, date))
  if (f.isObject(dateList)) return dateList[df.format(date, 'yyyy-MM-dd')]
  throw TypeError
}

function calcAllBlockedDates(availabilityByDate, wantedQuantity = 1) {
  const blockedDates = []
  const blockedStartDates = []
  const blockedEndDates = []
  Object.keys(availabilityByDate).forEach(date => {
    const day = df.parseISO(date)
    const dat = availabilityByDate[date]
    if (!dat || dat.quantity < wantedQuantity) blockedDates.push(day)
    if (dat.startDateRestriction) blockedStartDates.push(day)
    if (dat.endDateRestriction) blockedEndDates.push(day)
  })
  return { blockedDates, blockedStartDates, blockedEndDates }
}

function isValidSelection(
  { startDate, endDate },
  { blockedDates, blockedStartDates, blockedEndDates },
  wantedQuantity
) {
  if (!df.isValid(startDate) || !df.isValid(endDate)) return false

  if (getByDay(blockedStartDates, startDate)) return false
  if (getByDay(blockedEndDates, endDate)) return false

  if (df.isSameDay(startDate, endDate)) {
    return !getByDay(blockedDates, startDate)
  } else {
    if (df.isBefore(endDate, startDate)) return false // we get this from calendar sometime, need to check or interval throws RangeError!)
    if (f.isEmpty(blockedDates)) return true // dont iterate over interval if nothing is blocked!
    return !df
      .eachDayOfInterval({ start: df.startOfDay(startDate), end: df.startOfDay(endDate) })
      .some(date => getByDay(blockedDates, startDate))
  }
}
