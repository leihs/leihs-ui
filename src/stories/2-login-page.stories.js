import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { Button } from '@storybook/react/demo'

import SignInPage from '../pages/SignInPage'
import navbarProps from './_sharedNavbarProps.json'

export default {
  title: 'Features/Login Page',
  parameters: { layout: 'fullscreen' }
}

export const NoUser = () => {
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
  return <SignInPage {...exampleProps} />
}

export const InvalidUser = () => {
  const exampleProps = {
    navbar: navbarProps,
    authFlow: {
      user: 'unknown-user-id',
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
          // 'Signing in with this account is currently not possible!  \nCheck your email-address or user name and try again.  \nContact the leihs support if the problem persists. '
          'Anmelden ist mit diesem Benutzerkonto nicht möglich! \nBitte prüfen Sie Ihre E-Mail-Adresse oder den Benutzernamen. Kontaktieren Sie den leihs-Support, falls das Problem weiterhin besteht.'
      }
    ]
  }
  return <SignInPage {...exampleProps} />
}

export const WrongPassword = () => {
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
  return <SignInPage {...exampleProps} />
}

export const Step2_PasswordAuthOnly = () => {
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
        id: 'password',
        type: 'password',
        name: 'leihs password',
        description: null,
        external_url: null
      }
    ]
  }
  return <SignInPage {...exampleProps} />
}

export const Step2_PasswordAndExternalAuth = () => {
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
  return <SignInPage {...exampleProps} />
}

export const Step2_2ExternalAuthOptionsAndNoPassword = () => {
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
  return <SignInPage {...exampleProps} />
}
