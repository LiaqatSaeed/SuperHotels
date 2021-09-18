import filter from "lodash/filter";
import keys from "lodash/keys";

import {
  GetSecured,
  PostSecured,
  PutSecured,
  DeleteSecured,
} from "../client/REST";

export const makeQueryString = (params) => {
  var queryString = "";
  if (params !== undefined) {
    queryString = filter(keys(params), (key) => params[key] != null)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");
  }

  return queryString;
};

class API {
  constructor({ uri, delete_uri, search_uri, multiple_ids, object_key }) {
    this.uri = uri;
    this.delete_uri = delete_uri;
    this.search_uri = search_uri;
    this.multiple_ids = multiple_ids;
    this.object_key = object_key;
  }

  index = async (queryParams) =>
    GetSecured(
      `/${this.uri}?${makeQueryString({
        ...queryParams,
      })}`
    );

  get = ({ id, queryParams }) => {
    return GetSecured(
      `/${this.uri}/id/${id}?${makeQueryString({
        ...queryParams,
      })}`
    );
  };

  create = (params) => {
    return PostSecured(`/${this.uri}`, { [this.object_key]: params });
  };

  update = ({ id, params, locale }) =>
    PutSecured(`/${this.uri}/id/${id}`, { [this.object_key]: params });

  remove = ({ selected_ids }) =>
    DeleteSecured(`/${this.uri}/id/${selected_ids[0]}`);

  removeMultiple = ({ selected_ids }) => {
    return DeleteSecured(
      `/${this.uri}?${makeQueryString({
        ...selected_ids,
      })}`
    );
  };

  getDynamicDDl = ({ fieldName, params }) => {
    return GetSecured(
      `/${fieldName}/ddl?${makeQueryString({
        ...params,
      })}`
    );
  };

  search = (queryParams) =>
    GetSecured(
      `/${this.uri}?${makeQueryString({
        ...queryParams,
      })}`
    );
}

export default API;
