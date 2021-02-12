import React, { Component } from 'react'
import f from 'lodash'

// import FlashMessages from '../components/FlashMessages'
import Navbar from '../components/Navbar'
import { CenterOnPage } from '../components/CardPage'
import { SignInCard } from '../components/SignInUI'
// import DebugProps from '../components/DebugProps'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  authFlow: {
    form: {
      method: 'POST',
      action: '/sign-in'
    },
    forgotPasswordLink: '/password-reset/forgot-password'
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

        <CenterOnPage>
          <SignInCard
            authFlow={f.merge(defaultProps.authFlow, authFlow)}
            authSystems={authSystems}
            messages={flashMessages}
            locales={props.navbar.config.locales}
            csrfToken={props.csrfToken}
          />
        </CenterOnPage>
      </div>
    )
  }
}

export default SignInPage
