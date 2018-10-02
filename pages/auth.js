import Link from "next/link";
import { ExampleBlock, LeihsPage } from "../components/styleguide";

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

export default () => {
  return (
    <LeihsPage className="p-3">
      <div>
        <p>default login, when logged out</p>
      </div>

      <ExampleBlock title="main nav affordance">
        <DummyNavBar>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Nutzername oder Email"
              aria-label="Nutzername oder Email"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-success"
                type="button"
                id="button-addon2"
                onClick={_ => alert("would navigate to `https://zhdk.ch/agw`")}
              >
                Login
              </button>
            </div>
          </div>
          {/* <UncontrolledButtonDropdown>
            <Button
              // tag="a"
              id="caret"
              color="success"
              onClick={_ => alert("would navigate to `https://zhdk.ch/agw`")}
            >
              Anmelden mit ZHdK-Login
            </Button>
            <DropdownToggle caret color="success" />
            <DropdownMenu right>
              <DropdownItem header>Alle Anmeldeoptionen</DropdownItem>
              <DropdownItem>ZHdK-Login (AGW)</DropdownItem>
              <DropdownItem>Switch-AAI</DropdownItem>
              <DropdownItem>Leihs-Account/Passwort</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown> */}
        </DummyNavBar>
      </ExampleBlock>

      <ExampleBlock title="page `/login`">
        <DummySimpleLogin
          id={Math.random()}
          userInput={{
            label: "Email address",
            inputProps: {
              type: "email",
              id: "inputEmail",
              placeholder: "Email address",
              autoComplete: "username email"
            }
          }}
        />
      </ExampleBlock>

      <hr />

      <div>
        <p>institutional login, when logged out</p>
      </div>

      <ExampleBlock title="main nav affordance">
        <DummyNavBar>
          <UncontrolledButtonDropdown>
            <Button
              // tag="a"
              id="caret"
              color="success"
              onClick={_ => alert("would navigate to `https://zhdk.ch/agw`")}
            >
              Anmelden mit ZHdK-Login
            </Button>
            <DropdownToggle caret color="success" />
            <DropdownMenu right>
              <DropdownItem header>Alle Anmeldeoptionen</DropdownItem>
              <DropdownItem>ZHdK-Login (AGW)</DropdownItem>
              <DropdownItem>Switch-AAI</DropdownItem>
              <DropdownItem>Leihs-Account/Passwort</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </DummyNavBar>
      </ExampleBlock>

      <ExampleBlock title="page `/login`">
        <DummySimpleLogin
          id={Math.random()}
          userInput={{
            label: "Email address",
            inputProps: {
              type: "email",
              id: "inputEmail",
              placeholder: "Email address",
              autoComplete: "username email"
            }
          }}
        />
      </ExampleBlock>

      <hr />

      <div>
        <p>
          only password login, like{" "}
          <a href="https://ausleihe.hslu.ch/authenticator/hslu/login">HSLU</a>
        </p>
      </div>

      <ExampleBlock title="main nav affordance">
        <DummyNavBar>
          <Button
            // tag="a"
            id="caret"
            color="success"
            onClick={_ => alert("would navigate to `/login`")}
          >
            Login
          </Button>
        </DummyNavBar>
      </ExampleBlock>

      <ExampleBlock title="page `/login`">
        <DummySimpleLogin
          id={Math.random()}
          userInput={{
            label: "Benutzername",
            inputProps: {
              type: "text",
              id: "inputUserName",
              placeholder: "Benutzername",
              autoComplete: "username"
            }
          }}
        />
      </ExampleBlock>

      <hr />

      <div>
        <p>two-step login</p>
      </div>

      <ExampleBlock title="page `/login`">
        <DummyTwoStepLogin
          id={Math.random()}
          userInput={{
            label: "Email address",
            inputProps: {
              type: "email",
              id: "inputEmail",
              placeholder: "Email address",
              autoComplete: "username email"
            }
          }}
        />
      </ExampleBlock>

      <hr />
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

const DummySimpleLogin = ({
  id,
  userInput,
  formTitle = "Login",
  buttonTitle = "Login",
  showPasswordInput = true,
  onSubmit = e => {
    e.preventDefault();
    alert("would `POST` to `/login`");
  }
}) => (
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
      <img
        className="mb-4"
        src="../../assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
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
      {!!showPasswordInput && (
        <React.Fragment>
          <label htmlFor={id + "inputPassword"} className="sr-only">
            Password
          </label>
          <input
            type="password"
            id={id + "inputPassword"}
            placeholder="Passwort"
            required
            autoComplete="current-password"
            className="form-control"
            style={{
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0
            }}
          />
        </React.Fragment>
      )}
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

class DummyTwoStepLogin extends React.Component {
  state = { step: 1 };
  render({ props, state } = this) {
    return (
      <DummySimpleLogin
        {...props}
        showPasswordInput={state.step === 2}
        buttonTitle={state.step === 1 ? "Weiter" : "Anmelden"}
        onSubmit={e =>
          state.step === 1
            ? this.setState({ step: 2 })
            : alert("would `POST` to `/login`")
        }
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
