import API from "./BaseAPI";

import { PutSecured, Post, PostSecured } from "../client/REST";

const uri = "users";
const delete_uri = "delete_users";
const search_uri = "search";
const multiple_ids = "user_ids";
const object_key = "user";

const BaseAPI = new API({
  uri,
  delete_uri,
  search_uri,
  multiple_ids,
  object_key,
});

export default {
  ...BaseAPI,
  signIn: (params: any) => Post(`/login`, params),
  signUp: (params: any) => {
    return Post(`/register`, { user: params });
  },
  registerDevice: (id: any, params: any) =>
    PostSecured(`/${uri}/register_device`, { token: params }),
};
