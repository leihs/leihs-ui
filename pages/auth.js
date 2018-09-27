import Link from "next/link";
import LeihsPage from "../components/leihs-page";

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
    <LeihsPage class="p-3">
      <div>
        <p>institutional login, when logged out</p>
      </div>

      <div class="p-1 border shadow">
        <DummyNavBar>
          <UncontrolledButtonDropdown startOpen>
            <Button
              // tag="a"
              id="caret"
              color="success"
              onClick={_ => alert("Router: Navigate to `https://zhdk.ch/agw`")}
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
      </div>

      <hr />

      <div>
        <p>
          only password login, like{" "}
          <a href="https://ausleihe.hslu.ch/authenticator/hslu/login">HSLU</a>
        </p>
      </div>

      <div class="p-1 border shadow">
        <DummyNavBar>
          <UncontrolledButtonDropdown startOpen>
            <Button
              // tag="a"
              id="caret"
              color="success"
              onClick={_ => alert("Router: Navigate to `https://zhdk.ch/agw`")}
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
      </div>

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
