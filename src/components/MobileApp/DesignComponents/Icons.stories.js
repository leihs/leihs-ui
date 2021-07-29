import React from 'react'
import Icon, { allIcons } from './Icons'

export default {
  title: 'MobileApp/DesignComponents/Icons'
}

export const icons = () => {
  return (
    <div className="container">
      {allIcons.map((icon, i) => {
        return (
          <div key={i} className="py-1 d-flex gap-2 align-items-center">
            <div className="badge bg-light text-primary" style={{ width: '2.5rem' }}>
              <Icon icon={icon} />
            </div>
            <div className="badge bg-primary" style={{ width: '2.5rem' }}>
              <Icon icon={icon} />
            </div>
            <span className="ms-4">{icon.name}</span>
          </div>
        )
      })}
    </div>
  )
}
