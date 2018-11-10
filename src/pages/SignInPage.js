import React, { Component } from 'react'
import f from 'lodash'

// import FlashMessages from '../components/FlashMessages'
import Navbar from '../components/Navbar'
import { SignInCard } from '../components/SignInUI'
// import DebugProps from '../components/DebugProps'

const defaultProps = {
  authFlow: {
    title: 'Anmelden bei Leihs',
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
    const flashMessages = f.get(props, 'flashMessages')

    return (
      <div className="bg-paper h-100">
        <Navbar {...props.navbar} hideSignInField />

        <div
          className="container d-flex minh-100 pb-5"
          style={{
            maxWidth: '42rem'
          }}
        >
          <div className="p-4 pb-5 m-auto minw-100">
            <SignInCard
              authFlow={f.merge(authFlow, defaultProps.authFlow)}
              authSystems={authSystems}
              messages={flashMessages}
            />
          </div>
        </div>

        {/*

        <DebugProps {...props} /> */}
      </div>
    )
  }
}

export default SignInPage
