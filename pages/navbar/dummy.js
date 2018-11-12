import React from 'react'
import { LeihsPage } from '../../src/components/styleguide'
import Navbar from '../../src/components/Navbar'

const LEIHS_GREEN = '#afec81'
export const exampleParams = {
  csrfToken: '7d4eeec4-070c-4ea5-a778-85f29d9177e2',
  me: {
    user: {
      id: '5443e104-d80e-497f-bc15-927ff5c2d396',
      firstname: 'Normin',
      lastname: 'Normalo',
      login: 'nnormalo',
      email: 'normin.normalo@zhdk.ch',
      selectedLocale: '9a12cfd0-087d-56c4-ae4c-c6004f6adbf4'
    }
  },
  locales: [
    {
      id: 'b40234c5-0757-5148-b54d-366ef33aafa1',
      name: 'Deutsch',
      locale_name: 'de-CH',
      default: true
    },
    {
      id: '9a12cfd0-087d-56c4-ae4c-c6004f6adbf4',
      name: 'English',
      locale_name: 'en-GB',
      default: false
    },
    {
      id: 'b3fbc650-ace6-5eee-bf09-53a450c6eb99',
      name: 'Castellano',
      locale_name: 'es',
      default: false
    },
    {
      id: 'ca962bd5-f5f0-5555-a5fa-41ef3451f448',
      name: 'Züritüütsch',
      locale_name: 'gsw-CH',
      default: false
    }
  ],
  subApps: {
    borrow: true,
    admin: true,
    procure: true,
    manage: [
      {
        name: 'Ausleihe Toni-Areal',
        href: '/manage/7df25853-2590-452d-a35f-0a3a9c73e36b/daily'
      },
      {
        name: 'ITZ-Software',
        href: '/manage/b3030cf8-c920-4eee-8f01-90855b291e0e/daily'
      }
    ],
    styleguide: false
  },
  appColor: LEIHS_GREEN,
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
          See <a href="./colors">all the colors</a> and{' '}
          <a href="./variants">more variants</a>
          ..
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
