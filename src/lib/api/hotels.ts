import API from "./BaseAPI";
import { Get } from "../client/REST";

const uri = "hotels";
const search_uri = "search";
const multiple_ids = "hotel_ids";
const object_key = "hotel";

const BaseAPI = new API({
  uri,
  search_uri,
  multiple_ids,
  object_key,
});

const AuthAPI = {
  ...BaseAPI,
  index: (params: any) => Get(`/hotels`),
};

export default AuthAPI;
