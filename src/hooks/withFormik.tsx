
import { Formik, FormikConfig, Form } from 'formik';
import React from 'react';
// First we need to add a type to let us extend the incoming component.


export function withFormik<P>(WrappedComponent: React.FC<P>) {
    const FormikBase = ({ initialValues, validationSchema, onSubmit, ...rest }: FormikConfig<P>) => {

        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={true}
                {...rest}>
                {({ isValid, ...props }: any) => (
                    <Form>
                        {/* <PromptIfDirtyWithMessage /> */}
                        <WrappedComponent {...rest} {...props} />
                    </Form>
                )}
            </Formik>
        );
    };
    return FormikBase;
}
