import React from 'react'
import PropTypes from 'prop-types'

export default function Textarea({ value, onChange, minRows = 3, maxRows = 7, ...restProps }) {
  const rows = Math.max(minRows, Math.min(maxRows, String(value).split('\n').length))
  return <textarea rows={rows} value={value} onChange={onChange} {...restProps} />
}

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  minRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
