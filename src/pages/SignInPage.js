import React, { Component } from 'react'
import f from 'lodash'

// import FlashMessages from '../components/FlashMessages'
import Navbar from '../components/Navbar'
import { SignInCard } from '../components/SignInUI'
// import DebugProps from '../components/DebugProps'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  authFlow: {
    form: {
      method: 'POST',
      action: '/sign-in'
    }
  }
}

class SignInPage extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)
    const authSystems = f.get(props, 'authSystems')
    const flashMessages = f.get(props, 'flashMessages')
    const authFlow = f.merge(f.get(props, 'authFlow'), {
      title: t('sign_in_title')
    })

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
              locales={props.navbar.config.locales}
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
