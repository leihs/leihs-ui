import React from 'react'
import cx from 'classnames'
import ActionButton from './ActionButton'

export default function MinusPlusControl({ className, number, onChange }) {
  const value = isNaN(number) ? '' : number

  function decrement(e) {
    if (!value) {
      onChange(1)
      return
    }
    if (number > 1) {
      onChange(number - 1)
    }
  }
  function increment(e) {
    if (!value) {
      onChange(1)
      return
    }
    onChange(number + 1)
  }
  function directInput(e) {
    const v = parseInt(e.target.value, 10)
    onChange(v)
  }

  return (
    <div className="form-row">
      <div className="col">
        <ActionButton className="action-button--lighter" onClick={decrement}>
          Minus
        </ActionButton>
      </div>
      <div className="col">
        <input
          type="text"
          value={value}
          className={cx('form-control', { 'is-invalid': !value }, className)}
          onChange={directInput}
        />
      </div>
      <div className="col">
        <ActionButton className="action-button--lighter" onClick={increment}>
          Plus
        </ActionButton>
      </div>
    </div>
  )
}
