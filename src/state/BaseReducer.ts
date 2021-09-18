import { CreateModuleActions } from "./BaseActions";
import { countSelectedItem } from "./BaseSelector";
import {
  markAllItemsAsSelected,
  removeFromListIfExists,
  replaceIfSameItem,
} from "./BaseUpdater";

export const epicCurrentStatus = (
  isBegin: any,
  isSuccess: any,
  isFailure: any
) => ({
  isBegin,
  isSuccess,
  isFailure,
});

export const begin = (state: any) => ({
  ...state,
  ...epicCurrentStatus(true, false, false),
});

export const success = (state: any) => ({
  ...state,
  ...epicCurrentStatus(false, true, false),
});

export const failure = (state: any) => ({
  ...state,
  ...epicCurrentStatus(false, false, true),
});

export const CreateModuleReducers = (BASE: any, callBackReducers = null) => {
  const {
    SUCCESS,
    FAILURE,
    LIST_BEGIN,
    LIST_SUCCESS,
    LIST_FAILURE,
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    CREATE_SUCCESS,
    UPDATE_SUCCESS,
    DELETE_SELECTED_BEGIN,
    DELETE_SELECTED_SUCCESS,
    DELETE_SELECTED_FAILURE,
    MARK_ALL_SELECTED,
    MARK_SELECTED,
  } = CreateModuleActions(BASE);

  // reducers
  const reducer = (
    state = {
      list: [],
      item: [],
      selectedTotal: undefined,
    },
    action: any
  ) => {
    switch (action.type) {
      case LIST_BEGIN || SEARCH_BEGIN || DELETE_SELECTED_BEGIN:
        return begin(state);

      case LIST_SUCCESS:
        return success({ ...state, list: action.data });

      case LIST_FAILURE:
        return failure({ ...state, error: action });

      case SEARCH_SUCCESS:
        return success({ ...state, list: action.data, loading: false });
      case SEARCH_FAILURE:
        return failure({ ...state, error: action });

      case MARK_SELECTED:
        const listMarkSelected = replaceIfSameItem(state.list, action.data);
        return {
          ...state,
          list: listMarkSelected,
          selectedTotal: countSelectedItem(listMarkSelected),
        };

      case MARK_ALL_SELECTED:
        const listAllSelected = markAllItemsAsSelected(state.list, action);
        return {
          ...state,
          list: listAllSelected,
          selectedTotal: countSelectedItem(listAllSelected),
        };

      case DELETE_SELECTED_SUCCESS:
        return {
          ...state,
          list: removeFromListIfExists(state.list, action.selected_ids),
        };

      case DELETE_SELECTED_FAILURE:
        return { ...state, error: action };

      case CREATE_SUCCESS:
        return {
          ...state,
          item: action.data,
          list: [...state.list, action.data],
        };

      case UPDATE_SUCCESS:
        return { ...state, item: action.data };

      case SUCCESS:
        return { ...state, item: action.data };

      case FAILURE:
        return { ...state, error: action };

      default:
        return state;
    }
  };
  return reducer;
};
