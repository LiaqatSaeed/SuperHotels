import * as Yup from "yup";
const required = "Required";

const schema = Yup.object().shape({
  name: Yup.string().required(required),
  location: Yup.string().required(required),
  image: Yup.string().required(required),
});
export default schema;
