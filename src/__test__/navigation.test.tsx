import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import Navigation from '../layout';
import { AuthContext } from "../context/auth.context"

afterAll(() => cleanup())
beforeAll(() => cleanup())


const customRender = (ui: React.ReactNode, { providerProps, ...renderOptions }: any) => {
  return render(
    <AuthContext.Provider value={{ ...providerProps }}>{ui}</AuthContext.Provider>,
    renderOptions,
  )
}

describe("Test Suite: Navigation", () => {
  it("Testcase #1: Check Navbar Component render successfully", () => {
    render(<Navigation />)
    const navBarElement = screen.getByTestId("navbar");
    expect(navBarElement).toBeInTheDocument()

  })

  it("Testcase #2: Check When User is Logged Out then LogIn and SignUp should show up.", () => {
    render(<Navigation />)
    const LogInLink = screen.getByTestId('login');
    expect(LogInLink).toBeInTheDocument();
    const SignUpButton = screen.getByTestId('signup');
    expect(SignUpButton).toBeInTheDocument();
  })

  it("Testcase #3: Check When User is Logged In then User name should show on up Dropdown toggle button also user dropdown menu should show up.", () => {

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