// import Link from 'next/link'
import React from 'react'
// import PropTypes from 'prop-types'
// import cx from 'classnames'
// import f from 'lodash'
import { withRouter } from 'next/router'

import SignInPage from '../../src/pages/SignInPage'

const examplePropsExt = {
  navbar: {
    config: {
      appTitle: 'Leihs',
      appColor: 'gray',
      csrfToken: '5eb86461-a20e-4994-8706-c80b40e30137',
      me: null,
      subApps: null,
      locales: []
    }
  },
  authFlow: {
    user: 'admin@example.com',
    title: 'Anmelden mit Passwort',
    form: { method: 'POST', action: '/sign-in' }
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

const exampleProps = examplePropsExt

const page = ({ router }) => {
  const userField = router.query.user
  const returnTo = router.query.return_to

  return (
    <LoginPage {...exampleProps} authFlow={{ user: userField, returnTo }} />
  )
}
export default withRouter(page)

const LoginPage = props => {
  return <SignInPage {...props} />
}
