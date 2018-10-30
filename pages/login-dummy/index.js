import React from 'react'
// import Link from 'next/link'
import { LeihsPage } from '../../src/components/styleguide'

import { Navbar, NavbarBrand, Nav } from 'reactstrap'

// TODO: put the complete form here so pw manager could fill out and POST it all!
export default () => {
  return (
    <LeihsPage className="p-3">
      <DummyNavBar>
        <form action="/login-dummy/login">
          <div className="input-group">
            <input
              required
              name="user"
              autoComplete="username email"
              type="text"
              className="form-control"
              style={{ minWidth: '13em' }}
              placeholder="Nutzername oder Email"
              aria-label="Nutzername oder Email"
              aria-describedby="button-addon2"
            />
            <input
              type="hidden"
              name="return_to"
              value="/login-dummy/secure-page"
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-success"
                id="button-addon2"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </DummyNavBar>
    </LeihsPage>
  )
}

const DummyNavBar = ({ children }) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">leihs</NavbarBrand>

    <Nav className="ml-auto" navbar>
      {children}
    </Nav>
  </Navbar>
)
