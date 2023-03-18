export const CREATE_PUBLIC_MSG = "CREATE_PUBLIC_MSG";
export const LOAD_PUBLIC_MSG = "LOAD_PUBLIC_MSG";
export const LOAD_PRIVATE_MSG = "LOAD_PRIVATE_MSG";
export const REMOVE_PUBLIC_MSG = "REMOVE_PUBLIC_MSG";
export const CREATE_PRIVATE_MSG = "CREATE_PRIVATE_MSG";
export const REMOVE_PRIVATE_MSG = "REMOVE_PRIVATE_MSG";

export const LOAD_USER_LIST = "LOAD_USER_LIST";
export const SELECT_USER = "SELECT_USER";
export const REMOVE_LAST_MESSAGE = "REMOVE_LAST_MESSAGE";
export const LOAD_GAMES_DETAILS = "LOAD_GAMES_DETAILS";



export const loadPubMsgAction = (msg) => ({ type: LOAD_PUBLIC_MSG, payload: msg })
export const loadPivMsgAction = (msg) => ({ type: LOAD_PRIVATE_MSG, payload: msg })

export const removePubMsgAction = (msg) => ({ type: REMOVE_PUBLIC_MSG, payload: msg })
export const removePivMsgAction = (msg) => ({ type: REMOVE_PRIVATE_MSG, payload: msg })

export const loadUserListAction = (users) => ({ type: LOAD_USER_LIST, payload: users })
export const selectUserAction = (user) => ({ type: SELECT_USER, payload: user })

export const removeLastMessage = (name) => ({type: REMOVE_LAST_MESSAGE, payload: name})
export const loadGameDetailsAction = (games) => ({ type: LOAD_GAMES_DETAILS, payload: games })
