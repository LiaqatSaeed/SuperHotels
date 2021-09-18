export const APP_AUTH_KEY = "@app_auth";

export const addItem = (value: any) => {
  localStorage.setItem(APP_AUTH_KEY, JSON.stringify(value));
};

export const getContext = () => {
  return JSON.parse(getItem() || "{}").context;
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
    return `bearer ${token}`;
  }
  return null;
};
