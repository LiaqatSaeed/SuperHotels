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
  UncontrolledDropdown,
} from "reactstrap";
import { useAuth } from "../context/auth.context";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, onLogin, onLogout } = useAuth();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Super Hotels</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="justify-content-end">
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
            <NavItem>
              <Button
                color="primary"
                size="sm"
                onClick={() => onLogin({ logMeIn: true })}
              >
                Login <i class="fas fa-sign-out-alt"></i>
              </Button>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
