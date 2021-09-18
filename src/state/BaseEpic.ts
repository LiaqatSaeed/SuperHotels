import { CreateModuleActions } from "./BaseActions";

class BaseEpic {
  CreateModuleEpics = (BASE: any, API: any) => {
    const {
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
    } = CreateModuleActions(BASE);

    // Actions API
    const getList = (params: any) => async (dispatch: any) => {
      return this.makeCall(
        API.index,
        { ...params },
        ListBegin,
        ListSuccess,
        ListFailure,
        dispatch
      );
    };

    const get = (params: any) => async (dispatch: any) =>
      this.makeCall(API.get, { id: params }, Begin, Success, Failure, dispatch);

    const create = (params: any) => async (dispatch: any) =>
      this.makeCall(
        API.create,
        { ...params },
        CreateBegin,
        CreateSuccess,
        CreateFailure,
        dispatch
      );

    const update = (id: any, params: any) => async (dispatch: any) =>
      this.makeCall(
        API.update,
        { id, params },
        UpdateBegin,
        UpdateSuccess,
        UpdateFailure,
        dispatch
      );

    const removeSelected =
      (selected_ids: any, queryParams: any) => async (dispatch: any) =>
        this.makeCall(
          API.remove,
          { selected_ids, queryParams },
          DeleteSelectedBegin,
          DeleteSelectedSuccess,
          DeleteSelectedFailure,
          dispatch
        );

    const search = (params: any) => async (dispatch: any) =>
      this.makeCall(
        API.search,
        { ...params },
        SearchBegin,
        SearchSuccess,
        SearchFailure,
        dispatch
      );

    return {
      get,
      getList,
      search,
      removeSelected,
      create,
      update,
    };
  };

  async makeCall(
    apiCallFunction: any,
    functionParams: any,
    onBegin: any,
    onSuccess: any,
    onFailure: any,
    dispatch: any
  ) {
    try {
      dispatch(onBegin(functionParams));

      const response = await apiCallFunction({ ...functionParams });

      if (response.error) {
        return dispatch(onFailure(response || "ERROR"));
      } else {
        const { data, meta } = response;
        const { selected_ids } = functionParams;
        const filtered_response = { data, meta, selected_ids };

        return dispatch(onSuccess(filtered_response));
      }
    } catch (error) {
      dispatch(onFailure("Something Went Wrong" || "ERROR"));
    }
  }
}

export default BaseEpic;
