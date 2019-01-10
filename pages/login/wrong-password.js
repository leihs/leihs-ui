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
  flashMessages: [
    {
      level: 'error',
      message:
        // 'Password authentication failed! \nCheck your password and try again. \nContact the leihs support if the problem persists.'
        'Falsches Passwort! \nÜberprüfen Sie Ihr Passwort und versuchen Sie es erneut. Kontaktieren Sie den leihs-Support, falls das Problem weiterhin besteht.'
    }
  ]
}

const page = ({ router }) => <SignInPage {...exampleProps} />
export default withRouter(page)
