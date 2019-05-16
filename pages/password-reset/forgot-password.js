import React from 'react'
import { withRouter } from 'next/router'

import PasswordForgotPage from '../../src/pages/PasswordForgotPage'
import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps
}

const page = ({ router }) => {
  const userParam = router.query.user

  return <PasswordForgotPage {...exampleProps} userParam={userParam} />
}

export default withRouter(page)
