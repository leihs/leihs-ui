import React from 'react'
import { withRouter } from 'next/router'
import SignInPage from '../../src/pages/SignInPage'

import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps,
  authFlow: {
    user: null,
    title: 'Anmelden mit Passwort',
    form: {
      method: 'POST',
      action: '/sign-in'
    }
  },
  authSystems: [
    {
      id: 'password',
      type: 'password',
      name: 'leihs password',
      description: null,
      external_url: null
    },
    {
      id: 'password',
      type: 'password',
      name: 'leihs password',
      description: null,
      external_url: null
    }
  ]
}

const page = ({ router }) => <SignInPage {...exampleProps} />
export default withRouter(page)
