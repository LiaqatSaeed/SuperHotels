import * as React from 'react';
import { withFormik } from '../../../hooks/withFormik';
import { ILoginFormProps } from './initial.values';
import { FormInput } from '../../../components/form.input';
import { Field } from 'formik';
import { Input, FormGroup } from 'reactstrap';


const LoginForm = (props: ILoginFormProps) => {
    return (

        <>
            <Field label="Email" name="email" component={FormInput} />
            <Field label="Password" name="password" type="password" component={FormInput} />
            <hr />
            <FormGroup className="mt-3">
                <Input type="submit" value="Log In" className="btn-primary" />
            </FormGroup>

        </>

    );
}
export default withFormik(LoginForm)
