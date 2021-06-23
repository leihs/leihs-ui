import React from 'react'
import Navbar from './Navbar'

export default {
  title: 'MobileApp/Wireframes2021/Components/Navbar',
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
