import includes from "lodash/includes";
import map from "lodash/map";
import remove from "lodash/remove";

export const replaceIfSameItem = (list: any, payload: any) => {
  return map(list, (item) => {
    return item._id === payload._id ? { ...payload } : item;
  });
};

// todo: move removeOne and removeMany from BaseSelector here
export const removeFromListIfExists = (list: any, selected_ids: any) => {
  return remove(list, (item: any) => !includes(selected_ids, item._id));
};

export const markAllItemsAsSelected = (list: any, { selected }: any) =>
  map(list, (item) => ({ ...item, selected }));
