import countBy from "lodash/countBy";
import get from "lodash/get";

export const CreateModuleSelectors = (baseKey: any) => {
  const selectList = (state: any) => {
    return get(state, `${baseKey}.list`, []);
  };

  const selectItem = (state: any) => get(state, `${baseKey}.item`, []);

  return {
    selectList,
    selectItem,
  };
};

export const countSelectedItem = (list: any) =>
  countBy(list, (item) => item.selected === true).true;
