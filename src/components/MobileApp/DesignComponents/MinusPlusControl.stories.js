import React, { useState } from 'react'
import cx from 'classnames'
import MinusPlusControl from './MinusPlusControl'

export default {
  title: 'MobileApp/DesignComponents/Minus Plus Control',
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
      <div className="mb-5">
        <MinusPlusControl number={number} onChange={change} required={true} min={1} max={10} />
      </div>
      <div>
        <h2>State debugging:</h2>
        <div>number = {number}</div>
        setNumber:{' '}
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber(undefined)}>
          undefined
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setNumber('a')}>
          a
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
      </div>
    </div>
  )
}

export function unboundExample() {
  return (
    <div>
      <MinusPlusControl max={5} />
    </div>
  )
}
