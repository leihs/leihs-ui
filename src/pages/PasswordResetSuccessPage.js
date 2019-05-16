import React, { Component } from 'react'
// import f from 'lodash'

import Navbar from '../components/Navbar'
import FlashMessages from '../components/FlashMessages'
import { CenteredCard } from '../components/CardPage'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  signInLink: '/sign-in'
}

class Page extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)

    return (
      <div className="bg-paper h-100">
        <Navbar {...props.navbar} hideSignInField />

        <CenteredCard title={t('password_reset_title')}>
          <FlashMessages
            messages={[
              { message: t('password_reset_success_message'), level: 'success' }
            ]}
            className="rounded"
            messageClasses="h5 rounded"
          />
          <a href={props.signInLink}>{t('password_reset_success_action')}</a>
        </CenteredCard>
      </div>
    )
  }
}
Page.defaultProps = defaultProps

export default Page
