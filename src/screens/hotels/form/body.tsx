import * as React from 'react';
import { withFormik } from '../../../hooks/withFormik';
import { FormInput } from '../../../components/form.input';
import { Field } from 'formik';
import { Row, FormGroup, Input } from 'reactstrap';
import isEmpty from 'lodash/isEmpty';




const HotelForm = ({ values: { _id }, isSubmitting }: any) => {
    console.log(isSubmitting)
    return (
        <Row>
            <Field label="Name" name="name" component={FormInput} />
            <Field label="Location" name="location" component={FormInput} />
            <Field label="Add Image Url from web" name="image" component={FormInput} />
            <hr />
            <FormGroup className="mt-3">
                <Input type="submit" value={isEmpty(_id) ? "Save" : "Update"} className="btn-primary" />
            </FormGroup>
        </Row>
    );
}

export default withFormik(HotelForm)