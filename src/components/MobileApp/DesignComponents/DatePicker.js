import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { format, isAfter, isBefore, isSameDay, isValid, parse } from 'date-fns'
import { Calendar } from '@leihs/calendar'
import LabelInside from './LabelInside'

export default function DatePicker({
  locale,
  value,
  onChange,
  required,
  className,
  label,
  minDate,
  maxDate,
  ...restProps
}) {
  const formatDate = date => format(date, 'P', { locale: locale })
  const parseDate = s => parse(s, 'P', new Date(), { locale: locale })

  const containerRef = useRef()
  const inputRef = useRef()

  const [calendarActive, setCalendarActive] = useState(false)
  const [wasValidated, setWasValidated] = useState(false)
  const [validDate, setValidDate] = useState(tryParseDate(value))

  function tryParseDate(stringValue) {
    if (!stringValue) return null
    const d = parseDate(stringValue)
    return isValid(d) ? d : null
  }

  function handleFocus() {
    setCalendarActive(true)
  }
  function handleBlur() {
    setWasValidated(true)
  }

  function handleChange(e) {
    setValidDate(tryParseDate(e.target.value))
    onChange(e)
  }

  function handleCalendarDateChange(d) {
    setValidDate(d)
    const stubEvent = { target: { value: formatDate(d) } }
    onChange(stubEvent)
    setCalendarActive(false)
    inputRef.current.focus()
  }

  function handleClickOutside(e) {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setCalendarActive(false)
    }
  }

  // Propagate outside-triggered value change to calendar
  useEffect(() => {
    const validDateFromProp = tryParseDate(value)
    if (!isSameDay(validDateFromProp, validDate)) {
      setValidDate(tryParseDate(value))
    }
  }, [value])

  // Hide calendar on outside-click
  useEffect(() => {
    if (document) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [])

  // Validator
  useEffect(() => {
    let msg = '' // (Note: message is not displayed in UI)
    if (value) {
      const date = parseDate(value)
      if (!isValid(date)) {
        msg = 'unparseable'
      } else if (minDate && isBefore(date, minDate) && !isSameDay(date, minDate)) {
        msg = 'before minDate'
      } else if (maxDate && isAfter(date, maxDate) && !isSameDay(date, maxDate)) {
        msg = 'after maxDate'
      }
    }
    inputRef.current && inputRef.current.setCustomValidity(msg)
  }, [value])

  return (
    <div
      className={cx('date-picker', { 'was-validated': wasValidated, 'date-picker--calendar-active': calendarActive })}
      ref={containerRef}
    >
      <LabelInside>
        <input
          ref={inputRef}
          className={cx('form-control calendar-indicator', className)}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          autoComplete="off"
          {...restProps}
        />
        {label}
      </LabelInside>
      <div className="leihs-calendar rounded-bottom">
        <Calendar
          key={validDate || 1} // force update shown date if changed via text input
          displayMode="date"
          className="m-0 w-100 rounded-bottom bg-light-shade"
          locale={locale}
          showDateDisplay={false}
          date={validDate}
          shownDate={validDate}
          onChange={handleCalendarDateChange}
          minDate={minDate}
          maxDate={maxDate}
          showMonthAndYearPickers={false}
        />
      </div>
    </div>
  )
}

DatePicker.propTypes = {
  /** Locale for formatting and parsing of date string, e.g. `locale={de}` when `import { de } from 'date-fns/locale'` */
  locale: PropTypes.object,
  /** same as `HTMLInputElement` */
  value: PropTypes.string,
  /** same as `HTMLInputElement` */
  onChange: PropTypes.func.isRequired,
  /** same as `HTMLInputElement` */
  required: PropTypes.bool,
  /** the label (shown inside the input field) */
  label: PropTypes.node,
  /** same as `HTMLInputElement` */
  className: PropTypes.string,
  /** earliest date that can be selected */
  minDate: PropTypes.instanceOf(Date),
  /** latest date that can be selected */
  maxDate: PropTypes.instanceOf(Date)
}
