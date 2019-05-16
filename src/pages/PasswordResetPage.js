import React, { Component } from 'react'
import cx from 'classnames'
import f from 'lodash'

import Navbar from '../components/Navbar'
import { CsrfTokenField } from '../components/Forms'
import { Card, CenterOnPage } from '../components/CardPage'
import FlashMessages from '../components/FlashMessages'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  form: {
    action: '/reset-password',
    method: 'POST'
  }
}

class Page extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)
    const csrf = { token: f.get(props, 'navbar.config.csrfToken') }
    const pwReset = f.get(props, 'pwReset') || {}
    const flashMessages = f.get(props, 'flashMessages')

    return (
      <div className="bg-paper h-100">
        <Navbar {...props.navbar} hideSignInField />

        <CenterOnPage>
          <PasswordForgotCard
            {...defaultProps}
            csrf={csrf}
            pwReset={pwReset}
            messages={flashMessages}
            t={t}
          />
        </CenterOnPage>
      </div>
    )
  }
}

export default Page

const PasswordForgotCard = ({
  t,
  form,
  messages,
  pwReset,
  csrf,
  autoFocusUserField = true
}) => {
  const step = f.isEmpty(pwReset.token) ? 1 : 2
  const formProps =
    step === 1 ? {} : { method: form.method, action: form.action }

  return (
    <Card title={t('password_reset_title')}>
      {/* <p className="mb-4">{t('password_reset_description')}</p> */}
      <FlashMessages
        messages={messages}
        className="rounded"
        messageClasses="h5 rounded"
      />
      <form className="ui-form-signin text-left" {...formProps}>
        <div className={cx('form-group', { 'form-group-sm': step === 2 })}>
          <label htmlFor={'inputToken'}>
            {t('password_reset_token_label')}
          </label>
          <input
            id={'inputToken'}
            name="token"
            autoComplete="off"
            required
            placeholder={t('password_reset_token_label')}
            className="form-control text-monospace"
            defaultValue={pwReset.token || ''}
            autoFocus={step === 1}
            readOnly={step === 2}
          />
        </div>
        {step === 2 && <CsrfTokenField {...csrf} />}
        {step === 2 && (
          <div className="form-group form-group-sm">
            <label htmlFor={'inputEmail'}>
              {t('password_reset_userparam_label')}
            </label>
            <input
              id={'inputEmail'}
              name="user"
              required
              readOnly
              placeholder={t('password_reset_userparam_label')}
              className="form-control"
              defaultValue={pwReset.userParam}
            />
          </div>
        )}

        {step === 2 && (
          <div className="form-group">
            <label htmlFor={'inputNewPassword'}>
              {t('password_reset_newpassword_label')}
            </label>
            <input
              type="password"
              id={'inputNewPassword'}
              name="newPassword"
              defaultValue={''}
              required
              minLength="4"
              placeholder={t('password_reset_newpassword_label')}
              autoComplete="new-password"
              className="form-control"
              autoFocus={step === 2}
            />
          </div>
        )}

        <button className="btn btn-success btn-block mt-3" type="submit">
          {t('password_reset_continue')}
        </button>
      </form>
    </Card>
  )
}
