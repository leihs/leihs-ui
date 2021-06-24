import React from 'react'

export default function FilterSummary({ children, onClick }) {
  return (
    <div className="text-center">
      <button type="button" className="filter-summary rounded-pill px-4 py-2" onClick={onClick}>
        {children}
      </button>
    </div>
  )
}
