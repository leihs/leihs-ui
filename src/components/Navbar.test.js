import React from 'react'
import renderer from 'react-test-renderer'

import Navbar from './Navbar'
const LEIHS_GREEN = '#afec81'

const examples = [
  {
    name: 'base',
    content: <Navbar />
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
      />
    )
  }
]

examples.forEach(({ name, content }) => {
  it(`${name}: renders correctly`, () => {
    expect(renderer.create(content).toJSON()).toMatchSnapshot()
  })
})
