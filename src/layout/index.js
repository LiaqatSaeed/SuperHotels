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

const Navigation = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const { isLoggedIn, onLogout } = useAuth();

  const toggle = () => {
    if (!isLoggedIn) {
    }
  };

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Super Hotels</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar className="justify-content-end">
          <Nav className="mr-auto justify-content-end" navbar>
            {isLoggedIn ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Liaqat Saeed
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => onLogout({ logMeOut: false })}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <>
                <NavItem>
                  <NavbarText
                    className="m-3 cursor-pointer"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </NavbarText>
                </NavItem>
                <NavItem>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => setShowRegister(true)}
                  >
                    Sign Up <i class="fas fa-sign-out-alt"></i>
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
    </>
  );
};

export default Navigation;
