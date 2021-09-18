import { getIn } from "formik";
import React from "react";
import { FormFeedback } from "reactstrap";

interface ErrorMessageProps {
  name: string;
  errors?: any;
  touched?: any;
}

const ErrorMessage = ({ name, errors, touched }: ErrorMessageProps) => {
  const hasError = getIn(touched, name) && getIn(errors, name);
  return hasError ? <FormFeedback>{getIn(errors, name)}</FormFeedback> : null;
};

export default ErrorMessage;
