import React from 'react'

export default {
  title: 'MobileApp/Bootstrap Theme/Forms'
}

export const elements = () => {
  return (
    <>
      <h1>Forms - Elements</h1>
      <p className="text-muted">Text input field:</p>
      <div className="mb-3">
        <input type="text" name="name" className="form-control" />
      </div>
      <p className="text-muted">Select field:</p>
      <div className="mb-3">
        <select className="form-select">
          <option></option>
        </select>
      </div>
      <p className="text-muted">Checkbox:</p>
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" id="elements-checkbox" className="form-check-input" />
          <label className="form-check-label" htmlFor="elements-checkbox">
            Label
          </label>
        </div>
      </div>
    </>
  )
}

export function labels() {
  return (
    <>
      <h1>Forms - Labels</h1>
      <p className="text-muted">
        DO wire the labels with <code>for</code> (i.e. <code>htmlFor</code>)
      </p>
      <p className="text-muted">DON&apos;T nest inputs in labels</p>
      <div className="mb-3">
        <label htmlFor="field-1" className="form-label">
          Label
        </label>
        <input type="text" id="field-1" className="form-control" />
      </div>
    </>
  )
}

export function validationFeedback() {
  return (
    <>
      <h1>Forms - Validation feedback</h1>
      <p className="text-muted">(Note we do not show valid feedback, only invalid)</p>
      <p className="text-muted">Text input field:</p>
      <div className="mb-3">
        <input type="text" className="form-control is-invalid" />
      </div>
      <p className="text-muted">Select field:</p>
      <div className="mb-3">
        <select className="form-select is-invalid">
          <option></option>
          <option>a</option>
          <option>b</option>
        </select>
      </div>
      <p className="text-muted">Checkbox:</p>
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" id="elements-checkbox" className="form-check-input is-invalid" />
          <label className="form-check-label" htmlFor="elements-checkbox">
            Label
          </label>
        </div>
      </div>
      <p className="text-muted">Field with feedback text:</p>
      <div className="mb-3">
        <input type="text" name="name" className="form-control is-invalid" />
        <div className="invalid-feedback">Please enter your name</div>
      </div>
      <p className="text-muted">
        Feedback text standalone (needs an <code>i.is-invalid</code> before to get visible):
      </p>
      <div className="mb-3">
        <i className="is-invalid" />
        <div className="invalid-feedback">Please check the form inputs</div>
      </div>
      <p className="text-muted">Feedback text with an icon (proprietary extension):</p>
      <div className="mb-3">
        <i className="is-invalid" />
        <div className="invalid-feedback invalid-feedback-icon">Please check the form inputs</div>
      </div>
    </>
  )
}
