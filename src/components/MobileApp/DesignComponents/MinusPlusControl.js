import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const defaultTxt = { minus: 'Minus', plus: 'Plus' }

export default function MinusPlusControl({
  className,
  value,
  onChange,
  min,
  max,
  inputComponent: InputComponent = 'input',
  txt = defaultTxt,
  ...restProps
}) {
  const inputRef = useRef()
  const minusBtnRef = useRef()
  const plusBtnRef = useRef()
  const lastNum = useRef(NaN) // as a base for inc/decrement
  const msgRef = useRef()

  const defaultNumber = isNaN(min) ? 1 : min

  useEffect(() => {
    if (!inputRef.current) return // (PATCH to prevent crash in DOM-less tests)

    update(value)
  }, [value, min, max])

  function update(value) {
    value = value === undefined ? '' : value
    const num = parseInt(value, 10)
    inputRef.current.value = value
    if (Number.isNaN(num)) {
      setValidity('Zahl eingeben')
    } else {
      if (!isNaN(min) && num < min) {
        setValidity(`Minimal ${min}`)
      } else if (!isNaN(max) && num > max) {
        setValidity(`Maximal ${max}`)
      } else {
        setValidity('')
      }
    }
    lastNum.current = num
    minusBtnRef.current.disabled = !isNaN(min) && num <= min ? 'disabled' : ''
    plusBtnRef.current.disabled = !isNaN(max) && num >= max ? 'disabled' : ''
  }

  function setValidity(msg) {
    inputRef.current.setCustomValidity(msg)
    msgRef.current.innerText = msg
  }

  function emitChange(value) {
    onChange && onChange(value)
  }

  // event handlers:

  function add(summand) {
    const num = isNaN(lastNum.current) ? defaultNumber : lastNum.current + summand
    update(num)
    emitChange(num)
  }

  function change(e) {
    update(e.target.value)
    emitChange(e.target.value)
  }

  function buttonMouseDown(e) {
    inputRef.current.focus()
    e.preventDefault() // (so the button does not get focus)
  }

  return (
    <div className="row g-2">
      <div className="col-4">
        <button
          ref={minusBtnRef}
          type="button"
          className="btn btn-secondary w-100"
          onClick={() => add(-1)}
          onMouseDown={buttonMouseDown}
          tabIndex="-1"
        >
          {txt.minus}
        </button>
      </div>
      <div className="col-4">
        <InputComponent
          className={cx('form-control text-center', className)}
          {...restProps}
          ref={inputRef}
          type="text"
          inputMode="numeric"
          onChange={change}
        />
        <div ref={msgRef} className="invalid-feedback"></div>
      </div>
      <div className="col-4">
        <button
          ref={plusBtnRef}
          type="button"
          className="btn btn-secondary w-100"
          onClick={() => add(1)}
          onMouseDown={buttonMouseDown}
          tabIndex="-1"
        >
          {txt.plus}
        </button>
      </div>
    </div>
  )
}

MinusPlusControl.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  /** component to use instead of the native 'input' component if needed (e.g. for Reagent) */
  inputComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
}
