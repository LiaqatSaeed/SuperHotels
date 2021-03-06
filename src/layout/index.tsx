import React, { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Button,
  NavbarText,
  UncontrolledDropdown,
} from "reactstrap";
import { useAuth } from "../context/auth.context";
import Login from "../screens/userPages/login";
import Register from "../screens/userPages/register";

const Navigation = (props: any) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const { isLoggedIn, onLogout, context } = useAuth();

  return (
    <Navbar data-testid="navbar" color="light" light expand="md">
      <NavbarBrand href="/">Super Hotels</NavbarBrand>
      <NavbarToggler data-testid="navbarToggler" />
      <Collapse navbar className="justify-content-end">
        <Nav className="mr-auto justify-content-end" navbar>
          {isLoggedIn ? (
            <UncontrolledDropdown
              data-testid="navbar-dropdown-when-loggedIn"
              nav
              inNavbar
            >
              <DropdownToggle nav caret data-testid="username">
                {context && context.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => onLogout && onLogout({ logMeOut: false })}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <>
              <NavItem>
                <NavbarText
                  data-testid="login"
                  className="m-3 cursor-pointer"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </NavbarText>
              </NavItem>
              <NavItem>
                <Button
                  data-testid="signup"
                  color="primary"
                  size="sm"
                  onClick={() => setShowRegister(true)}
                >
                  Sign Up <i className="fas fa-sign-out-alt"></i>
                </Button>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
      <Login
        toggle={() => setShowLogin(false)}
        isOpen={showLogin}
        openRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      <Register
        toggle={() => setShowRegister(false)}
        isOpen={showRegister}
        openLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    </Navbar>
  );
};

export default Navigation;
