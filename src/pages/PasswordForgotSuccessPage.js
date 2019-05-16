import React, { Component } from 'react'
// import f from 'lodash'

import Navbar from '../components/Navbar'
import FlashMessages from '../components/FlashMessages'
import { CenteredCard } from '../components/CardPage'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  resetPwLink: '/password-reset/reset-password'
}

class Page extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)

    return (
      <div className="bg-paper h-100">
        <Navbar {...props.navbar} hideSignInField />

        <CenteredCard title={t('password_forgot_title')}>
          <FlashMessages
            messages={[{ message: props.message, level: 'success' }]}
            className="rounded"
            messageClasses="h5 rounded"
          />
          <a href={props.resetPwLink}>
            go here to reset the password using the token in the email
          </a>
        </CenteredCard>
      </div>
    )
  }
}
Page.defaultProps = defaultProps

export default Page
