import f from 'lodash'
import React, { Fragment as F } from 'react'
// import cx from 'classnames'
import { ColorTint } from '../lib/color-fns'
import {
  // Badge,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItemLink,
  // NavItemAnchor,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
  // DropdownItemLink
} from './Bootstrap'

import Icon from './Icons'
// import { DisplayName } from './decorators'

const isDev = process.env.NODE_ENV === 'development'
export const BASE_COLOR = '#563d7c' // bootstrap docs purple
// export const BASE_COLOR = '#343a40' // bootstrap bg-dark

const Brand = ({ title }) => (
  <F>
    <Icon.LeihsLogo className="mr-2" />
    {title}
  </F>
)

export default class MainNav extends React.Component {
  state = {
    isOpen: false
  }
  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render({ props, state } = this) {
    const { me, appTitle, appMenu, appColor } = props.config
    const bgColor = ColorTint(BASE_COLOR, appColor)

    return (
      <Navbar
        dark
        color="dark"
        expand="lg"
        className="navbar-leihs"
        style={{ backgroundColor: `${bgColor} !important` }}
      >
        <NavbarBrand exact to="/">
          <Brand title={appTitle} />
        </NavbarBrand>

        <NavbarToggler onClick={e => this.toggleOpen()} />

        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {f.map(appMenu, ({ title, href, icon, active, submenu, attr }) => {
              const IconEl = Icon[icon]
              return (
                <NavItemLink href={href} active={active} {...attr}>
                  {IconEl ? <IconEl fixedWidth spaced /> : false} {title}
                </NavItemLink>
              )
            })}
          </Nav>

          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Icon.LeihsProcurement />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/borrow">
                  <Icon.LeihsBorrow /> Ausleihen
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/admin">
                  <Icon.LeihsAdmin /> Admin
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/procure">
                  <Icon.LeihsProcurement /> Bedarfsermittlung
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/manage">
                  <Icon.LeihsManage /> Manage
                </DropdownItem>
                <DropdownItem divider />
                {isDev && (
                  <DropdownItem href="/">
                    <Icon.LeihsStyleguide /> Styleguide
                  </DropdownItem>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Icon.User size="lg" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="span">
                  <form action="/sign-out" method="POST">
                    <button type="submit">Ausloggen</button>
                  </form>
                </DropdownItem>
                <DropdownItem>{tmpUserInfo(me.user)}</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Icon.Language />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>[TODO]</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

const tmpUserInfo = user => (
  <F>
    <pre>
      <small>{JSON.stringify(user, 0, 2)}</small>
    </pre>
  </F>
)

const Let = ({ children, ...props }) => children(props)
