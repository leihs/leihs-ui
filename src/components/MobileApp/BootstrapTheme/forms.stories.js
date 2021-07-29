import React, { useState } from 'react'
import cx from 'classnames'

export default {
  title: 'MobileApp/BootstrapTheme/Forms'
}

export const forms = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false)

  function submit(e) {
    e.preventDefault()
    setWasSubmitted(true)
  }
  return (
    <form
      onSubmit={submit}
      noValidate={true}
      className={cx('d-flex flex-column gap-3', { 'was-validated': wasSubmitted })}
      autoComplete="off"
    >
      <label>
        <div className="form-label">Your name (required)</div>
        <input type="text" name="name" className="form-control" required />
        <div className="invalid-feedback">Please enter your name</div>
      </label>
      <label>
        <div className="form-label">Your phone number (not required)</div>
        <input type="text" name="phone" className="form-control" />
      </label>
      <label className="form-check">
        <input type="checkbox" name="accept" className="form-check-input" required />
        <span className="form-check-label">I accept</span>
        <div className="invalid-feedback invalid-feedback-icon">Please accept</div>
      </label>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>{' '}
        (click to validate)
      </div>
    </form>
  )
}
