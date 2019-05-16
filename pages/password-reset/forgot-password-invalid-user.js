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
        'Anmelden ist mit diesem Benutzerkonto nicht möglich! \nBitte prüfen Sie Ihre E-Mail-Adresse oder den Benutzernamen. Kontaktieren Sie den leihs-Support, falls das Problem weiterhin besteht.'
    }
  ]
}

const page = ({ router }) => {
  return <PasswordForgotPage {...exampleProps} />
}
export default page
