import React from 'react'
import Navbar from './Navbar'

export default {
  title: 'MobileApp/Design Components/Layout/Navbar',
  component: Navbar
}

export const navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Navbar brandName="Leihs" cartItemCount={3} brandItem={{ href: '/app/borrow/' }} />
    </div>
  )
}

export const counterExamples = () => {
  const countVariants = [0, 3, 11, 68, 524, 999999999]
  return (
    <div>
      <h1>Navbar</h1>
      <p className="text-muted">How different counter values are rendered</p>
      {countVariants.map((cartItemCount, i) => {
        const navbarProps = {
          brandName: 'Leihs',
          brandItem: { href: '/app/borrow/' },
          cartItemCount
        }
        return (
          <div key={i} className="mb-3">
            <Navbar {...navbarProps} />
          </div>
        )
      })}
    </div>
  )
}

export const moreExamples = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <p className="text-muted">Unbound</p>
      <div className="mb-3">
        <Navbar />
      </div>
      <p className="text-muted">RestProps</p>
      <div className="mb-3">
        <Navbar brandName="Leihs" className="border border-primary" />
      </div>
      <p className="text-muted">Props for the hamburger</p>
      <div className="mb-3">
        <Navbar brandName="Leihs" menuItem={{ className: 'border border-primary' }} />
      </div>
      <p className="text-muted">Props for the brand name</p>
      <div className="mb-3">
        <Navbar brandName="Leihs" brandItem={{ className: 'border border-primary' }} />
      </div>
    </div>
  )
}
