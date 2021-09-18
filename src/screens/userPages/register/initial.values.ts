export interface IRegistrationFormProps {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const initialValues: IRegistrationFormProps = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
