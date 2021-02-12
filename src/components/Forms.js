import React from 'react'
import assert from 'assert'

export const CsrfTokenField = ({ name, value, isOptional = false }) => {
  if (!isOptional) assert(value)
  return <input type="hidden" name={name || 'csrf-token'} value={value} />
}
