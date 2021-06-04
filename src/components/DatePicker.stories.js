// import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import cx from 'classnames'
import * as df from 'date-fns'

import DatePicker, { formatDateForInput } from './DatePicker'

const NOW = new Date()

export default {
  title: 'Components/DatePicker',
  component: DatePicker
}

// eslint-disable-next-line react/display-name
const makeBaseStory = ({ initialValue, onlyFuture, wasValidated, ...props }) => () => {
  const [selectedDate, setSelectedDate] = useState(initialValue)
  //
  const onChange = event => {
    setSelectedDate(event.target.value)
  }

  return (
    <div>
      <div className={cx('form-group', { 'was-validated': wasValidated })}>
        <label>{'Input to simulate "app state" for Controlled Input'}</label>

        <input
          type="text"
          required
          value={selectedDate}
          onChange={onChange}
          className="form-control"
          months={1}
          minDate={onlyFuture ? 'now' : null}
          {...props}
        />

        <small className="form-text text-muted">
          selected date: <samp>{JSON.stringify(selectedDate)}</samp>
        </small>
      </div>

      <div className={cx('form-group', { 'was-validated': wasValidated })}>
        <label>DatePicker (Controlled Input)</label>

        <DatePicker
          required
          value={selectedDate}
          onChange={onChange}
          className="m-auto"
          displayMode="date"
          showPreview={false}
          months={1}
          minDate={onlyFuture ? 'now' : null}
          {...props}
        />

        <small className="form-text text-muted">
          selected date: <samp>{JSON.stringify(selectedDate)}</samp>
        </small>
      </div>
    </div>
  )
}

export const datepicker_future_no_value = makeBaseStory({ initialValue: undefined, onlyFuture: true })
datepicker_future_no_value.storyName = 'Datepicker, no initial value, only future dates'

export const datepicker_future_no_value_validation = makeBaseStory({
  initialValue: undefined,
  onlyFuture: true,
  wasValidated: true
})
datepicker_future_no_value_validation.storyName = 'Datepicker, no initial value, show validation, only future dates'

export const datepicker_with_value_disabled = makeBaseStory({
  initialValue: formatDateForInput(df.addYears(NOW, 5)),
  disabled: true
})
datepicker_with_value_disabled.storyName = 'Datepicker, with initial value, disabled'

export const datepicker_future_with_value = makeBaseStory({
  initialValue: formatDateForInput(df.addYears(NOW, 5)),
  onlyFuture: true
})
datepicker_future_with_value.storyName = 'Datepicker, with initial value, only future dates'

export const datepicker_future_with_value_validation = makeBaseStory({
  initialValue: formatDateForInput(df.addYears(NOW, 5)),
  onlyFuture: true,
  wasValidated: true
})
datepicker_future_with_value_validation.storyName = 'Datepicker, with initial value, show validation, only future dates'
