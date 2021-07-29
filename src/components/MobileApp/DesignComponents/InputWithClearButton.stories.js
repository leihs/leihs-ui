import React, { useState } from 'react'
import InputWithClearButton from './InputWithClearButton'

export default {
  title: 'MobileApp/DesignComponents/Input With Clear Button',
  component: InputWithClearButton
}

export const controlled = () => {
  const [name, setName] = useState('')

  return (
    <div className="d-grid gap-3">
      <InputWithClearButton
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        name="mirror"
        placeholder="Input bound to same state"
        className="form-control"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export const uncontrolled = () => {
  return (
    <div>
      <InputWithClearButton name="name" placeholder="Name" defaultValue="James Bond" />
    </div>
  )
}

export const inlineBlock = () => {
  /*
   * The component is based on Bootstrap's input-group and form-control classes.
   * This means it is a block element. To place it inline, wrap it for instance in a d-inline-block.
   */

  const [firstName, setFirstName] = useState('James')
  const [lastName, setLastName] = useState('Bond')

  return (
    <div>
      <div className="d-inline-block mb-3">
        <InputWithClearButton
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="d-inline-block mb-3">
        <InputWithClearButton
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="p-2">Name = {`${firstName} ${lastName}`}</div>
    </div>
  )
}
