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
      <Navbar brandName="Leihs" cartItemCount={3} />
    </div>
  )
}

export const counterExamples = () => {
  const countVariants = [0, 3, 11, 68, 524]
  return (
    <div>
      <h1>Navbar</h1>
      <p className="text-muted">How different counter values are rendered</p>
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
    </div>
  )
}

export const moreExamples = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <p className="text-muted">Unbound</p>
      <p>
        <Navbar />
      </p>
      <p className="text-muted">RestProps</p>
      <p>
        <Navbar brandName="Leihs" className="border border-primary" />
      </p>
      <p className="text-muted">Props for the hamburger</p>
      <p>
        <Navbar brandName="Leihs" menuItem={{ className: 'border border-primary' }} />
      </p>
      <p className="text-muted">Props for the brand name</p>
      <p>
        <Navbar brandName="Leihs" cartItem={{ className: 'border border-primary' }} />
      </p>
    </div>
  )
}
