import { CreateModuleSelectors } from "../BaseSelector";
const baseKey = "Hotel";

export const { selectList, selectItem } = CreateModuleSelectors(baseKey);
