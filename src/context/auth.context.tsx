import React, { createContext, ReactNode, useState, useContext } from "react";
import AuthAPI from "../lib/api/users";
import Toaster from "../components/toaster";
import isEmpty from "lodash/isEmpty";
import { addItem, clearItem, getContext } from "../lib/helpers/localstorage";


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
    const [isLoggedIn, setIsLoggedIn] = useState(!isEmpty(getContext()));
    const [context, setContext] = useState(getContext());


    const handleResponse = ({ error = "", data = {}, message = "" }) => {
        if (!isEmpty(error)) {
            Toaster(error, "error");
            return { error };
        } else {
            addItem(data);
            setContext(getContext())
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
        clearItem()
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
