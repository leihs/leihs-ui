import React, { Component } from 'react'
import f from 'lodash'

import { VisuallyHidden } from '../components/Bootstrap'
import Navbar from '../components/Navbar'
import DebugProps from '../components/DebugProps'

class SignInPage extends Component {
  render(props = this.props) {
    const userParam = f.get(props, 'authFlow.user')
    const csrfToken = f.get(props, 'navbar.config.csrfToken')
    return (
      <React.Fragment>
        <Navbar {...props.navbar} hideSignInField />
        <h1>SignInPage</h1>

        <div className="card-body">
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

        <DebugProps {...props} />
      </React.Fragment>
    )
  }
}

export default SignInPage
