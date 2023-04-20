export const SET_SIDE_BAR = "VISIBLE_SIDE_BAR";
export const SET_IS_LOADING = "SET_IS_LOADIN";
export const SETUP_USER = "SETUP_USER";
export const SELECT_CATEGORY_TYPE = "SELECT_CATEGORY_TYPE";

export const setSidebarAction = (status) => ({ type: SET_SIDE_BAR, payload: status })
export const setLoadingAction = (status) => ({ type: SET_IS_LOADING, payload: status })
export const setupUserAction = (data) => ({ type: SETUP_USER, payload: data })
export const selectCategoryType = (id) => ({ type: SELECT_CATEGORY_TYPE, payload: id })