import API from "./BaseAPI";

import { Post } from "../client/REST";

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

const AuthAPI = {
  ...BaseAPI,
  signIn: (params: any) => Post(`/login`, { user: params }),
  signUp: (params: any) => {
    return Post(`/register`, { user: params });
  },
};

export default AuthAPI;
