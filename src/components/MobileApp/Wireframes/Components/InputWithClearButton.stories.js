import React, { useState } from 'react'
import InputWithClearButton from './InputWithClearButton'

export default {
  title: 'MobileApp/Wireframes2021/Components/InputWithClearButton',
  component: InputWithClearButton
}

export const formControl = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <InputWithClearButton
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        onClearClick={() => setName('')}
      />
      <div className="p-2">Name = {name}</div>
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
      <div className="d-inline-block w-50">
        <InputWithClearButton
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          onClearClick={() => setFirstName('')}
        />
      </div>
      <div className="d-inline-block w-50">
        <InputWithClearButton
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          onClearClick={() => setLastName('')}
        />
      </div>
      <div className="p-2">Name = {`${firstName} ${lastName}`}</div>
    </div>
  )
}
