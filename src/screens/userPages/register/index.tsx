import * as React from 'react';
import { initialValues } from './initial.values';
import schema from './schema.yup';
import { GModel } from "../../../components/gmodel"
import RegisterForm from './register.form';
import { useAuth } from '../../../context/auth.context';
import isEmpty from 'lodash/isEmpty';

export interface IRegisterProps {
    name?: string
    isOpen: boolean
    toggle: () => void
    openLogin: () => void
}

const Register = ({ isOpen, toggle, openLogin }: IRegisterProps) => {
    const { onSignUp } = useAuth()
    return (
        <GModel title="Create Account" isOpen={isOpen} toggle={toggle}>
            <RegisterForm initialValues={initialValues} validationSchema={schema} onSubmit={(values: any) => {
                onSignUp && onSignUp(values).then(({ error }) => {
                    if (isEmpty(error)) {
                        toggle()
                    }
                })
                toggle()
            }} />
            <hr />
            <span>Already Have an Account! <span className="text-primary cursor-pointer" onClick={openLogin}>Login</span></span>
        </GModel>
    );
}

export default Register;