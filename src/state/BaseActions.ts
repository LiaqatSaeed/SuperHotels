export const BaseBegin = (type: any) => ({ type });

export const BaseError = (type: any, error: any) => ({
  type,
  data: error,
});

export const BasePayload = (type: any, { data, meta }: any) => {
  return {
    type,
    data,
    meta,
  };
};

export const BaseWithSelectedIds = (
  type: any,
  { data, selected_ids, meta }: any
) => ({
  type,
  data,
  selected_ids,
  meta,
});

export const BaseMarkAllSelected = (type: any, { data, selected }: any) => ({
  type,
  data,
  selected,
});

export const CreateModuleActions = (BASE: any) => {
  // Action Constants
  const BEGIN = `${BASE}_BEGIN`;
  const SUCCESS = `${BASE}_SUCCESS`;
  const FAILURE = `${BASE}_FAILURE`;

  const LIST_BEGIN = `${BASE}_LIST_BEGIN`;
  const LIST_SUCCESS = `${BASE}_LIST_SUCCESS`;
  const LIST_FAILURE = `${BASE}_LIST_FAILURE`;

  const SEARCH_BEGIN = `${BASE}_SEARCH_BEGIN`;
  const SEARCH_SUCCESS = `${BASE}_SEARCH_SUCCESS`;
  const SEARCH_FAILURE = `${BASE}_SEARCH_FAILURE`;

  const MARK_SELECTED = `${BASE}_MARK_SELECTED`;
  const MARK_ALL_SELECTED = `${BASE}_MARK_ALL_SELECTED`;

  const DELETE_SELECTED_BEGIN = `${BASE}_DELETE_SELECTED_BEGIN`;
  const DELETE_SELECTED_SUCCESS = `${BASE}_DELETE_SELECTED_SUCCESS`;
  const DELETE_SELECTED_FAILURE = `${BASE}_DELETE_SELECTED_FAILURE`;

  const CREATE_BEGIN = `${BASE}_CREATE_BEGIN`;
  const CREATE_SUCCESS = `${BASE}_CREATE_SUCCESS`;
  const CREATE_FAILURE = `${BASE}_CREATE_FAILURE`;

  const UPDATE_BEGIN = `${BASE}_UPDATE_BEGIN`;
  const UPDATE_SUCCESS = `${BASE}_UPDATE_SUCCESS`;
  const UPDATE_FAILURE = `${BASE}_UPDATE_FAILURE`;

  // Action creators

  // Fetch Single Location
  const Begin = () => BaseBegin(BEGIN);
  const Success = (payload: any) => BasePayload(SUCCESS, payload);
  const Failure = (error: any) => BaseError(FAILURE, error);

  // Fetch list
  const ListBegin = (payload: any) => BaseBegin(LIST_BEGIN);
  const ListSuccess = ({ data }: any) => {
    return BasePayload(LIST_SUCCESS, { data });
  };
  const ListFailure = (error: any) => BaseError(LIST_FAILURE, error);

  // Search
  const SearchBegin = (payload: any) => BaseBegin(SEARCH_BEGIN);
  const SearchSuccess = ({ data }: any) =>
    BasePayload(SEARCH_SUCCESS, { data });
  const SearchFailure = (error: any) => BaseError(SEARCH_FAILURE, error);

  // delete
  const DeleteSelectedBegin = (payload: any) =>
    BaseBegin(DELETE_SELECTED_BEGIN);
  const DeleteSelectedSuccess = ({ payload, selected_ids, meta }: any) =>
    BaseWithSelectedIds(DELETE_SELECTED_SUCCESS, {
      payload,
      selected_ids,
      meta,
    });
  const DeleteSelectedFailure = (error: any) =>
    BasePayload(DELETE_SELECTED_FAILURE, error);

  // Create
  const CreateBegin = (payload: any) => BaseBegin(CREATE_BEGIN);
  const CreateSuccess = (payload: any) => BasePayload(CREATE_SUCCESS, payload);
  const CreateFailure = (error: any) => BaseError(CREATE_FAILURE, error);

  // Update
  const UpdateBegin = (payload: any) => BaseBegin(UPDATE_BEGIN);
  const UpdateSuccess = (payload: any) => BasePayload(UPDATE_SUCCESS, payload);
  const UpdateFailure = (error: any) => BaseError(UPDATE_FAILURE, error);

  // MARK AS SELECTED IN REDUX
  const MarkSelected = (data: any) => BasePayload(MARK_SELECTED, { data });
  const MarkAllSelected = ({ data, selected }: any) =>
    BaseMarkAllSelected(MARK_ALL_SELECTED, { data, selected });

  return {
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
  };
};
