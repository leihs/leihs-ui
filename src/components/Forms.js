import React from 'react'
import assert from 'assert'

export const CsrfTokenField = ({ name, token, isOptional = false }) => {
  if (!isOptional) assert(token)
  return <input type="hidden" name={name || 'csrf-token'} value={token} />
}
