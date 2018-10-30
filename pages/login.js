// TMP!!!

// import Link from 'next/link'
import PropTypes from 'prop-types'
import { LeihsPage } from '../src/components/styleguide'

import React from 'react'
// import {
//   // Collapse,
//   // Navbar,
//   // NavbarToggler,
//   // NavbarBrand,
//   // Nav
//   // NavItem,
//   // NavLink,
//   // Button,
//   // UncontrolledButtonDropdown,
//   // DropdownToggle,
//   // DropdownMenu,
//   // DropdownItem
// } from 'reactstrap'

/* eslint-disable react/display-name */
export default () => {
  return (
    <LeihsPage className="p-3">
      <DummyTwoStepLogin
        id="example-1"
        userInput={{
          label: 'Email address',
          inputProps: {
            type: 'email',
            id: 'inputEmail',
            placeholder: 'Email address',
            autoComplete: 'username email'
          }
        }}
      />
    </LeihsPage>
  )
}

// const DummyNavBar = ({ children }) => (
//   <Navbar color="light" light expand="md">
//     <NavbarBrand href="/">leihs</NavbarBrand>
//
//     <Nav className="ml-auto" navbar>
//       {children}
//     </Nav>
//   </Navbar>
// )

const DummySimpleLogin = React.forwardRef((props, ref) => {
  const {
    id,
    userInput,
    formTitle = 'Login',
    buttonTitle = 'Login',
    showPasswordInput = true,
    onSubmit = e => {
      alert('would `POST` to `/login`')
    }
  } = props
  return (
    <div
      className="ui-login-form text-center"
      style={{
        width: '100%',
        maxWidth: '330px',
        padding: '15px',
        margin: 'auto'
      }}
    >
      <form
        className="form-signin"
        onSubmit={e => {
          e.preventDefault()
          onSubmit()
        }}
      >
        {/* <img
        className="mb-4"
        src="../../assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      /> */}
        <h1 className="h3 mb-3 font-weight-normal">{formTitle}</h1>
        <label htmlFor={id + 'inputEmail'} className="sr-only">
          {userInput.label}
        </label>
        <input
          {...userInput.inputProps}
          id={id + 'inputEmail'}
          className="form-control"
          required
          autoFocus
          style={{
            marginBottom: '-1px',
            borderBottomRightRadius: showPasswordInput ? 0 : null,
            borderBottomLeftRadius: showPasswordInput ? 0 : null
          }}
        />

        <VisuallyHidden if={!showPasswordInput}>
          <label htmlFor={id + 'inputPassword'} className="sr-only">
            Password
          </label>
          <input
            ref={ref}
            type="password"
            id={id + 'inputPassword'}
            placeholder="Passwort"
            required={showPasswordInput}
            autoComplete="current-password"
            className="form-control"
            style={{
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0
            }}
          />
        </VisuallyHidden>

        {/* <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div> */}
        <button className="btn btn-lg btn-success btn-block mt-3" type="submit">
          {buttonTitle}
        </button>
        {/* <p className="mt-5 mb-3 text-muted">© 2017-2018</p> */}
      </form>
    </div>
  )
})

class DummyTwoStepLogin extends React.Component {
  constructor(props) {
    super(props)
    this.pwRef = React.createRef()
    this.state = { step: 1 }
  }

  handleSubmit() {
    const step = this.state.step
    const hasPassword = this.pwRef.value

    if (step === 2 || (step === 1 && hasPassword)) {
      return alert('would `POST` to `/login`')
    }

    if (step === 1) {
      return this.setState({ step: 2 }, _ =>
        setTimeout(_ => {
          try {
            document.querySelectorAll('input[type="password"]')[0].focus()
          } catch (e) {
            /* ignore */
          }
        }, 100)
      )
    }

    // console.error('invalid state')
  }

  render({ props, state } = this) {
    return (
      <DummySimpleLogin
        ref={this.pwRef}
        {...props}
        showPasswordInput={state.step === 2}
        buttonTitle={state.step === 1 ? 'Weiter' : 'Anmelden'}
        onSubmit={_ => this.handleSubmit()}
        userInput={{
          ...props.userInput,
          inputProps: {
            ...props.userInput.inputProps,
            readOnly: state.step === 2
          }
        }}
      />
    )
  }
}

const VisuallyHidden = ({ children, ...props }) => {
  const hidden = !!props['if']
  return (
    <div
      className={hidden ? 'sr-only' : ''}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
    >
      {children}
    </div>
  )
}
VisuallyHidden.propTypes = { if: PropTypes.bool.isRequired }
