import f from 'lodash'
import React, { Fragment as F } from 'react'
import cx from 'classnames'
import { ColorTint } from '../lib/color-fns'
import {
  // Badge,
  Collapse,
  // Navbar as BsNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItemLink,
  // NavItemAnchor,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem as BsDropdownItem
  // DropdownItemLink
} from './Bootstrap'
import { Navbar as BsNavbar } from 'reactstrap'

import Icon from './Icons'
import { NavbarLogin } from './SignInUI'

import { Translator as T } from '../locale/translate'

// export const BASE_COLOR = '#563d7c' // bootstrap docs purple
export const BASE_COLOR = '#343a40' // bootstrap bg-dark
// const LEIHS_GREEN = '#afec81'

const defaults = {
  homeUrl: '/'
}

const DropdownItem = p => <BsDropdownItem data-trigger {...p} />

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
    const { bgBaseColor, hideSignInField = false, config, brand, children } = props
    const { me, appTitle, appMenu, appColor, subApps, returnTo } = config
    const user = f.get(me, 'user')
    const isLoggedIn = f.get(user, 'id')
    const { homeUrl } = defaults
    const csrfToken = f.get(props, 'csrfToken') || f.get(config, 'csrfToken')
    const t = T(config.locales)

    const bgColor = props.bgColor || appColor ? ColorTint(bgBaseColor, appColor) : bgBaseColor

    // NOTE: when not logged in, navbar is always expanded (so login button is always visible)
    // FIXME: <BsNavbar expand={…}/> does not work as expected, results in `navbar-expand-true`(!) <https://github.com/reactstrap/reactstrap/blob/master/src/Navbar.js#L28>
    const expandClass = isLoggedIn ? 'navbar-expand-sm' : 'navbar-expand'

    return (
      <BsNavbar
        dark
        color="dark"
        className={cx('navbar-leihs ui-main-nav', expandClass, props.className)}
        // FIXME: style tag gets missing(???)
        style={!bgColor ? { font: 'inherit' } : { backgroundColor: `${bgColor} !important` }}
      >
        {brand ? (
          brand
        ) : (
          <NavbarBrand href={homeUrl}>
            <Brand title={appTitle} />
          </NavbarBrand>
        )}

        <NavbarToggler onClick={e => this.toggleOpen()} />

        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {children}
            {f.map(appMenu, ({ title, href, icon, active, submenu, attr }, i) => {
              const IconEl = Icon[icon]
              return (
                <NavItemLink key={i} href={href} active={active} {...attr}>
                  {IconEl ? <IconEl fixedWidth spaced /> : false} {title}
                </NavItemLink>
              )
            })}
          </Nav>

          <Nav className="ml-auto" navbar>
            <SubAppDropdown t={t} subApps={subApps} />

            {f.isEmpty(user) ? (
              !!hideSignInField || <NavbarLogin locales={config.locales} returnTo={returnTo} />
            ) : (
              <UserMenu t={t} user={user} csrfToken={csrfToken} />
            )}

            <LocalesDropdown locales={config.locales} isLoggedIn={isLoggedIn} csrfToken={csrfToken} />
          </Nav>
        </Collapse>
      </BsNavbar>
    )
  }
}

const UserMenu = ({ t, user, csrfToken }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      <Icon.User size="lg" />
    </DropdownToggle>

    <DropdownMenu right>
      <DropdownItem tag="span" disabled className="text-body">
        <b>{decorateUser(user)}</b>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag="a" href="/borrow/user">
        {t('navbar_user_mydata')}
      </DropdownItem>
      <DropdownItem tag="a" href="/borrow/user/documents">
        {t('navbar_user_mydocs')}
      </DropdownItem>
      <DropdownItem divider />
      <form action="/sign-out" method="POST">
        <DropdownItem tag="button" type="submit">
          <input type="hidden" name="csrf-token" value={csrfToken} />
          {t('navbar_user_logout')}
        </DropdownItem>
      </form>

      {/* <DropdownItem>{tmpUserInfo({ me })}</DropdownItem> */}
    </DropdownMenu>
  </UncontrolledDropdown>
)

const SubAppDropdown = ({ t, subApps }) => {
  const otherPermittedSubapps = f.filter(f.toPairs(subApps), kv => {
    if (f.isArray(kv[1])) {
      return kv[1].length > 0
    } else {
      return kv[1]
    }
  })

  return (
    otherPermittedSubapps.length > 0 && (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <Icon.LeihsProcurement />
        </DropdownToggle>
        <DropdownMenu right>
          {f.map(f.keys(f.fromPairs(f.filter(f.toPairs(subApps), '1'))), (subApp, i, a) => {
            const withDivider = i + 1 < a.length // not if last
            let item

            if (subApp === 'borrow')
              item = (
                <DropdownItem href="/borrow">
                  <Icon.LeihsBorrow /> {t('app_name_borrow')}
                </DropdownItem>
              )

            if (subApp === 'admin')
              item = (
                <DropdownItem href="/admin/">
                  <Icon.LeihsAdmin /> {t('app_name_admin')}
                </DropdownItem>
              )

            if (subApp === 'procure')
              item = (
                <DropdownItem href="/procure">
                  <Icon.LeihsProcurement /> {t('app_name_procure')}
                </DropdownItem>
              )

            if (subApp === 'manage')
              item = f.isEmpty(subApps['manage']) ? (
                // <DropdownItem href="/manage">
                //   <Icon.LeihsManage /> {t('app_name_manage')}
                // </DropdownItem>
                false
              ) : (
                <F>
                  <DropdownItem header>
                    <Icon.LeihsManage /> {t('app_name_manage')}
                  </DropdownItem>
                  {f.map(subApps.manage, ({ name, href }) => (
                    <DropdownItem tag="a" href={href}>
                      {name}
                    </DropdownItem>
                  ))}
                </F>
              )

            if (subApp === 'styleguide')
              item = (
                <DropdownItem href="/">
                  <Icon.LeihsStyleguide /> {t('app_name_styleguide')}
                </DropdownItem>
              )

            return (
              <F key={i}>
                {item}
                {withDivider && <DropdownItem divider />}
              </F>
            )
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  )
}

const LocalesDropdown = ({ locales, isLoggedIn, csrfToken }) => {
  if (f.isEmpty(locales)) return false
  const currentLang = f.find(locales, l => l.isSelected) || f.find(locales, l => l.isDefault)
  return (
    <form method="POST" action={isLoggedIn ? '/my/user/me' : '/my/language'} className="ui-lang-selection">
      <input type="hidden" name="csrf-token" value={csrfToken} />
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <Icon.Language />
        </DropdownToggle>
        <DropdownMenu right>
          {/* <DropdownItem divider >Sprachen</DropdownItem> */}
          {f.map(locales, lang => {
            const isCurrent = !!currentLang && lang.id === currentLang.id
            return (
              <DropdownItem
                key={lang.id}
                tag="button"
                type="submit"
                name="language_id"
                value={lang.id}
                disabled={isCurrent}
                className={cx({ 'text-dark ui-selected-lang': isCurrent })}
              >
                {isCurrent ? <b>{lang.name}</b> : lang.name}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    </form>
  )
}
// const Let = ({ children, ...props }) => children(props)

function decorateUser(u) {
  if (u.firstname && u.lastname) {
    return `${f.first(u.firstname)}. ${u.lastname}`
  }
  return f.first(f.filter(['lastname', 'login', 'email', 'id'].map(key => f.get(u, key)), i => !f.isEmpty(i)))
}
