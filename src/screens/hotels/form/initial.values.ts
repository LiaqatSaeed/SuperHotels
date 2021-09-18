export interface IHotelFormProps {
  name: string;
  image: string;
  location: string;
  createdAt?: string;
}

export const initialValues: IHotelFormProps = {
  name: "",
  image:
    "https://th.bing.com/th/id/R.ff3d52e5a99620e0ff91217a39149a42?rik=bw4icBHGHVH%2fyg&pid=ImgRaw&r=0",
  location: "",
  createdAt: "",
};
