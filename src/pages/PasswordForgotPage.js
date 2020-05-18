import React, { Component } from 'react'
import f from 'lodash'

import Navbar from '../components/Navbar'
import { CsrfTokenField } from '../components/Forms'
import { Card, CenterOnPage } from '../components/CardPage'
import FlashMessages from '../components/FlashMessages'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  form: {
    action: '/forgot-password',
    method: 'POST'
  }
}

class Page extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)
    const csrf = { token: f.get(props, 'navbar.config.csrfToken') }
    const userParam = f.get(props, 'userParam')
    const flashMessages = f.get(props, 'flashMessages')

    return (
      <div className="bg-paper h-100">
        <Navbar {...props.navbar} hideSignInField />

        <CenterOnPage>
          <PasswordForgotCard {...defaultProps} csrf={csrf} userParam={userParam} messages={flashMessages} t={t} />
        </CenterOnPage>
      </div>
    )
  }
}

export default Page

const PasswordForgotCard = ({ t, form, messages, userParam, csrf, autoFocusUserField = true }) => {
  return (
    <Card title={t('password_forgot_title')}>
      <p className="mb-4">{t('password_forgot_description')}</p>
      <FlashMessages messages={messages} className="rounded" messageClasses="h5 rounded" />
      <form className="ui-form-signin" method={form.method} action={form.action}>
        <CsrfTokenField {...csrf} />
        <label htmlFor={'inputEmail'} className="sr-only">
          {t('password_forgot_userparam_label')}
        </label>
        <input
          id={'inputEmail'}
          name="user"
          required
          placeholder={t('password_forgot_userparam_label')}
          className="form-control"
          defaultValue={userParam || ''}
          autoFocus={true}
          autoCapitalize="off"
          autoCorrect="off"
        />

        <button className="btn btn-success btn-block mt-3" type="submit">
          {t('password_forgot_continue')}
        </button>
      </form>
    </Card>
  )
}
