import React from 'react'

const BASE_CLASS = 'ui-filter-bubble'

export default function FilterButton({ children, onClick }) {
  return (
    <button
      type="button"
      className={`${BASE_CLASS} btn btn-primary btn-sm rounded-pill px-4 very-small`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
