import React from 'react'

import PasswordForgotPage from '../../src/pages/PasswordForgotPage'
import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps,
  userParam: 'some-unknown-username',
  flashMessages: [
    {
      level: 'error',
      message:
        // 'Signing in with this account is currently not possible!  \nCheck your email-address or user name and try again.  \nContact the leihs support if the problem persists. '
        'Entschuldigung, der Link zum Zurücksetzen des Passworts ist abgelaufen!'
    }
  ]
}

const page = ({ router }) => {
  return <PasswordForgotPage {...exampleProps} />
}
export default page
