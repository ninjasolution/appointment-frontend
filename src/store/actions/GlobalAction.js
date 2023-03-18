export const SET_SIDE_BAR = "VISIBLE_SIDE_BAR";
export const SET_IS_LOADING = "SET_IS_LOADIN";
export const SETUP_USER = "SETUP_USER";

export const setSidebarAction = (status) => ({ type: SET_SIDE_BAR, payload: status })
export const setLoadingAction = (status) => ({ type: SET_IS_LOADING, payload: status })
export const setupUserAction = (data) => ({ type: SETUP_USER, payload: data })