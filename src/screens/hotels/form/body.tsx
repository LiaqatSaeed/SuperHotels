import * as React from 'react';
import { withFormik } from '../../../hooks/withFormik';
import { IHotelFormProps } from './initial.values';
import { FormInput } from '../../../components/form.input';
import { Field } from 'formik';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import isEmpty from 'lodash/isEmpty';



const Body = ({ _id }: IHotelFormProps) => {
    return (
        <Row>
            <Col md={6}>
                <Field label="Name" name="name" component={FormInput} />
                <Field label="Location" name="location" component={FormInput} />
            </Col>
            <hr />
            <FormGroup className="mt-3">
                <Input type="submit" value={isEmpty(_id) ? "Save" : "Update"} className="btn-primary" />
            </FormGroup>
        </Row>
    );
}

export default withFormik(Body)