import React from 'react'
import Navbar from './Navbar'

export default {
  title: 'MobileApp/DesignComponents/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' }
}

export const navbar = () => {
  const countVariants = [0, 3, 11, 68, 524]
  return (
    <div>
      {countVariants.map((cartItemCount, i) => {
        const navbarProps = {
          brandName: 'Leihs',
          cartItemCount
        }
        return (
          <div key={i} className="mb-3">
            <Navbar {...navbarProps} />
          </div>
        )
      })}
      <div className="mb-3">
        Unbound:
        <Navbar />
      </div>
    </div>
  )
}
