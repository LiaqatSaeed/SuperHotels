import * as Yup from "yup";
const email_invalid = "Invalid email";
const required = "Required";

const schema = Yup.object().shape({
  email: Yup.string().email(email_invalid).required(required),
  password: Yup.string().required(required),
});
export default schema;
