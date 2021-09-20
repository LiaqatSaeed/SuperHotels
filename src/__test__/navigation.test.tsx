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
  it("Testcase #1: Check Navbar Component render successfully without", () => {
    render(<Navigation />)
    const navBarElement = screen.getByTestId("navbar");
    expect(navBarElement).toBeInTheDocument()

  })

  it("Testcase #2: Check When User is Logged In then UserDropdown should show up", () => {

    const providerProps = {
      isLoggedIn: true,

    }
    customRender(<Navigation />, { providerProps })
    const userNameDropdown = screen.getByTestId('navbar-dropdown-when-loggedIn');
    expect(userNameDropdown).toBeInTheDocument();
  })
})