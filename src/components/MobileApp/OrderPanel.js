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
// NOTE: only import our supported langs to keep the bundle small (do not rely on bundling magic like "tree shaking" or "dead code elimination")
import { de as DateFnsLocaleDE } from 'date-fns/locale'
import { translate as t } from '../../lib/translate'
import { Let } from '../Util'
import Section from './DesignComponents/Section'
import MinusPlusControl from './DesignComponents/MinusPlusControl'
import DateRangePicker from './DesignComponents/DateRangePicker'
import Stack from './DesignComponents/Stack'
import Warning from './DesignComponents/Warning'

const noop = () => {}
// NOTE: locale 'en' is built-in, so it does not need to and can not be selected
const locales = { de: DateFnsLocaleDE }

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
  userDelegations,
  initialUserDelegationId,
  userDelegationCanBeChanged = true,
  onUserDelegationChange = noop,
  //
  onSubmit = noop,
  locale,
  txt = {}
}) => {
  const today = startOfDay(new Date())
  const minDate = minDateTotal ? startOfDay(minDateTotal) : today
  const maxDate = maxDateTotal ? startOfDay(maxDateTotal) : addMonths(minDate, 20 * 12)

  const [quantity, setQuantity] = useState(initialQuantity)
  const [selectedPoolId, setSelectedPoolId] = useState(initialInventoryPoolId || f.get(inventoryPools, '0.id'))
  const [selectedUserDelegationId, setSelectedUserDelegationId] = useState(initialUserDelegationId)

  const [selectedRange, setSelectedRange] = useState({
    startDate: initialStartDate ? startOfDay(initialStartDate) : today,
    endDate: initialEndDate ? startOfDay(initialEndDate) : today
  })

  const availabilityByDateAndPool = getAvailabilityByDateAndPool(modelData)
  const allBlockedDates = calcAllBlockedDates(availabilityByDateAndPool[selectedPoolId], quantity)
  const { blockedDates, blockedStartDates, blockedEndDates } = allBlockedDates

  const currentLocale = typeof locale === 'string' ? locales[locale.split('-')[0]] : locale
  // eslint-disable-next-line no-console
  if (!locale) console.warn(`Could not find locale date for '${locale}'!`)
  const { label } = txt

  function validate() {
    return validateSelection(selectedRange, { minDate, maxDate }, allBlockedDates, quantity, locale, txt.validate)
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
            {f.map(inventoryPools, ({ id, name, totalBorrowableQuantity }) => (
              <option key={id} value={id}>
                {t(label, 'pool-max-amount', locale, { pool: name, amount: totalBorrowableQuantity })}
              </option>
            ))}
          </select>
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
              <Warning className="text-muted">
                {t(txt.validate, 'user-delegation-cant-be-changed-active-cart', locale)}
              </Warning>
            )}
          </Section>
        )}
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
                  disabledDates={blockedDates}
                  disabledStartDates={blockedStartDates}
                  disabledEndDates={blockedEndDates}
                  locale={currentLocale}
                  txt={{ from: t(label, 'from', locale), until: t(label, 'until', locale) }}
                />
              </fieldset>
              {validationError && <Warning>{validationError}</Warning>}
            </Section>
          )}
        </Let>
      </Stack>
    </form>
  )
}

OrderPanel.displayName = 'OrderPanel'
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
  /** callback when the wanted quantity is changed */
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
  /** callback, when selected pool changes */
  onInventoryPoolChange: PropTypes.func,

  /** list of user delegations for selecting */

  userDelegations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  /** initially selected user delegation */
  initialUserDelegationId: PropTypes.string,
  /** set if user delegation can be changed or not */
  userDelegationCanBeChanged: PropTypes.bool,
  /** callback, when selected user delegation changes */
  onUserDelegationChange: PropTypes.func,

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

function validateSelection(
  { startDate, endDate },
  { minDate, maxDate },
  { blockedDates, blockedStartDates, blockedEndDates },
  wantedQuantity,
  locale,
  txt = {}
) {
  wantedQuantity = parseInt(wantedQuantity, 10)
  if (Number.isNaN(wantedQuantity) || wantedQuantity < 1) {
    return t(txt['missing-quantity'], locale)
  }

  if (!isValid(startDate)) {
    return t(txt, 'invalid-start-date', locale)
  }
  if (!isValid(endDate)) {
    return t(txt, 'invalid-end-date', locale)
  }
  if (isBefore(endDate, startDate)) {
    return t(txt, 'start-after-end', locale)
  }

  if (endDate > maxDate) {
    return t(txt, 'end-date-to-late', locale, { maxDate })
  }
  if (startDate < minDate) {
    return t(txt, 'start-date-to-early', locale, { minDate })
  }

  if (getByDay(blockedStartDates, startDate)) {
    return t(txt, 'pool-closed-at-start-date', locale, { startDate })
  }
  if (getByDay(blockedEndDates, endDate)) {
    return t(txt, 'pool-closed-at-end-date', locale, { endDate })
  }

  if (!f.isEmpty(blockedDates)) {
    if (isSameDay(startDate, endDate)) {
      if (getByDay(blockedDates, startDate)) {
        return t(txt, 'quantity-to-large-at-day', locale, { startDate })
      }
    } else {
      if (eachDayOfInterval({ start: startDate, end: endDate }).some(date => getByDay(blockedDates, date))) {
        return t(txt, 'quantity-to-large-in-range', locale, {})
      }
    }
  }
}
