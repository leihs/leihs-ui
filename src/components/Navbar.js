import f from 'lodash'
import React, { Fragment as F } from 'react'
import cx from 'classnames'
import { ColorTint } from '../lib/color-fns'
import {
  // Badge,
  Collapse,
  Navbar as BsNavbar,
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
import { NavbarLogin } from './SignInUI'

// export const BASE_COLOR = '#563d7c' // bootstrap docs purple
export const BASE_COLOR = '#343a40' // bootstrap bg-dark
// const LEIHS_GREEN = '#afec81'

const defaults = {
  homeUrl: '/'
}

const Brand = ({ title }) => (
  <F>
    {/* <Icon.LeihsLogo className="mr-2" /> */}
    {title}
  </F>
)

export default class Navbar extends React.Component {
  static defaultProps = {
    config: {},
    bgBaseColor: BASE_COLOR
  }

  state = {
    isOpen: false
  }
  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render({ props, state } = this) {
    const { bgBaseColor, hideSignInField = false, config } = props
    const {
      me,
      appTitle,
      appMenu,
      appColor,
      subApps,
      locales,
      returnTo
    } = config
    const { homeUrl } = defaults
    const csrfToken = f.get(props, 'csrfToken') || f.get(config, 'csrfToken')

    const bgColor =
      props.bgColor || appColor ? ColorTint(bgBaseColor, appColor) : bgBaseColor

    return (
      <BsNavbar
        dark
        color="dark"
        expand="lg"
        className={cx('navbar-leihs', props.className)}
        style={{ backgroundColor: `${bgColor} !important` }}
      >
        <NavbarBrand href={homeUrl}>
          <Brand title={appTitle} />
        </NavbarBrand>

        <NavbarToggler onClick={e => this.toggleOpen()} />

        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {f.map(
              appMenu,
              ({ title, href, icon, active, submenu, attr }, i) => {
                const IconEl = Icon[icon]
                return (
                  <NavItemLink key={i} href={href} active={active} {...attr}>
                    {IconEl ? <IconEl fixedWidth spaced /> : false} {title}
                  </NavItemLink>
                )
              }
            )}
          </Nav>

          <Nav className="ml-auto" navbar>
            <SubAppDropdown subApps={subApps} />

            {f.isEmpty(me) || f.isEmpty(me.user) ? (
              !!hideSignInField || (
                <NavbarLogin
                  returnTo={returnTo}
                  // FIXME: do not require input (when sign in page can handle it)
                  requireUserInput={true}
                />
              )
            ) : (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Icon.User size="lg" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="span">
                    <form action="/sign-out" method="POST">
                      {!!csrfToken && (
                        <input
                          type="hidden"
                          name="csrf-token"
                          value={csrfToken}
                        />
                      )}
                      <button type="submit">Ausloggen</button>
                    </form>
                  </DropdownItem>
                  <DropdownItem>{tmpUserInfo({ me })}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}

            <LocalesDropdown me={me} locales={locales} csrfToken={csrfToken} />
          </Nav>
        </Collapse>
      </BsNavbar>
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

const SubAppDropdown = ({ subApps }) =>
  f.some(subApps) && (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <Icon.LeihsProcurement />
      </DropdownToggle>
      <DropdownMenu right>
        {f.map(
          f.keys(f.fromPairs(f.filter(f.toPairs(subApps), '1'))),
          (subApp, i, a) => {
            const withDivider = i + 1 < a.length // not if last
            let item

            if (subApp === 'borrow')
              item = (
                <DropdownItem href="/borrow">
                  <Icon.LeihsBorrow /> Ausleihen
                </DropdownItem>
              )

            if (subApp === 'admin')
              item = (
                <DropdownItem href="/admin">
                  <Icon.LeihsAdmin /> Admin
                </DropdownItem>
              )

            if (subApp === 'procure')
              item = (
                <DropdownItem href="/procure">
                  <Icon.LeihsProcurement /> Bedarfsermittlung
                </DropdownItem>
              )

            if (subApp === 'manage')
              item = (
                <DropdownItem href="/manage">
                  <Icon.LeihsManage /> Manage
                  {/* FIXME: decorate */}
                  {!f.isBoolean(subApps['manage']) && (
                    <pre>{JSON.stringify(subApps['manage'], 0, 2)}</pre>
                  )}
                </DropdownItem>
              )

            if (subApp === 'styleguide')
              item = (
                <DropdownItem href="/">
                  <Icon.LeihsStyleguide /> Styleguide
                </DropdownItem>
              )

            return (
              <F key={subApp}>
                {item}
                {withDivider && <DropdownItem divider />}
              </F>
            )
          }
        )}
      </DropdownMenu>
    </UncontrolledDropdown>
  )

const LocalesDropdown = ({ me, locales, csrfToken }) =>
  f.isEmpty(me) || f.isEmpty(me.user) || f.isEmpty(locales) ? (
    false
  ) : (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <Icon.Language />
      </DropdownToggle>
      <DropdownMenu right>
        {f.map(locales, l => (
          <DropdownItem tag="span">
            <form method="POST" action="/my/user/me">
              {l.name}
              <input type="hidden" name="language_id" value={l.id} />
              <input type="hidden" name="csrf-token" value={csrfToken} />
              <button type="submit" />
            </form>
          </DropdownItem>
        ))}
        <DropdownItem>
          <pre>{JSON.stringify(locales, 0, 2)}</pre>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
// const Let = ({ children, ...props }) => children(props)
