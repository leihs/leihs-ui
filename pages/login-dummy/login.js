// TMP!!!

import Link from "next/link";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { ExampleBlock, LeihsPage } from "../../components/styleguide";

import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Page = ({ router }) => {
  const userField = router.query.user;
  const returnTo = router.query.return_to;
  return (
    <LeihsPage className="p-3">
      <DummyLogin
        id="example-1"
        returnTo={returnTo}
        showPasswordInput={!!userField}
        userField={userField}
        userInput={{
          label: "Email address",
          inputProps: {
            type: "text",
            id: "inputEmail",
            placeholder: "Nutzername oder Email",
            autoComplete: "username email",
            defaultValue: userField ? userField : undefined,
            readOnly: !!userField
          }
        }}
      />
    </LeihsPage>
  );
};

const DummyNavBar = ({ children }) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">leihs</NavbarBrand>

    <Nav className="ml-auto" navbar>
      {children}
    </Nav>
  </Navbar>
);

class DummyLogin extends React.Component {
  constructor(props) {
    super(props);
    this.pwRef = React.createRef();
    this.state = { step: this.props.userField ? 2 : 1, pass: null };
  }

  handleSubmit() {
    const step = this.state.step;

    if (step === 2 || (step === 1 && !!this.state.pass)) {
      this.setState({ step: 2 });
      return alert("would `POST` to `/login`");
    }

    if (step === 1) {
      return this.setState({ step: 2 }, _ =>
        setTimeout(_ => {
          try {
            document.querySelectorAll('input[type="password"]')[0].focus();
          } catch (e) {}
        }, 100)
      );
    }

    console.error("invalid state");
  }

  render({ props, state } = this) {
    const {
      id,
      returnTo,
      userInput,
      formTitle = "Login",
      buttonTitle = "Login"
    } = props;

    const showPasswordInput = !!(state.pass || state.step === 2);
    console.log("showPasswordInput", showPasswordInput);
    // debugger;

    return (
      <div
        className="ui-login-form text-center"
        style={{
          width: "100%",
          maxWidth: "330px",
          padding: "15px",
          margin: "auto"
        }}
      >
        <form
          className="form-signin"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <h1 className="h3 mb-3 font-weight-normal">{formTitle}</h1>

          <label htmlFor={id + "inputEmail"} className="sr-only">
            {userInput.label}
          </label>
          <input
            {...userInput.inputProps}
            id={id + "inputEmail"}
            className="form-control"
            required
            autoFocus={!showPasswordInput}
            style={{
              marginBottom: "-1px",
              borderBottomRightRadius: showPasswordInput ? 0 : null,
              borderBottomLeftRadius: showPasswordInput ? 0 : null
            }}
            value={state.pass}
            onChange={e => this.setState({ pass: e.target.value })}
          />

          <VisuallyHidden if={!showPasswordInput}>
            <label htmlFor={id + "inputPassword"} className="sr-only">
              Password
            </label>
            <input
              type="password"
              ref={this.pwRef}
              id={id + "inputPassword"}
              placeholder="Passwort"
              required={showPasswordInput}
              tabIndex={!showPasswordInput ? "-1" : undefined}
              autoComplete="current-password"
              autoFocus={showPasswordInput}
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
          <button
            className="btn btn-lg btn-success btn-block mt-3"
            type="submit"
          >
            {buttonTitle}
          </button>

          {userInput.inputProps.defaultValue && (
            <p className="mt-3">
              Not <code>{userInput.inputProps.defaultValue}</code>? <br />
              <a href={"/login-dummy/login" + "?return_to=" + returnTo}>
                Log in as different user
              </a>
            </p>
          )}
        </form>
      </div>
    );
  }
}

const VisuallyHidden = ({ children, ...props }) => {
  const hidden = !!props["if"];
  return (
    <div className={hidden ? "sr-only" : ""} aria-hidden={hidden}>
      {children}
    </div>
  );
};
VisuallyHidden.propTypes = { if: PropTypes.bool.isRequired };

export default withRouter(Page);
