import React, { useState } from 'react'
import cx from 'classnames'
import MinusPlusControl from './MinusPlusControl'

export default {
  title: 'MobileApp/Design Components/Form Controls/MinusPlusControl',
  component: MinusPlusControl
}

export const minusPlusControl = () => {
  const [number, setNumber] = useState(1)
  const [dirty, setDirty] = useState(false)

  function change(number) {
    setNumber(number)
    setDirty(true)
  }

  return (
    <div className={cx({ 'was-validated': dirty })}>
      <h1>MinusPlusControl</h1>
      <label htmlFor="quantity" className="form-label">
        Quantity (1 to 10)
      </label>
      <MinusPlusControl number={number} onChange={change} required={true} min={1} max={10} id="quantity" />
      {stateDebugging(number, change)}
    </div>
  )
}
minusPlusControl.storyName = 'MinusPlusControl'

export function restProps() {
  return (
    <div>
      <h1>MinusPlusControl</h1>
      <p className="text-muted">
        The attributes of the input field can be set using restProps (useful e.g. to set name or id)
      </p>
      <MinusPlusControl max={5} placeholder="_" name="quantity" />
    </div>
  )
}

function stateDebugging(number, setNumber) {
  return (
    <div className="pt-4 text-muted">
      <h2>State debugging</h2>
      <p>number = `{number}`</p>
      <p>Simulate outside-triggered change:</p>
      <div className="d-flex gap-1">
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber(undefined)}>
          undefined
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber('abc')}>
          abc
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber(-1)}>
          -1
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber(0)}>
          0
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber(1)}>
          1
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber(2)}>
          2
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber(11)}>
          11
        </button>
      </div>
    </div>
  )
}
