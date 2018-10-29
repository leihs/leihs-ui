import React from 'react'
import { LeihsPage } from '../../components/styleguide'
import Navbar from '../../components/Navbar'

export const exampleParams = {
  me: {
    user: {
      name: 'Normin Normalo'
    }
  },
  appColor: '#FF851B',
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

const NavbarDummyPage = () => {
  return (
    <LeihsPage>
      <Navbar config={exampleParams} />
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Great App</h1>
        <p className="lead">This is a great app with an even greater navbar.</p>
        <p className="lead">
          See <a href="./colors">all the colors</a>.
        </p>
        <small>those (example) params are rendered:</small>
        <pre className="text-bold text-left w-50 m-auto p-3 card bg-warning">
          {JSON.stringify(exampleParams, 0, 2)}
        </pre>
      </div>{' '}
    </LeihsPage>
  )
}

export default NavbarDummyPage
