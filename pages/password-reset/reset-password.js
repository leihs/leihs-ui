import React from 'react'

import PasswordResetPage from '../../src/pages/PasswordResetPage'
import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps
}

const page = ({ router }) => {
  return <PasswordResetPage {...exampleProps} />
}
export default page
