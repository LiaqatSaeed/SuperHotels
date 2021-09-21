import jwt_decode from "jwt-decode";
import { IAuthProps } from "../../context/auth.context";
export const APP_AUTH_KEY = "@app_auth";

export const addItem = (value: any) => {
  localStorage.setItem(APP_AUTH_KEY, JSON.stringify(value));
};

export const getContext = () => {
  let token = getToken();
  if (token) {
    let decoded: IAuthProps = jwt_decode(token);

    return decoded.context;
  }
  return null;
};

export const clearItem = () => {
  localStorage.removeItem(APP_AUTH_KEY);
};

export const getItem = () => {
  return localStorage.getItem(APP_AUTH_KEY);
};

export const getToken = () => {
  const data = getItem();
  if (data) {
    let token = JSON.parse(data || "{}").token;
    return token;
  }
  return null;
};

export const getBearerToken = () => {
  let token = getToken();
  return `bearer ${token}`;
};
