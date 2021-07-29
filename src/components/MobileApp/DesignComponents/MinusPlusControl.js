import React, { useEffect, useRef } from 'react'
import cx from 'classnames'

export default function MinusPlusControl({ className, number, onChange, min, max, ...restProps }) {
  const inputRef = useRef()
  const minusBtnRef = useRef()
  const plusBtnRef = useRef()
  const lastNum = useRef(NaN) // as a base for inc/decrement
  const msgRef = useRef()

  const defaultNumber = isNaN(min) ? 1 : min

  useEffect(() => {
    // PATCH to prevent crash in DOM-less tests
    if (!inputRef.current) return
    update(number)
  }, [number, min, max])

  function update(num) {
    if (isNaN(num)) {
      inputRef.current.value = ''
      setValidity('Zahl eingeben')
    } else {
      inputRef.current.value = num
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

  function emitChange(num) {
    onChange && onChange(num)
  }

  // event handlers:

  function add(summand) {
    const num = isNaN(lastNum.current) ? defaultNumber : lastNum.current + summand
    update(num)
    emitChange(num)
  }

  function blur(e) {
    const num = parseInt(e.target.value, 10)
    update(num)
    emitChange(num)
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
          Minus
        </button>
      </div>
      <div className="col-4">
        <input
          className={cx('form-control text-center', className)}
          {...restProps}
          ref={inputRef}
          type="text"
          inputMode="numeric"
          onBlur={blur}
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
          Plus
        </button>
      </div>
    </div>
  )
}
