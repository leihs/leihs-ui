import React from 'react'
import renderer from 'react-test-renderer'

import Navbar from './Navbar'
import sharedNavbarProps from '../stories/_sharedNavbarProps.json'
const LEIHS_GREEN = '#afec81'

const examples = [
  {
    name: 'base',
    content: <Navbar csrfToken={sharedNavbarProps.csrfToken} />
  },
  {
    name: 'on root page, logged out',
    content: (
      <Navbar
        config={{
          me: false,
          appTitle: 'leihs',
          appMenu: null,
          subApps: false,
          appColor: null,
          returnTo: '/someapp'
        }}
        csrfToken={sharedNavbarProps.csrfToken}
      />
    )
  },
  {
    name: 'no user, marks default lang',
    content: (
      <Navbar
        config={{
          me: false,
          locales: [
            {
              id: 1,
              locale: 'en',
              name: 'EN',
              isDefault: false,
              isSelected: false
            },
            {
              id: 2,
              locale: 'de',
              name: 'DE',
              isDefault: true,
              isSelected: false
            }
          ]
        }}
        csrfToken={sharedNavbarProps.csrfToken}
      />
    )
  },
  {
    name: 'no user, with selected lang',
    content: (
      <Navbar
        config={{
          me: false,
          locales: [
            {
              id: 1,
              locale: 'en',
              name: 'EN',
              isDefault: false,
              isSelected: true
            },
            {
              id: 2,
              locale: 'de',
              name: 'DE',
              isDefault: true,
              isSelected: false
            }
          ]
        }}
        csrfToken={sharedNavbarProps.csrfToken}
      />
    )
  },
  {
    name: 'no user, with selected lang same as default lang',
    content: (
      <Navbar
        config={{
          me: false,
          locales: [
            {
              id: 1,
              locale: 'en',
              name: 'EN',
              isDefault: false,
              isSelected: false
            },
            {
              id: 2,
              locale: 'de',
              name: 'DE',
              isDefault: true,
              isSelected: true
            }
          ]
        }}
        csrfToken={sharedNavbarProps.csrfToken}
      />
    )
  },
  {
    name: 'user without lang setting, marks default lang',
    content: (
      <Navbar
        config={{
          me: { user: { login: 'ME' } },
          locales: [
            {
              id: 1,
              locale: 'en',
              name: 'EN',
              isDefault: false,
              isSelected: false
            },
            {
              id: 2,
              locale: 'de',
              name: 'DE',
              isDefault: true,
              isSelected: false
            }
          ]
        }}
        csrfToken={sharedNavbarProps.csrfToken}
      />
    )
  },
  {
    name: 'user with lang setting, marks selected lang',
    content: (
      <Navbar
        config={{
          me: { user: { login: 'ME' } },
          locales: [
            {
              id: 1,
              locale: 'en',
              name: 'EN',
              isDefault: false,
              isSelected: true
            },
            {
              id: 2,
              locale: 'de',
              name: 'DE',
              isDefault: true,
              isSelected: false
            }
          ]
        }}
        csrfToken={sharedNavbarProps.csrfToken}
      />
    )
  },

  {
    name: 'usage in shared app',
    content: (
      <Navbar
        config={{
          appTitle: 'leihs',
          appColor: LEIHS_GREEN,
          appMenu: [
            {
              title: 'one',
              href: '/1',
              icon: 'Settings',
              active: false,
              attr: { 'data-foo': 'bar' }
            },
            {
              title: 'two',
              href: '/2',
              icon: 'Categories',
              active: true
            }
          ],
          me: {
            user: {
              name: 'Normin Normalo'
            }
          }
        }}
        csrfToken={sharedNavbarProps.csrfToken}
      />
    )
  }
]

examples.forEach(({ name, content }) => {
  it(`${name}: renders correctly`, () => {
    expect(renderer.create(content).toJSON()).toMatchSnapshot()
  })
})
