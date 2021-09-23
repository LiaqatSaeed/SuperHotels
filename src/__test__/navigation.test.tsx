import React from 'react';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Navigation from '../layout';
import { customRender } from "./utils"

afterAll(() => cleanup())
beforeAll(() => cleanup())

describe("Test Suite: Navigation", () => {
  it("Testcase #1: Check Navbar Component render successfully", () => {
    render(<Navigation />)
    const navBarElement = screen.getByTestId("navbar");
    expect(navBarElement).toBeInTheDocument()

  })

  it("Testcase #2: Check When User is Logged Out then LogIn and Register should show up.", () => {
    render(<Navigation />)
    const LogInLink = screen.getByTestId('login');
    expect(LogInLink).toBeInTheDocument();
    const RegisterButton = screen.getByTestId('register');
    expect(RegisterButton).toBeInTheDocument();
  })

  it("Testcase #3: Check When User clicks on Register button. Register Modal should show up.", () => {
    render(<Navigation />)
    const LogInLink = screen.getByTestId('login');
    expect(LogInLink).toBeInTheDocument();
    const RegisterButton = screen.getByTestId('register');
    expect(RegisterButton).toBeInTheDocument();
    fireEvent.click(RegisterButton)
    const RegisterModal = screen.getByTestId('register-modal');
    expect(RegisterModal).toBeInTheDocument()

  })


  it("Testcase #4: Check When User is Logged In then User name should show on up Dropdown toggle button also user dropdown menu should show up.", () => {

    const providerProps = {
      isLoggedIn: true,
      context: {
        name: "Liaqat Saeed"
      }

    }
    customRender(<Navigation />, { providerProps })
    const userNameDropdown = screen.getByTestId('navbar-dropdown-when-loggedIn');
    expect(userNameDropdown).toBeInTheDocument();
    let loggedInUserName = screen.getByText(providerProps.context.name)
    expect(loggedInUserName).toBeInTheDocument();
  })
})