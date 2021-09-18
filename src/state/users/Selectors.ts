import { CreateModuleSelectors } from "../BaseSelector";
const baseKey = "Users";

export const { selectList, selectItem } = CreateModuleSelectors(baseKey);
