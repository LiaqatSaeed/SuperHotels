export interface IHotelFormProps {
  _id?: string;
  name: string;
  image: string;
  location: string;
  createdAt?: string;
}

export const initialValues: IHotelFormProps = {
  _id: "",
  name: "",
  image: "",
  location: "",
  createdAt: "",
};
