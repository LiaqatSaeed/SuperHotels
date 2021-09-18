export const addItem = (key: string, value: any) => {
  if (key) localStorage.setItem(key, JSON.stringify(value));
};

export const getContext = (key: string) => {
  return JSON.parse(getTokenItem(key) || "{}").context;
};

export const clearItem = (key: any) => {
  localStorage.removeItem(key);
};

export const getTokenItem = (key: any) => {
  return localStorage.getItem(key);
};

export const getToken = (key: string) => {
  const data = getTokenItem(key);
  if (data) {
    return JSON.parse(getTokenItem(key) || "{}").token;
  }
  return null;
};
