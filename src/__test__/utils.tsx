
import React from "react"
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Navigation from '../layout';
import { AuthContext } from "../context/auth.context"

const customRender = (ui: React.ReactNode, { providerProps, ...renderOptions }: any) => {
    return render(
        <AuthContext.Provider value={{ ...providerProps }}>{ui}</AuthContext.Provider>,
        renderOptions,
    )
}

export {
    customRender
}