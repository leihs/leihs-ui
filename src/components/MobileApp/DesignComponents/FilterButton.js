import React from 'react'

export default function FilterButton({ children, onClick }) {
  return (
    <button type="button" className="btn btn-primary btn-sm rounded-pill px-4 very-small" onClick={onClick}>
      {children}
    </button>
  )
}
