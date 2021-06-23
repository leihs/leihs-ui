import React from 'react'

export default function DialogLayout({ children, title }) {
  return (
    <div className="w21-bg-light h-100">
      <div>
        <h3 className="text-center text-uppercase pt-5 m-0 w21-bg-light2">{title}</h3>
        {children}
      </div>
    </div>
  )
}
