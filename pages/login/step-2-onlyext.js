import React from 'react'
import { withRouter } from 'next/router'
import SignInPage from '../../src/pages/SignInPage'

import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps,
  authFlow: {
    user: 'malbrech',
    title: 'Anmelden bei Leihs',
    form: {
      method: 'POST',
      action: '/sign-in'
    }
  },
  authSystems: [
    {
      id: 'example-swisspass',
      type: 'external',
      name: 'Login mit SwissPass',
      description: 'Bitte halten sie ihre Karte bereit!',
      external_url: '/example-external-sign-in'
    },
    {
      id: 'example-zhdk',
      type: 'external',
      name: 'Login mit ZHdK',
      description: null,
      external_url: '/example-external-sign-in'
    }
  ]
}

const page = ({ router }) => <SignInPage {...exampleProps} />
export default withRouter(page)
