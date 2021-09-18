import React, { createContext, ReactNode, useState, useContext } from "react";
import AuthAPI from "../lib/api/users";
import Toaster from "../components/toaster";
import isEmpty from "lodash/isEmpty";
import { addItem, clearItem, getContext } from "../lib/helpers/localstorage";
const APP_AUTH_KEY = "@app_auth"

export interface IUserProps {
    name?: string;
    email?: string;
    password?: string;
}

export interface IAuthProps {
    context?: IUserProps;
    token?: string;
    isLoggedIn?: boolean;
    children?: ReactNode;
    onLogin?: (props: any) => Promise<any>;
    onLogout?: (props: any) => void;
    onSignUp?: (props: any) => Promise<any>;
}

const AuthContext = createContext<IAuthProps>({});
export const useAuth = () => useContext(AuthContext);

export function Auth({ children }: IAuthProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(!isEmpty(getContext(APP_AUTH_KEY)));
    const [context, setContext] = useState(getContext(APP_AUTH_KEY));


    const handleResponse = ({ error = "", data = {}, message = "" }) => {
        if (!isEmpty(error)) {
            Toaster(error, "error");
            return { error };
        } else {
            addItem(APP_AUTH_KEY, data);
            setContext(getContext(APP_AUTH_KEY))
            setIsLoggedIn(true);
            Toaster(message, "success");
            return { data };
        }
    };

    const onLogin = async (params: any) => {
        let res = await AuthAPI.signIn(params);
        return handleResponse(res);
    };

    const onSignUp = async (params: any) => {
        let res = await AuthAPI.signUp(params);
        return handleResponse(res);
    };

    const onLogout = ({ logMeOut }: any) => {
        clearItem(APP_AUTH_KEY)
        setContext({})
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{ context, isLoggedIn, onLogin, onSignUp, onLogout } as IAuthProps}
        >
            {children}
        </AuthContext.Provider>
    );
}
