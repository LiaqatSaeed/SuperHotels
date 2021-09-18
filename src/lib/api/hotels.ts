import API from "./BaseAPI";

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

export default BaseAPI;
