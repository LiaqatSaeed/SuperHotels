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
    onLogin?: (props: any) => void,
    onLogout?: (props: any) => void

}

const AuthContext = createContext<IAuthProps>({});
export const useAuth = () => useContext(AuthContext);

export function Auth({ children }: IAuthProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onLogin = ({ logMeIn }: any) => {
        setIsLoggedIn(logMeIn)


    }
    const onLogout = ({ logMeOut }: any) => {
        setIsLoggedIn(logMeOut)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout } as IAuthProps}>
            {children}
        </AuthContext.Provider>
    );
}

