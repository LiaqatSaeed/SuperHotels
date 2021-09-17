import React, { createContext, ReactNode, useState, useContext } from 'react';

export interface IUserProps {
    name?: string,
    email?: string,
    password?: string,
}

export interface IAuthProps {
    user?: IUserProps,
    token?: string,
    isLoggedIn?: boolean,
    children?: ReactNode,
    onLogin?: () => void
}

const AuthContext = createContext<IAuthProps>({ isLoggedIn: false });
export const useAuth = () => useContext(AuthContext);

export function Auth({ children }: IAuthProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onLogin = () => {

    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, onLogin, } as IAuthProps}>
            {children}
        </AuthContext.Provider>
    );
}

