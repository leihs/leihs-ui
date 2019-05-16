// TODO!

import React from 'react'
import { withRouter } from 'next/router'

import PasswordForgotSuccessPage from '../../src/pages/PasswordForgotSuccessPage'
import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps,
  emailToCheck: 'n*****@e******.com',
  message: 'OK CHECK YA MAIL PLZ!'
}

const page = ({ router }) => {
  const userParam = router.query.user

  return <PasswordForgotSuccessPage {...exampleProps} />
}

export default withRouter(page)
