import * as React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { FieldProps, getIn } from "formik";
import ErrorMessage from "./form.feedback";
import isEmpty from "lodash/isEmpty";
import { isNil } from "lodash";

export interface IFormInputProps {
    placeholder?: string;
    label?: string;
}

export function FormInput({
    label,
    placeholder,
    field: { name, value },
    form: {
        errors,
        touched,
        setFieldValue
    },
    ...rest
}: IFormInputProps & FieldProps) {
    const invalid = !isNil(getIn(touched, name) && getIn(errors, name));

    return (
        <FormGroup>
            <Label className="text-start w-100" for={name}>{label}</Label>
            <Input

                invalid={invalid}
                valid={!invalid && !isEmpty(value)}
                name={name}
                id={name}
                value={value}
                onChange={(e) => setFieldValue(name, e.target.value)}
                {...rest}
            />
            <ErrorMessage touched={touched} errors={errors} name={name} />
        </FormGroup>
    );
}
