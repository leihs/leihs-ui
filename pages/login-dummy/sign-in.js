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
  return (
    <LeihsPage className="p-3">
      <DummySimpleLogin
        id="example-1"
        userInput={{
          label: "Email address",
          inputProps: {
            type: "email",
            id: "inputEmail",
            placeholder: "Nutzername oder Email",
            autoComplete: "username email",
            defaultValue: userField ? userField : undefined,
            readOnly: true
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

const DummySimpleLogin = React.forwardRef((props, ref) => {
  const {
    id,
    userInput,
    formTitle = "Login",
    buttonTitle = "Login",
    showPasswordInput = true,
    onSubmit = e => {
      alert("would `POST` to `/login`");
    }
  } = props;
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
          onSubmit();
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
        <label htmlFor={id + "inputEmail"} className="sr-only">
          {userInput.label}
        </label>
        <input
          {...userInput.inputProps}
          id={id + "inputEmail"}
          className="form-control"
          required
          autoFocus
          style={{
            marginBottom: "-1px",
            borderBottomRightRadius: showPasswordInput ? 0 : null,
            borderBottomLeftRadius: showPasswordInput ? 0 : null
          }}
        />

        <VisuallyHidden if={!showPasswordInput}>
          <label htmlFor={id + "inputPassword"} className="sr-only">
            Password
          </label>
          <input
            ref={ref}
            type="password"
            id={id + "inputPassword"}
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
  );
});

class DummyTwoStepLogin extends React.Component {
  constructor(props) {
    super(props);
    this.pwRef = React.createRef();
    this.state = { step: 1 };
  }

  handleSubmit() {
    debugger;
    const step = this.state.step;
    const hasPassword = this.pwRef.value;
    if (step === 2 || (step === 1 && hasPassword)) {
    }

    switch (step) {
      case 1:
        return this.setState({ step: 2 }, _ =>
          setTimeout(_ => {
            try {
              document.querySelectorAll('input[type="password"]')[0].focus();
            } catch (e) {}
          }, 100)
        );
      case 2:
        return alert("would `POST` to `/login`");
      default:
        console.error("invalid state");
    }
  }

  render({ props, state } = this) {
    return (
      <DummySimpleLogin
        ref={this.pwRef}
        {...props}
        showPasswordInput={state.step === 2}
        buttonTitle={state.step === 1 ? "Weiter" : "Anmelden"}
        onSubmit={_ => this.handleSubmit()}
        userInput={{
          ...props.userInput,
          inputProps: {
            ...props.userInput.inputProps,
            readOnly: state.step === 2
          }
        }}
      />
    );
  }
}

const VisuallyHidden = ({ children, ...props }) => {
  const hidden = !!props["if"];
  return (
    <div aria-hidden={hidden} className={hidden ? "sr-only" : ""}>
      {children}
    </div>
  );
};
VisuallyHidden.propTypes = { if: PropTypes.bool.isRequired };

export default withRouter(Page);
