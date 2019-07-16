import React from 'react'

import PasswordForgotPage from '../../src/pages/PasswordForgotPage'
import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps,
  userParam: 'some-user-without-email',
  flashMessages: [
    {
      level: 'error',
      message:
        'Keine Email-Adresse vorhanden!\nDas Passwort für dieses Benutzerkonto kann nicht zurückgesetzt werden, weil keine Email-Adresse im System vorhanden ist. Bitte prüfen Sie den angegebenen Benutzernamen. Kontaktieren Sie den leihs-Support, falls das Problem weiterhin besteht.'
    }
  ]
}

const page = ({ router }) => {
  return <PasswordForgotPage {...exampleProps} />
}
export default page
