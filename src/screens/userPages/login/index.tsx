import React from 'react';
import { GModel } from "../../../components/gmodel";
import { useAuth } from '../../../context/auth.context';
import { initialValues } from './initial.values';
import LoginForm from './login.form';
import schema from './schema.yup';
import isEmpty from 'lodash/isEmpty';


export interface ILoginProps {
    name?: string
    isOpen: boolean
    toggle: () => void
    openLogin: () => void
}

const Login = ({ isOpen, toggle, openLogin }: ILoginProps) => {
    const { onLogin } = useAuth()
    return (
        <GModel testId="login-modal" title="Login" isOpen={isOpen} toggle={toggle}>
            <LoginForm initialValues={initialValues} validationSchema={schema} onSubmit={(values) => {
                onLogin && onLogin(values).then(({ error = "" }) => {
                    if (isEmpty(error)) {
                        toggle()
                    }
                })

            }} />
            <hr />
            <span>Don't Have an Account? <span className="text-primary cursor-pointer" onClick={openLogin}>Register</span></span>
        </GModel>
    );
}

export default Login