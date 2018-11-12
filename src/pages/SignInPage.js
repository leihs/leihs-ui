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
          className="m-auto d-flex minh-100 pb-sm-5"
          style={{
            maxWidth: '42rem'
          }}
        >
          <div className="p-sm-4 pb-sm-5 m-sm-auto w-100 minw-100">
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
