import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function InputWithClearButton({ onClearClick, className, ...restProps }) {
  return (
    <div className="input-group">
      <input type="text" className={cx('form-control border-right-0', className)} {...restProps} />
      <div className="input-group-append">
        <button
          className="input-group-text bg-white border-left-0"
          type="button"
          title="Eingabe löschen"
          onClick={onClearClick}
          tabIndex="-1"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}
