import React from 'react';
import LoginForm from './login.form';
import { initialValues } from './initial.values';
import schema from './schema.yup';
import { GModel } from "../../../components/gmodel"


export interface ILoginProps {
    name?: string
    isOpen: boolean
    toggle: () => void
}

const Login = ({ isOpen, toggle }: ILoginProps) => {
    return (
        <GModel title="Login" isOpen={isOpen} toggle={toggle}>
            <LoginForm initialValues={initialValues} validationSchema={schema} onSubmit={(values) => {
                console.log(values)
                toggle()
            }} />
            <hr />
            <span>Don't Have an Account? <span className="text-primary">Register</span></span>
        </GModel>
    );
}

export default Login;