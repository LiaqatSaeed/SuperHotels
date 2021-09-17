
import { Formik, FormikConfig } from 'formik';
import React from 'react';
// First we need to add a type to let us extend the incoming component.


export function withFormik<P>(WrappedComponent: React.FC<P>) {
    const FormikBase = ({ initialValues, validationSchema, onSubmit, ...rest }: FormikConfig<P>) => {

        return (
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={true}
                {...rest}>
                {({ isValid, ...props }: any) => (
                    <>
                        {/* <PromptIfDirtyWithMessage /> */}
                        <WrappedComponent {...rest} {...props} />
                    </>
                )}
            </Formik>
        );
    };
    return FormikBase;
}
