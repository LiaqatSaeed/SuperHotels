import * as React from 'react';
import { withFormik } from '../../../hooks/withFormik';
import { IHotelFormProps } from './initial.values';
import { FormInput } from '../../../components/form.input';
import { Field } from 'formik';



const Body = (props: IHotelFormProps) => {
    return (
        <div>
            <Field label="Name" name="name" component={FormInput} />
            <Field label="Location" name="location" component={FormInput} />
            <Field label="Email" name="email" component={FormInput} />

        </div>
    );
}

export default withFormik(Body)