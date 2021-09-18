import * as Yup from "yup";
const email_invalid = "Invalid email";
const required = "Required";
const must_match = "Passwords must match";

const schema = Yup.object().shape({
  name: Yup.string().required(required),
  email: Yup.string().email(email_invalid).required(required),
  password: Yup.string().required(required),
  confirm_password: Yup.string()
    .required(required)
    .oneOf([Yup.ref("password"), null], must_match),
});
export default schema;
