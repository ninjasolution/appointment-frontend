export const SET_SIDE_BAR = "VISIBLE_SIDE_BAR";
export const SET_IS_LOADING = "SET_IS_LOADIN";
export const SETUP_USER = "SETUP_USER";
export const SELECT_CATEGORY_TYPE = "SELECT_CATEGORY_TYPE";
export const SELECT_CLIENT = "SELECT_CLIENT";
export const SET_INFO_MODAL_STATE = "SET_INFO_MODAL_STATE";
export const SET_DETAIL_MODAL_STATE = "SET_DETAIL_MODAL_STATE";

export const setSidebarAction = (status) => ({ type: SET_SIDE_BAR, payload: status })
export const setLoadingAction = (status) => ({ type: SET_IS_LOADING, payload: status })
export const setupUserAction = (data) => ({ type: SETUP_USER, payload: data })
export const selectCategoryType = (id) => ({ type: SELECT_CATEGORY_TYPE, payload: id })
export const selectClient = (user) => ({ type: SELECT_CLIENT, payload: user })
export const setInfoModalStateAction = (state) => ({ type: SET_INFO_MODAL_STATE, payload: state })
export const setDetailModalStateAction = (state) => ({ type: SET_DETAIL_MODAL_STATE, payload: state })