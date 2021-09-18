
import * as React from 'react';
import { IRegistrationFormProps } from './initial.values';
import { withFormik } from '../../../hooks/withFormik';
import { Field } from 'formik';
import { FormGroup, Input } from 'reactstrap';
import { FormInput } from '../../../components/form.input';

const RegisterForm = (props: IRegistrationFormProps) => {
    return (
        <>
            <Field label="Email" name="email" component={FormInput} />
            <Field label="Password" name="password" component={FormInput} />
            <hr />
            <FormGroup className="mt-3">
                <Input type="submit" value="Register" className="btn-primary" />
            </FormGroup>



        </>
    );
}

export default withFormik(RegisterForm);
