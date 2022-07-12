import React, { useEffect, useState, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/dedupe'
import {
  isValid,
  isDate,
  parseISO as parseISODate,
  format as formatDate,
  isBefore,
  isAfter,
  isSameDay,
  startOfDay,
  addDays
} from 'date-fns'

import { Calendar } from '@leihs/calendar'

const DatePicker = ({
  value = '',
  required = false,
  name,
  id,
  minDate,
  maxDate,
  onChange,
  placeholder = '2001-01-01',
  disabled = false,
  months = 1,
  force = true,
  // scroll = false,
  forceValidations = false,
  errMsg = 'Please provide a valid date.'
}) => {
  const scroll = false // NOTE: does not work yet (when changing date from outside Calendar)
  const _popupcal = false
  const _restrictWidth = false
  const NOW = new Date()

  const date = value === 'now' ? NOW : parseDatefromInput(value)
  minDate = parseDatefromProp(minDate, NOW)
  maxDate = parseDatefromProp(maxDate, NOW)

  const currentValueIsValidDate =
    (date ? isValid(date) : false) &&
    (minDate ? isSameDay(minDate, date) || isBefore(minDate, date) : true) &&
    (maxDate ? isSameDay(maxDate, date) || isAfter(maxDate, date) : true)
  const currentInputIsValid = disabled || !required ? true : currentValueIsValidDate

  const inputVal = useRef(value, [value])
  const inputEl = useRef(null, [])
  const [isFocussed, setFocus] = useState(false, [])
  // const dateVal = useRef(value, [value])

  const isDateInputSupported = useMemo(checkIsDateInputBrowserSupported, [])
  const useNativeInput = force ? false : isDateInputSupported
  const isOpen = !disabled && !useNativeInput

  useEffect(
    function updateInputVal() {
      inputVal.current = value
    },
    [value]
  )
  useEffect(
    function updateInput() {
      inputEl.current && (inputEl.current.value = value)
      inputEl.current && inputEl.current.setCustomValidity(currentInputIsValid ? '' : errMsg)
    },
    [inputVal, currentValueIsValidDate, currentInputIsValid, value, required, minDate, maxDate, errMsg]
  )

  return (
    <div
      className={cx(
        'ui-datepicker custom-datepicker mb-2',
        { 'flex-grow-1': _restrictWidth },
        currentInputIsValid ? 'custom-control-mark-valid' : 'custom-control-mark-invalid'
      )}
      style={_restrictWidth ? { maxWidth: '340px' } : null}
    >
      <div className={cx('rounded', { 'shadow-sm': isOpen, 'custom-control-focussed': isFocussed })}>
        {/* NOTE: use uncontrolled input because we already attach a ref for setting the validity, adn dont want the overhead of props-to-state */}
        <input
          id={id}
          name={name}
          type={useNativeInput ? 'date' : 'text'}
          className={cx(
            'form-control',
            forceValidations && (currentInputIsValid ? 'is-valid' : 'is-invalid'),
            'custom-datepicker-textinput'
          )}
          style={isOpen ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={inputVal.current || ''}
          onChange={e => {
            const val = e.target.value
            const date = parseDatefromInput(val)
            const returnValue = isValid(date) ? val : null
            const stubEvent = { target: { value: returnValue } }
            onChange(stubEvent)
          }}
          ref={inputEl}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
        />
        {isOpen && (
          <div
            className={cx('card', {}, 'custom-datepicker-calendar-container')}
            style={{ marginTop: '-1px', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            tabIndex="-1" // NOTE: needed to make it focussable (i.e. to enable the focus/events below)
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
          >
            <Calendar
              key={date || 1} // force update shown date if changed via text input
              className={cx('m-auto rounded custom-datepicker-calendar', { 'd-none': _popupcal && !isFocussed })}
              displayMode="date"
              months={months}
              minDate={minDate}
              date={currentValueIsValidDate ? date : undefined}
              shownDate={currentValueIsValidDate ? date : undefined}
              onChange={date => {
                const returnValue = formatDateForInput(date)
                const stubEvent = { target: { value: returnValue } }
                onChange(stubEvent)
              }}
              scroll={{ enabled: scroll }}
            />
          </div>
        )}
      </div>
      {!currentInputIsValid && <div className="invalid-feedback">{errMsg}</div>}
    </div>
  )
}

export default DatePicker

DatePicker.displayName = 'FormInputs.DatePicker'

DatePicker.propTypes = {
  /** same as `HTMLInputElement` */
  value: PropTypes.string,
  /** same as `HTMLInputElement` */
  id: PropTypes.string,
  /** same as `HTMLInputElement` */
  name: PropTypes.string,
  /** same as `HTMLInputElement` */
  required: PropTypes.bool,
  /** same as `HTMLInputElement` */
  disabled: PropTypes.bool,
  /** same as `HTMLInputElement` */
  placeholder: PropTypes.string,
  /** same as `HTMLInputElement` */
  onChange: PropTypes.func.isRequired,
  /** earliest date that can be selected */
  minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf(['now', 'today', 'tomorrow'])]),
  /** latest date that can be selected */
  maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf(['now', 'today', 'tomorrow'])]),
  /** number of months the calendar should display */
  months: PropTypes.number,
  /** force custom UI (do not use native date input) */
  force: PropTypes.bool,
  // scroll = false,
  /** force display of validation state (use this instead of wrapping in bootstrap's `.was-validated`) */
  forceValidations: PropTypes.bool,
  /** error message used to indicate that no valid date has been selected */
  errMsg: PropTypes.string
}

function parseDatefromProp(prop, now) {
  if (isDate(prop)) return prop
  if (prop === 'now') return now
  if (prop === 'today') return startOfDay(now)
  if (prop === 'tomorrow') return addDays(startOfDay(now), 1)
  return parseDatefromInput(prop)
}

function parseDatefromInput(date) {
  const DATE_STRING_REGEX = /[1-2]\d\d\d-(0\d|1[0-2])-[0-3]\d/
  if (!DATE_STRING_REGEX.test(date)) return
  return parseISODate(date)
}

export function formatDateForInput(date) {
  if (!isValid(date)) return ''
  return formatDate(date, 'yyyy-MM-dd')
}

function checkIsDateInputBrowserSupported() {
  if (!(document && document.createElement)) return false
  const elem = document.createElement('input')
  elem.setAttribute('type', 'date')
  elem.value = 'test'
  return elem.type === 'date' && elem.value !== 'test'
}
