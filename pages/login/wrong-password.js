import React from 'react'
import { withRouter } from 'next/router'
import SignInPage from '../../src/pages/SignInPage'

import navbarProps from './_sharedNavbarProps.json'

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
  flashMessages: [
    {
      level: 'error',
      message:
        'Password authentication failed! \nCheck your password and try again. \nContact your leihs administrator if the problem persists.'
    }
  ]
}

const page = ({ router }) => <SignInPage {...exampleProps} />
export default withRouter(page)
