import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { Button } from '@storybook/react/demo'

import PasswordForgotPage from '../pages/PasswordForgotPage'
import PasswordResetPage from '../pages/PasswordResetPage'
import PasswordResetSuccessPage from '../pages/PasswordResetSuccessPage'
import navbarProps from './_sharedNavbarProps.json'

export default {
  title: 'Features/Passwort Reset',
  // component: Button,
  parameters: { layout: 'fullscreen' }
}
const sharedExampleProps = { navbar: navbarProps, csrfToken: { value: 'xxx' } }

export const forgotPassword = () => {
  return <PasswordForgotPage {...sharedExampleProps} />
}
export const forgotPassword_prefilled_username = () => {
  const exampleProps = { ...sharedExampleProps, userParam: 'some-user' }
  return <PasswordForgotPage {...exampleProps} />
}

export const forgotPassword_invalid_user = () => {
  const exampleProps = {
    ...sharedExampleProps,
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
  return <PasswordForgotPage {...exampleProps} />
}

export const forgotPassword_invalid_user_user_has_no_email = () => {
  const exampleProps = {
    ...sharedExampleProps,
    userParam: 'some-user-without-email',
    flashMessages: [
      {
        level: 'error',
        message:
          'Keine Email-Adresse vorhanden!\nDas Passwort für dieses Benutzerkonto kann nicht zurückgesetzt werden, weil keine Email-Adresse im System vorhanden ist. Bitte prüfen Sie den angegebenen Benutzernamen. Kontaktieren Sie den leihs-Support, falls das Problem weiterhin besteht.'
      }
    ]
  }
  return <PasswordForgotPage {...exampleProps} />
}

export const forgotPassword_success_message = () => {
  const exampleProps = {
    ...sharedExampleProps,
    emailToCheck: 'n*****@e******.com',
    message: 'OK CHECK YA MAIL PLZ!'
  }
  return <PasswordForgotPage {...exampleProps} />
}

export const forgotPassword_token_was_expired = () => {
  const exampleProps = {
    ...sharedExampleProps,
    userParam: 'some-user',
    flashMessages: [
      {
        level: 'error',
        message:
          // 'Signing in with this account is currently not possible!  \nCheck your email-address or user name and try again.  \nContact the leihs support if the problem persists. '
          'Entschuldigung, der Link zum Zurücksetzen des Passworts ist abgelaufen!'
      }
    ]
  }
  return <PasswordForgotPage {...exampleProps} />
}

export const forgotPassword_reset_passwort_form = () => {
  const exampleProps = { ...sharedExampleProps }
  return <PasswordResetPage {...exampleProps} />
}

export const forgotPassword_reset_passwort_form_from_email = () => {
  const exampleProps = {
    ...sharedExampleProps,
    pwReset: {
      userParam: 'some-user',
      token: 'ABCDEFG'
    }
  }
  return <PasswordResetPage {...exampleProps} />
}

export const forgotPassword_reset_passwort_success = () => {
  const exampleProps = {
    ...sharedExampleProps,
    userParam: 'some-user'
  }
  return <PasswordResetSuccessPage {...exampleProps} />
}
