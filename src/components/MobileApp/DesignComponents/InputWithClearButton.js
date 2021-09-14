import React, { useRef } from 'react'
import cx from 'classnames'
import Icon, { iconCross } from './Icons'
import PropTypes from 'prop-types'

export default function InputWithClearButton({
  className,
  onChange,
  inputComponent: InputComponent = 'input',
  ...restProps
}) {
  const inputRef = useRef()
  function clearClick(e) {
    // FIXME: better trigger an "real" onChange directly on the input?
    inputRef.current.value = ''
    onChange && onChange({ ...e, target: inputRef.current })
  }
  function buttonMouseDown(e) {
    inputRef.current.focus()
    e.preventDefault() // (so the button does not get focus)
  }
  return (
    <div className="position-relative">
      <InputComponent
        ref={inputRef}
        type="text"
        className={cx('form-control selectish-feedback-icon', className)}
        onChange={onChange}
        {...restProps}
      />
      <button
        className="btn position-absolute"
        type="button"
        title="Eingabe löschen"
        onClick={clearClick}
        onMouseDown={buttonMouseDown}
        tabIndex="-1"
        style={{ top: 0, right: 0 }}
      >
        <Icon icon={iconCross} />
      </button>
    </div>
  )
}

InputWithClearButton.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  /** component to use instead of the native 'input' component if needed (e.g. for Reagent) */
  inputComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
}
