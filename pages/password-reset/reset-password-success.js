// TODO!

import React from 'react'
import { withRouter } from 'next/router'

import PasswordResetSuccessPage from '../../src/pages/PasswordResetSuccessPage'
import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps,
  userParam: 'normin'
}

const page = ({ router }) => {
  return <PasswordResetSuccessPage {...exampleProps} />
}

export default withRouter(page)
