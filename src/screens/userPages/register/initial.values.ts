export interface IRegistrationFormProps {
  email: string;
  password: string;
  confirm_password: string;
}

export const initialValues: IRegistrationFormProps = {
  email: "",
  password: "",
  confirm_password: "",
};
