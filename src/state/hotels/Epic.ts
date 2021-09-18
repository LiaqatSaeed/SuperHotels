import API from "../../lib/api/hotels";
import BaseEpic from "../BaseEpic";
import { BASE } from "./Actions";

const baseEpicObject = new BaseEpic();

const { get, getList, search, removeSelected, create, update } =
  baseEpicObject.CreateModuleEpics(BASE, API);

export { get, getList, search, removeSelected, create, update };
