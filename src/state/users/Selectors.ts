import { CreateModuleSelectors } from "../BaseSelector";
const baseKey = "User";

export const { selectList, selectItem } = CreateModuleSelectors(baseKey);
