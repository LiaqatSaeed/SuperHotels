import { CreateModuleActions } from "../BaseActions";

export const BASE = "HOTEL";

export const {
  BEGIN,
  SUCCESS,
  FAILURE,
  LIST_BEGIN,
  LIST_SUCCESS,
  LIST_FAILURE,
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  CREATE_BEGIN,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  UPDATE_BEGIN,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  DELETE_SELECTED_BEGIN,
  DELETE_SELECTED_SUCCESS,
  DELETE_SELECTED_FAILURE,
  MARK_ALL_SELECTED,
  MARK_SELECTED,
  Begin,
  Success,
  Failure,
  ListBegin,
  ListSuccess,
  ListFailure,
  SearchBegin,
  SearchSuccess,
  SearchFailure,
  CreateBegin,
  CreateSuccess,
  CreateFailure,
  UpdateBegin,
  UpdateSuccess,
  UpdateFailure,
  DeleteSelectedBegin,
  DeleteSelectedSuccess,
  DeleteSelectedFailure,
  MarkSelected,
  MarkAllSelected,
} = CreateModuleActions(BASE);