// import Link from 'next/link'
import React from 'react'
// import PropTypes from 'prop-types'
// import cx from 'classnames'
// import f from 'lodash'
import { withRouter } from 'next/router'

import Navbar from '../src/components/Navbar'
import { SignInCard } from '../src/components/SignInUI'

import { exampleParams as exampleNavbarParams } from './navbar/dummy'

const LEIHS_GREEN = '#afec81'
const exampleProps = {
  navbar: {
    config: { ...exampleNavbarParams, appColor: LEIHS_GREEN }
  }
}

const page = ({ router }) => {
  const userField = router.query.user
  const returnTo = router.query.return_to

  return (
    <LoginPage {...exampleProps} authFlow={{ user: userField, returnTo }} />
  )
}
export default withRouter(page)

const LoginPage = props => {
  const { authFlow } = props
  return (
    <React.Fragment>
      <div className="bg-paper h-100">
        <Navbar {...exampleProps.navbar} />

        <div className="container d-flex" style={{ height: '67%' }}>
          <SignInCard authFlow={authFlow} />
        </div>
      </div>
    </React.Fragment>
  )
}
