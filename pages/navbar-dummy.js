import React from 'react'
import { LeihsPage } from '../components/styleguide'
import Navbar from '../components/Navbar'

const NavbarDummyPage = () => {
  const fakeParams = {
    me: {
      user: {
        name: 'Normin Normalo'
      }
    },
    // appColor: '#39CCCC',
    appColor: 'hsla(180, 59%, 35%, 1)',
    appTitle: 'LeihsApp',
    appMenu: [
      {
        title: 'AAA',
        href: '/aaa',
        icon: 'Settings',
        active: false,
        attr: { 'data-foo': 'bar' }
      },
      {
        title: 'BBB',
        href: '/bbb',
        icon: 'Categories',
        active: true
      },
      {
        title: 'CCC',
        href: '/ccc',
        icon: 'Users',
        active: false
      },
      {
        title: 'Kontakt',
        href: 'http://example.com',
        icon: 'Contact',
        active: false
      }
    ]
  }

  return (
    <LeihsPage>
      <Navbar config={fakeParams} />
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Great App</h1>
        <p className="lead">This is a great app with an even greater navbar.</p>
        <small>those (fake) params are rendered:</small>
        <pre className="text-bold text-left w-50 m-auto p-3 card bg-warning">
          {JSON.stringify(fakeParams, 0, 2)}
        </pre>
      </div>{' '}
    </LeihsPage>
  )
}

export default NavbarDummyPage
