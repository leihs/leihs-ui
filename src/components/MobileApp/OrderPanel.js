import React, { useEffect, useState } from 'react'
import f from 'lodash'
import {
  startOfDay,
  addMonths,
  min,
  endOfMonth,
  isAfter,
  parseISO,
  isValid,
  isBefore,
  eachDayOfInterval,
  addDays,
  isSameDay,
  startOfMonth
} from 'date-fns'
// NOTE: only import our supported langs to keep the bundle small (do not rely on bundling magic like "tree shaking" or "dead code elimination")
import { de as DateFnsLocaleDE, enGB as DateFnsLocaleEN } from 'date-fns/locale'
import { translate as t } from '../../lib/translate'
import { Let } from '../Util'
import Section from './DesignComponents/Section'
import MinusPlusControl from './DesignComponents/MinusPlusControl'
import DateRangePicker from './DesignComponents/DateRangePicker'
import Stack from './DesignComponents/Stack'
import Warning from './DesignComponents/Warning'
import orderPanelPropTypes from './OrderPanelPropTypes'

const noop = () => {}
const locales = { de: DateFnsLocaleDE, en: DateFnsLocaleEN }

const OrderPanel = ({
  modelData,
  //
  now,
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
  userDelegations,
  initialUserDelegationId,
  userDelegationCanBeChanged = true,
  onUserDelegationChange = noop,
  //
  onValidate = noop,
  onSubmit = noop,
  locale,
  txt = {}
}) => {
  const currentLocale = typeof locale === 'string' ? locales[locale.split('-')[0]] : locale
  // eslint-disable-next-line no-console
  if (!locale) console.warn(`Could not find locale date for '${locale}'!`)
  const { label } = txt

  const today = startOfDay(now ? now : new Date())
  const maxDate = maxDateTotal ? startOfDay(maxDateTotal) : addMonths(today, 20 * 12)

  const [quantity, setQuantity] = useState(initialQuantity)
  const [selectedPoolId, setSelectedPoolId] = useState(
    initialInventoryPoolId || f.get(inventoryPools, '0.id') || 'NO_POOLS'
  )
  const [selectedUserDelegationId, setSelectedUserDelegationId] = useState(initialUserDelegationId)

  const [selectedRange, setSelectedRange] = useState({
    startDate: initialStartDate ? startOfDay(initialStartDate) : today,
    endDate: initialEndDate ? startOfDay(initialEndDate) : addDays(today, 1)
  })

  // State depending on the input states (e.g. validation result)
  const [dependentState, setDependentState] = useState()
  useEffect(() => {
    // Make sure the selected pool is in list (otherwise fill-in a surrogate)
    const poolFromList = inventoryPools.find(x => x.id === selectedPoolId)
    const selectedPool = poolFromList || {
      id: selectedPoolId,
      name: t(txt.validate, 'unknown-pool', locale),
      isSurrogate: true
    }
    const selectablePools = poolFromList ? inventoryPools : [selectedPool, ...inventoryPools]

    // Get availability data for selected pool
    const { availability } = modelData
    const poolAvailability = (() => {
      const tmp = availability.find(x => x.inventoryPool.id === selectedPool.id)
      if (!tmp) {
        return { inventoryPool: selectedPool, dates: [] }
      }
      return {
        ...tmp,
        dates: tmp.dates.map(x => ({
          ...x,
          parsedDate: parseISO(x.date)
        }))
      }
    })()

    // Extract data for DateRangePicker
    const { disabledDates, disabledStartDates, disabledEndDates, minDate } = getDateRangePickerConstraints(
      poolAvailability,
      today,
      quantity
    )

    // Validation
    const validationResult = validate(selectedPool, poolAvailability)

    setDependentState({
      selectablePools,
      selectedPool,
      poolAvailability,
      disabledDates,
      disabledStartDates,
      disabledEndDates,
      minDate,
      validationResult
    })

    onValidate(validationResult.isValid)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- FIXME: look into this, its either a real problem or a linter bug
  }, [
    quantity,
    selectedPoolId,
    selectedUserDelegationId,
    selectedRange,
    modelData,
    maxDateTotal,
    maxDateLoaded,
    inventoryPools,
    userDelegations,
    locale
  ])

  // Validation
  function validate(selectedPool, poolAvailability) {
    const poolError = validatePool(selectedPool, locale, txt.validate)
    if (poolError) {
      return { poolError }
    }
    const dateRangeErrors = validateDateRange(
      selectedRange,
      today,
      maxDate,
      poolAvailability,
      quantity,
      locale,
      txt.validate
    )
    if (dateRangeErrors && dateRangeErrors.length > 0) {
      return { dateRangeErrors: [...dateRangeErrors] }
    }
    return { isValid: true }
  }

  // Event handlers

  function submit(e) {
    e.preventDefault()
    const validationResult = validate(dependentState.selectedPool, dependentState.poolAvailability)
    if (validationResult.isValid) {
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

  function changeUserDelegation(e) {
    const id = e.target.value
    setSelectedUserDelegationId(id)
    onUserDelegationChange(stateForCallbacks())
  }

  function changeDateRange(range) {
    setSelectedRange(range)
    onDatesChange(stateForCallbacks())
  }

  const stateForCallbacks = () => ({
    startDate: selectedRange.startDate,
    endDate: selectedRange.endDate,
    quantity,
    poolId: selectedPoolId,
    delegationId: selectedUserDelegationId
  })

  function changeShownDate(newDate) {
    const targetDate = min([addMonths(endOfMonth(newDate), 3), maxDate])
    if (isAfter(targetDate, maxDateLoaded)) {
      onShownDateChange({ date: targetDate })
    }
  }

  if (!dependentState) {
    return null
  }
  const { selectablePools, disabledDates, disabledStartDates, disabledEndDates, minDate, validationResult } =
    dependentState

  return (
    <form onSubmit={submit} noValidate className="was-validated" autoComplete="off" id="order-dialog-form">
      <Stack space="4">
        <Section>{modelData.name}</Section>
        <Section title={t(label, 'quantity', locale)} collapsible>
          <label htmlFor="quantity" className="visually-hidden">
            {t(label, 'quantity', locale)}
          </label>
          <MinusPlusControl
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={changeQuantity}
            min={1}
            txt={{ minus: t(label, 'minus', locale), plus: t(label, 'plus', locale) }}
          />
        </Section>
        <Section title={t(label, 'pool', locale)} collapsible>
          <label htmlFor="pool-id" className="visually-hidden">
            {t(label, 'pool', locale)}
          </label>
          <select
            name="pool-id"
            id="pool-id"
            value={selectedPoolId}
            onChange={changeInventoryPool}
            className="form-select"
          >
            {f.map(selectablePools, ({ id, name, totalBorrowableQuantity }) => (
              <option key={id} value={id}>
                {totalBorrowableQuantity
                  ? t(label, 'pool-max-amount', locale, { pool: name, amount: totalBorrowableQuantity })
                  : name}
              </option>
            ))}
          </select>
          {validationResult.poolError && <Warning className="mt-2">{validationResult.poolError}</Warning>}
        </Section>
        {userDelegations && userDelegations.length > 1 && (
          <Section title={t(label, 'user-delegation', locale)} collapsible>
            <label htmlFor="user-delegation-id" className="visually-hidden">
              {t(label, 'user-delegation', locale)}
            </label>
            <select
              name="user-delegation-id"
              id="user-delegation-id"
              value={selectedUserDelegationId}
              onChange={changeUserDelegation}
              className="form-select"
              disabled={!userDelegationCanBeChanged}
            >
              {userDelegations.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            {!userDelegationCanBeChanged && (
              <div className="text-muted fw-light mt-1">
                {t(txt.validate, 'user-delegation-cant-be-changed-active-cart', locale)}
              </div>
            )}
          </Section>
        )}
        {!validationResult.poolError && (
          <Let title={t(label, 'timespan', locale)}>
            {({ title }) => (
              <Section title={title} collapsible>
                <fieldset>
                  <legend className="visually-hidden">{title}</legend>
                  <DateRangePicker
                    selectedRange={selectedRange}
                    onChange={changeDateRange}
                    onShownDateChange={changeShownDate}
                    maxDateLoaded={maxDateLoaded}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disabledDates}
                    disabledStartDates={disabledStartDates}
                    disabledEndDates={disabledEndDates}
                    locale={currentLocale}
                    txt={{ from: t(label, 'from', locale), until: t(label, 'until', locale) }}
                    className={validationResult.dateRangeErrors ? 'invalid-date-range' : ''}
                  />
                </fieldset>
                {validationResult.dateRangeErrors &&
                  validationResult.dateRangeErrors.map((msg, i) => (
                    <React.Fragment key={i}>
                      <Warning className="mt-2">{msg}</Warning>
                    </React.Fragment>
                  ))}
              </Section>
            )}
          </Let>
        )}
      </Stack>
    </form>
  )
}

OrderPanel.displayName = 'OrderPanel'
OrderPanel.propTypes = orderPanelPropTypes
export default OrderPanel

function getDateRangePickerConstraints(poolAvailability, today, wantedQuantity) {
  const { dates, inventoryPool } = poolAvailability
  const { reservationAdvanceDays } = inventoryPool
  const minBorrowDate = addDays(today, reservationAdvanceDays || 0)
  const getDates = filter => [...dates.filter(filter).map(x => x.parsedDate)]
  return {
    disabledDates: getDates(x => x.quantity < wantedQuantity && x.parsedDate >= today),
    disabledStartDates: getDates(x => x.startDateRestriction || x.parsedDate < minBorrowDate),
    disabledEndDates: getDates(x => x.endDateRestriction && x.parsedDate >= minBorrowDate),
    minDate: startOfMonth(today) // (NOT `minBorrowDate`, since RDR would mark them with `rdrDayDisabled`, making them look like overbooked)
  }
}

function getByDay(dateList, date) {
  return dateList.find(x => isSameDay(x.parsedDate, date))
}

function validatePool(inventoryPool, locale, txt) {
  if (inventoryPool.userHasNoAccess) {
    return t(txt, 'no-pool-access', locale)
  }
  if (inventoryPool.userIsSuspended) {
    return t(txt, 'pool-suspension', locale)
  }
  if (!inventoryPool.totalBorrowableQuantity) {
    return t(txt, 'item-not-available-in-pool', locale)
  }
  if (inventoryPool.isSurrogate) {
    return t(txt, 'unknown-pool', locale)
  }
}

function validateDateRange(selectedRange, today, maxDate, poolAvailability, wantedQuantity, locale, txt) {
  const { startDate, endDate } = selectedRange
  const { dates, inventoryPool } = poolAvailability
  const { reservationAdvanceDays, maximumReservationTime } = inventoryPool

  const basicValidityMessage = (() => {
    // Ensure that a valid quantity is given (the quantity field also has its own validator, so this is an exceptional case)
    wantedQuantity = parseInt(wantedQuantity, 10)
    if (Number.isNaN(wantedQuantity) || wantedQuantity < 1) {
      return t(txt, 'missing-quantity', locale)
    }

    // Formal validity of dates (DateRangePicker guarantees for that, so this is an exceptional case)
    if (!isValid(startDate)) {
      return t(txt, 'invalid-start-date', locale)
    }
    if (!isValid(endDate)) {
      return t(txt, 'invalid-end-date', locale)
    }
    if (isBefore(endDate, startDate)) {
      return t(txt, 'start-after-end', locale)
    }
  })()

  if (basicValidityMessage) {
    return [basicValidityMessage]
  }

  // Start date
  const minBorrowDate = addDays(today, reservationAdvanceDays || 0)
  const isOneDayPeriod = isSameDay(startDate, endDate)
  const startDateMessage = (() => {
    // Future-only
    if (startDate < today) {
      return t(txt, 'start-date-in-past', locale)
    } else {
      if (startDate < minBorrowDate) {
        return t(txt, 'start-date-not-before', locale, { days: reservationAdvanceDays })
      }
    }

    // Closed pool
    const txtPoolClosed = isOneDayPeriod ? 'pool-closed-at-start-and-end-date' : 'pool-closed-at-start-date'
    const startDateInfo = getByDay(dates, startDate)
    if (startDateInfo) {
      if (startDateInfo.startDateRestriction === 'CLOSE_TIME') {
        return t(txt, txtPoolClosed, locale, { startDate })
      } else if (startDateInfo.startDateRestriction === 'VISITS_CAPACITY_REACHED') {
        return t(txt, txtPoolClosed, locale, { startDate }) + t(txt, 'pool-closed-max-visits', locale)
      } else if (startDateInfo.startDateRestriction === 'BEFORE_EARLIEST_POSSIBLE_PICK_UP_DATE') {
        // (This case should have been prevented by the future-only rule above)
        return t(txt, 'start-date-not-before', locale, { days: reservationAdvanceDays })
      }
    }
  })()

  const endDateMessage = (() => {
    if (isOneDayPeriod) return // (because then the error is already mentioned in startDateMessage)

    // Max date
    if (endDate > maxDate) {
      return t(txt, 'end-date-too-late', locale, { maxDate })
    }

    // Closed pool
    if (endDate < minBorrowDate) {
      // (report issues only for non-past dates)
      return
    }
    const endDateInfo = getByDay(dates, endDate)
    if (endDateInfo) {
      if (endDateInfo.endDateRestriction === 'CLOSE_TIME') {
        return t(txt, 'pool-closed-at-end-date', locale, { endDate })
      } else if (endDateInfo.endDateRestriction === 'VISITS_CAPACITY_REACHED') {
        return t(txt, 'pool-closed-at-end-date', locale, { endDate }) + t(txt, 'pool-closed-max-visits', locale)
      }
    }
  })()

  // Available quantity
  const availabilityMessage = (() => {
    const noAvailDates = [
      ...eachDayOfInterval({ start: startDate, end: endDate }).filter(d => {
        if (d < minBorrowDate) {
          // (report issues only for non-past dates)
          return false
        }
        const dateInfo = getByDay(dates, d)
        return dateInfo && dateInfo.quantity < wantedQuantity
      })
    ]
    if (noAvailDates.length > 0) {
      if (noAvailDates.length === 1) {
        const startDate = noAvailDates[0]
        return t(txt, 'quantity-to-large-at-day', locale, { startDate })
      } else {
        return t(txt, 'quantity-to-large-in-range', locale, {})
      }
    }
  })()

  // Max reservation time
  const maximumReservationTimeMessage = (() => {
    if (maximumReservationTime) {
      const maxEndDate = addDays(startDate, maximumReservationTime - 1)
      if (endDate > maxEndDate) {
        return t(txt, 'maximum-reservation-time', locale, { days: maximumReservationTime })
      }
    }
  })()

  return [...[startDateMessage, endDateMessage, availabilityMessage, maximumReservationTimeMessage].filter(x => !!x)]
}
