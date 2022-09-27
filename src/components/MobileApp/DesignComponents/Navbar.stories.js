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
      <Navbar cartItemCount={3} userProfileShort="AB" appMenuLinkLabel="Bereich" />
      <p></p>
      <p className="text-muted">The navbar has the following 5 elements:</p>
      <ul className="text-muted">
        <li>The app title (&quot;brand&quot;) with home link (mobile: centered; desktop: left) </li>
        <li>Hamburger with the main menu (desktop: hidden)</li>
        <li>Cart icon with link to cart</li>
        <li>User/profile menu button</li>
        <li>App switch button (mobile: hidden)</li>
      </ul>
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
          cartItemCount,
          userProfileShort: 'AB',
          appMenuLinkLabel: 'Bereich'
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
      <p className="text-muted">Unbound (default props)</p>
      <div className="mb-3">
        <Navbar />
      </div>
      <p className="text-muted">RestProps</p>
      <div className="mb-3">
        <Navbar cartItemCount={3} className="border border-primary" />
      </div>
      <p className="text-muted">Props for the hamburger</p>
      <div className="mb-3">
        <Navbar cartItemCount={3} mainMenuLinkProps={{ className: 'border border-primary' }} />
      </div>
      <p className="text-muted">Props for the a tag surrounding the brand name</p>
      <div className="mb-3">
        <Navbar cartItemCount={3} brandLinkProps={{ className: 'border border-primary' }} />
      </div>
      <p className="text-muted">Props for the user menu link button</p>
      <div className="mb-3">
        <Navbar cartItemCount={3} userMenuLinkProps={{ className: 'border border-primary' }} />
      </div>
      <p className="text-muted">Props for the user app switcher button</p>
      <div className="mb-3">
        <Navbar cartItemCount={3} appMenuLinkProps={{ className: 'border border-primary' }} />
      </div>
      <p className="text-muted">With cart conflict</p>
      <div className="mb-3">
        <Navbar cartItemCount={3} invalidCartItemCount={1} />
      </div>
    </div>
  )
}
