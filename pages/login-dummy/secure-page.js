import Link from "next/link";
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

export default () => {
  return (
    <LeihsPage className="p-5 text-center">
      <h1>OK</h1>
      <p class="lead">
        This is the Page that I want to visit after logging in.
      </p>
      <p>
        <a href="/login-dummy">go back to start of dummy</a>
      </p>
    </LeihsPage>
  );
};
