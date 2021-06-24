import React from 'react'
import Navbar from './Navbar'

export default {
  title: 'MobileApp/DesignComponents/Navbar',
  component: Navbar
}

export const navbar = () => {
  const countVariants = [undefined, 0, 3, 11, 524]
  return countVariants.map((cartItemCount, i) => {
    const navbarProps = {
      brandName: 'Leihs',
      cartItemCount
    }
    return (
      <div key={i} className="my-3">
        <Navbar {...navbarProps} />
      </div>
    )
  })
}
