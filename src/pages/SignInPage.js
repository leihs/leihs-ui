import React, { Component } from 'react'
import f from 'lodash'

import FlashMessages from '../components/FlashMessages'
import Navbar from '../components/Navbar'
import { SignInCard } from '../components/SignInUI'
// import { VisuallyHidden } from '../components/Bootstrap'
// import DebugProps from '../components/DebugProps'

const defaultProps = {
  authFlow: {
    title: 'Anmelden mit Passwort',
    form: {
      method: 'POST',
      action: '/sign-in'
    }
  }
}

class SignInPage extends Component {
  render(props = this.props) {
    const authSystems = f.get(props, 'authSystems')
    const authFlow = f.get(props, 'authFlow')

    // const userParam = f.get(props, 'authFlow.user')
    // const csrfToken = f.get(props, 'navbar.config.csrfToken')

    return (
      <div className="bg-paper h-100">
        <Navbar {...props.navbar} hideSignInField />

        <FlashMessages flashMessages={f.get(props, 'flashMessages')} />

        <div className="container d-flex" style={{ height: '67%' }}>
          <SignInCard
            authFlow={f.merge(authFlow, defaultProps.authFlow)}
            authSystems={authSystems}
          />
        </div>

        {/* <div className="card-body">
          <form className="form" method="POST" action="/sign-in">
            <div className="form-group mx-sm-2 mb-2">
              <VisuallyHidden if={userParam}>
                <input
                  type="text"
                  required
                  readOnly
                  name="user"
                  value={userParam}
                />
              </VisuallyHidden>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="hidden" name="csrf-token" value={csrfToken} />
              <input
                type="password"
                autoComplete="current-password"
                name="password"
                className="form-control"
                defaultValue=""
              />
            </div>
            <div className="form-group float-right">
              <button
                disabled=""
                className="btn mb-2 btn-secondary"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <DebugProps {...props} /> */}
      </div>
    )
  }
}

export default SignInPage
