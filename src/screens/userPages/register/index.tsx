import * as React from 'react';
import { initialValues } from './initial.values';
import schema from './schema.yup';
import { GModel } from "../../../components/gmodel"
import RegisterForm from './register.form';

export interface IRegisterProps {
    name?: string
    isOpen: boolean
    toggle: () => void
    openLogin: () => void
}

const Register = ({ isOpen, toggle, openLogin }: IRegisterProps) => {
    return (
        <GModel title="Login" isOpen={isOpen} toggle={toggle}>
            <RegisterForm initialValues={initialValues} validationSchema={schema} onSubmit={(values: any) => {
                console.log(values)
                toggle()
            }} />
            <hr />
            <span>Already Have an Account! <span className="text-primary cursor-pointer" onClick={openLogin}>Login</span></span>
        </GModel>
    );
}

export default Register;