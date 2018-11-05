import React from 'react'
import { Hr } from './Bootstrap'

export const NavbarLogin = ({
  returnTo,
  formAction,
  requireUserInput = true
}) => (
  <form className="form-inline my-2 my-lg-0" action={formAction} method="GET">
    <div className="input-group">
      <input
        name="user"
        type="text"
        className="form-control"
        placeholder="Nutzername/Email"
        aria-label="Nutzername/Email"
        aria-describedby="button-addon2"
        required={requireUserInput}
      />
      <div className="input-group-append">
        <button className="btn btn-success" type="submit" id="button-addon2">
          Login
        </button>
      </div>
      {returnTo && <input type="hidden" name="return_to" value={returnTo} />}
    </div>
  </form>
)
NavbarLogin.defaultProps = {
  formAction: '/sign-in'
}

export const SignInCard = ({ authFlow }) => (
  <div
    className="card shadow-sm text-center"
    style={{
      width: '100%',
      maxWidth: '330px',
      padding: '15px',
      margin: 'auto'
    }}
  >
    <h2 className="h5 mb-3 font-weight-normal">
      {'Anmelden mit externem Dienst'}
    </h2>
    <a className="btn btn-lg btn-success btn-block mt-3" href="/agw">
      {'ZHdK-Login'}
    </a>
    <Hr className="pb-3 pt-4">oder</Hr>
    <form className="form-signin">
      <h2 className="h5 mb-2 font-weight-normal">{'Anmelden mit Passwort'}</h2>
      <label htmlFor={'inputEmail'} className="sr-only">
        xxx
      </label>
      <input
        id={'inputEmail'}
        className="form-control"
        required
        value={authFlow.user}
        readOnly
        style={{
          marginBottom: '-1px',
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0
        }}
      />

      <label htmlFor={'inputPassword'} className="sr-only">
        Password
      </label>
      <input
        type="password"
        id={'inputPassword'}
        placeholder="Passwort"
        required
        autoComplete="current-password"
        className="form-control"
        style={{
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0
        }}
      />

      <button
        className="btn XXXbtn-lg btn-success btn-block mt-3"
        type="submit"
      >
        {'Weiter'}
      </button>
    </form>

    {false && <ResetUser userName={authFlow.user} resetLink={'./login'} />}
  </div>
)

// partials

const ResetUser = ({ userName, resetLink }) => (
  <p className="mt-3">
    Not <code>{userName}</code>? <br />
    <a href={resetLink}>Log in as different user</a>
  </p>
)
